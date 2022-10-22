import * as dotenv from 'dotenv';
import { Telegraf } from 'telegraf';
import { Message } from 'typegram';
import ChatService, { ChatMessage } from './services/chat';
import MusicService from './services/music';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

const musicService = new MusicService();
const chatService = new ChatService(musicService);

bot.on('text', async (ctx) => {
  const { message, reply } = ctx;

  const { text, reply_to_message } = message;

  const chatMessage: ChatMessage = {
    text,
    replyToMessage: {
      text: ((reply_to_message || { text: '' }) as Message.TextMessage).text
    }
  };

  chatService.handleMessage(chatMessage, reply);
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
