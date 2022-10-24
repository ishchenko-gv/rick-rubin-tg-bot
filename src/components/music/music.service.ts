import { Service } from 'typedi';
import { TrackData, MusicStrategy } from '../../types';
import { SpotifyStrategy } from '../spotify/spotify.strategy';
import { YandexMusicStrategy } from '../yandex/yandex-music.strategy';

@Service()
export default class MusicService {
  private yandexMusicStrategy: YandexMusicStrategy;
  private spotifyStrategy: SpotifyStrategy;

  constructor(
    yandexMusicStrategy: YandexMusicStrategy,
    spotifyStrategy: SpotifyStrategy
  ) {
    this.yandexMusicStrategy = yandexMusicStrategy;
    this.spotifyStrategy = spotifyStrategy;
  }

  public async addToPlaylist(strategy: MusicStrategy, trackData: TrackData) {
    strategy.addTrackToPlaylist(trackData);
  }

  public parseDataFromUrl(url: string): [MusicStrategy, TrackData] | [] {
    let data = [
      this.yandexMusicStrategy,
      this.yandexMusicStrategy.parseTrackDataFromUrl(url)
    ] as [MusicStrategy, TrackData | null];

    if (!data[1])
      data = [
        this.spotifyStrategy,
        this.spotifyStrategy.parseTrackDataFromUrl(url)
      ];

    if (!data[1]) return [];

    return data as [MusicStrategy, TrackData];
  }
}
