import { Service } from 'typedi';
import { TrackData, MusicStrategy } from '../../types';
import { YandexMusicStrategy } from '../yandex/yandex-music.strategy';

@Service()
export default class MusicService {
  private yandexMusicStrategy: YandexMusicStrategy;

  constructor(yandexMusicStrategy: YandexMusicStrategy) {
    this.yandexMusicStrategy = yandexMusicStrategy;
  }

  public async addToPlaylist(strategy: MusicStrategy, track: TrackData) {
    strategy.addTrackToPlaylist(track);
  }

  public parseDataFromUrl(url: string): [MusicStrategy, TrackData] | [] {
    let data = this.yandexMusicStrategy.parseTrackDataFromUrl(url);

    if (data) return [this.yandexMusicStrategy, data];

    return [];
  }
}
