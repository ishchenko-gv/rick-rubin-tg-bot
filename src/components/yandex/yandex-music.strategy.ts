import { Service } from 'typedi';
import { Track, MusicStrategy } from '../../types';
import { YandexMusicApi } from './yandex-music.api';

@Service()
export class YandexMusicStrategy implements MusicStrategy {
  private yandexMusicApi;

  constructor(yandexMusicApi: YandexMusicApi) {
    this.yandexMusicApi = yandexMusicApi;
  }

  public async addTrackToPlaylist(track: Track) {
    const { trackId, albumId } = track;

    const playlistRevision = await this.yandexMusicApi.getPlaylistRevision();

    await this.yandexMusicApi.addTrackToPlaylist(
      trackId,
      albumId,
      playlistRevision
    );
  }

  public parseTrackDataFromUrl(url: string) {
    const match = url.match(
      new RegExp('https://music.yandex.ru/album/(\\d+)/track/(\\d+)')
    );

    if (!match) return null;

    const [, albumId, trackId] = match;

    if (!albumId || !trackId) return null;

    return { albumId, trackId };
  }
}
