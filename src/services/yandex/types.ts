type Credentials = {
  username: string;
  password: string;
};

declare class YandexMusicAPI {
  init(credentials: Credentials): void;
}
