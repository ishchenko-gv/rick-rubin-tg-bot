import { Service } from 'typedi';
import { MusicStrategy, TrackData } from '../../types';

@Service()
export class SpotifyStrategy implements MusicStrategy {
  public async addTrackToPlaylist() {}

  public parseTrackDataFromUrl(url: string): TrackData | null {
    return null;
  }
}
