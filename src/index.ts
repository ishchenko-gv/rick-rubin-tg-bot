import * as dotenv from 'dotenv';
import { Telegraf } from 'telegraf';
import { Message } from 'typegram';
import ChatService, { ChatMessage } from './services/chat';
import MusicService from './services/music';
import YandexMusicService from './services/yandex';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

const yandexMusic = new YandexMusicService();
const musicService = new MusicService(yandexMusic);
const chatService = new ChatService(musicService);

bot.on('text', async (ctx) => {
  const { text, reply_to_message } = ctx.message;

  const chatMessage: ChatMessage = {
    text,
    replyToMessage: {
      text: ((reply_to_message || { text: '' }) as Message.TextMessage).text
    }
  };

  chatService.handleMessage(chatMessage, (message) => ctx.reply(message));
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
