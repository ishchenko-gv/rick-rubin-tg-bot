// import 'yandex-music-api';

type YandexMusicAPICredentials = {
  username: string;
  password: string;
};

declare module 'yandex-music-api' {
  class YandexMusicAPI {
    init(credentials: YandexMusicAPICredentials): Promise<void>;
    getAccountStatus(): Promise<void>;
  }
  export default YandexMusicAPI;
}
