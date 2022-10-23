import { Telegraf } from 'telegraf';
import { Message } from 'typegram';
import { RickService, RickMessage } from '../rick/rick.service';

export class Telegram {
  private rickService;

  constructor(rickService: RickService) {
    this.rickService = rickService;
  }

  start() {
    const bot = new Telegraf(process.env.BOT_TOKEN);

    bot.on('text', async (ctx) => {
      const { text, reply_to_message } = ctx.message;

      const chatMessage: RickMessage = {
        text,
        replyToMessage: {
          text: ((reply_to_message || { text: '' }) as Message.TextMessage).text
        }
      };

      this.rickService.readMessage(chatMessage, (message) =>
        ctx.reply(message)
      );
    });

    bot.launch();

    process.once('SIGINT', () => bot.stop('SIGINT'));
    process.once('SIGTERM', () => bot.stop('SIGTERM'));
  }
}
