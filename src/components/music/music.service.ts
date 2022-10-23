import { Service } from 'typedi';
import { YandexMusicStrategy } from '../yandex/yandex-music.strategy';

enum MusicServices {
  Yandex
}

@Service()
export default class MusicService {
  private yandexMusicStrategy: YandexMusicStrategy;

  constructor(yandexMusicStrategy: YandexMusicStrategy) {
    this.yandexMusicStrategy = yandexMusicStrategy;
  }

  public async addToPlaylist(url: string) {
    let strategy;

    if (this.getStrategyByUrl(url)) {
      strategy = this.yandexMusicStrategy;
    }

    if (!strategy) return;

    strategy.addTrackToPlaylist(url);
  }

  getStrategyByUrl(url: string) {
    return false;
  }
}
