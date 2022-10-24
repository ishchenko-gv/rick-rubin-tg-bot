import 'reflect-metadata';
import { Container } from 'typedi';
import * as dotenv from 'dotenv';

import { Telegraf } from 'telegraf';
import { Message } from 'typegram';
import { RickService, ChatMessage } from './components/rick/rick.service';

dotenv.config();

class App {
  private bot;
  private rickService;

  constructor(bot: Telegraf, rickService: RickService) {
    this.bot = bot;
    this.rickService = rickService;
  }

  start() {
    this.bot.on('text', async (ctx) => {
      const { text, reply_to_message } = ctx.message;

      const chatMessage: ChatMessage = {
        text,
        replyToMessage: {
          text: ((reply_to_message || { text: '' }) as Message.TextMessage).text
        }
      };

      this.rickService.readMessage(chatMessage, (message) =>
        ctx.reply(message)
      );
    });

    this.bot.launch();

    process.once('SIGINT', () => this.bot.stop('SIGINT'));
    process.once('SIGTERM', () => this.bot.stop('SIGTERM'));
  }
}

new App(
  new Telegraf(process.env.BOT_TOKEN),
  Container.get(RickService)
).start();
