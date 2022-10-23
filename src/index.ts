import { Telegraf } from 'telegraf';
import * as dotenv from 'dotenv';
import YandexMusic from './services/yandex';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Здарова, агалы'));

bot.on('text', async (ctx) => {
  console.log(ctx.update.message);

  const isAwesome =
    ctx.update.message.text && ctx.update.message.text.match(/у+/);

  console.log('is awesome', isAwesome);

  if (
    isAwesome &&
    ctx.update.message.reply_to_message &&
    'text' in ctx.update.message.reply_to_message
  ) {
    const { albumId, trackId } = ym.parseTrackDataFromUrl(
      ctx.update.message.reply_to_message?.text || ''
    );

    const revision = await ym.getPlaylistRevision();

    if (!albumId || !trackId) return;

    ym.addTrackToPlaylist(trackId, albumId, revision);
  }
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

const ym = new YandexMusic();
console.log(
  ym.parseTrackDataFromUrl(
    'https://music.yandex.ru/album/17066136/track/85915826'
  )
);
