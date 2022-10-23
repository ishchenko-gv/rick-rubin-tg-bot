export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly BOT_TOKEN: string;
      readonly YANDEX_MUSIC_USERNAME: string;
      readonly YANDEX_MUSIC_PASSWORD: string;
    }
  }
}
