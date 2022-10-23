import { Service } from 'typedi';
import { MusicStrategy } from '../../types';
import { YandexMusicApi } from './yandex-music.api';

@Service()
export class YandexMusicStrategy implements MusicStrategy {
  private yandexMusicApi;

  constructor(yandexMusicApi: YandexMusicApi) {
    this.yandexMusicApi = yandexMusicApi;
  }

  public async addTrackToPlaylist(url: string) {
    const { trackId, albumId } = this.parseTrackDataFromUrl(url);

    const playlistRevision = await this.yandexMusicApi.getPlaylistRevision();

    await this.yandexMusicApi.addTrackToPlaylist(
      trackId,
      albumId,
      playlistRevision
    );
  }

  parseTrackDataFromUrl(url: string) {
    const [, albumId] = url.match(/album\/(\d+)/) || [];
    const [, trackId] = url.match(/track\/(\d+)/) || [];

    return {
      albumId,
      trackId
    };
  }

  recognizeUrl(url: string) {
    return !!url.match(
      new RegExp('https://music.yandex.ru/album/(\\d+)/track/(\\d+)')
    );
  }
}
