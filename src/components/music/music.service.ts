import { Service } from 'typedi';
import { Track, MusicStrategy } from '../../types';
import { YandexMusicStrategy } from '../yandex/yandex-music.strategy';

@Service()
export default class MusicService {
  private yandexMusicStrategy: YandexMusicStrategy;

  constructor(yandexMusicStrategy: YandexMusicStrategy) {
    this.yandexMusicStrategy = yandexMusicStrategy;
  }

  public async addToPlaylist(musicData: Track & { strategy: MusicStrategy }) {
    const { strategy, albumId, trackId } = musicData;

    strategy.addTrackToPlaylist({ albumId, trackId });
  }

  public parseDataFromUrl(
    url: string
  ): (Track & { strategy: MusicStrategy }) | null {
    let data = this.yandexMusicStrategy.parseTrackDataFromUrl(url);

    if (data)
      return {
        ...data,
        strategy: this.yandexMusicStrategy
      };

    return null;
  }
}
