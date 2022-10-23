type YandexMusicAPICredentials = {
  username: string;
  password: string;
};

declare module 'yandex-music-api' {
  class YandexMusicAPI {
    init(credentials: YandexMusicAPICredentials): void;
  }

  export default YandexMusicAPI;
}
