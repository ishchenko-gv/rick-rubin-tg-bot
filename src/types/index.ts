export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly BOT_TOKEN: string;
      readonly YANDEX_COOKIE: string;
    }
  }
}

export interface MusicStrategy {
  addTrackToPlaylist(url: string): void;
}
