export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly BOT_TOKEN: string;
      readonly YANDEX_COOKIE: string;
    }
  }
}

export type Track = {
  trackId: string;
  albumId: string;
};

export interface MusicStrategy {
  addTrackToPlaylist(track: Track): void;
}
