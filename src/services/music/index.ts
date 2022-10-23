import YandexMusicService from '../yandex';

export default class MusicService {
  yandexMusic: YandexMusicService;

  constructor(yandexMusic: YandexMusicService) {
    this.yandexMusic = yandexMusic;
  }

  async addToPlaylist(url: string) {
    let service;

    if (this.yandexMusic.recognizeUrl(url)) {
      service = this.yandexMusic;
    }

    if (!service) return;

    const { trackId, albumId } = service.parseTrackDataFromUrl(url);

    return { trackId, albumId };

    // service.addTrackToPlaylist(trackId, albumId, 0);
  }

  recognizeUrl(url: string) {
    return false;
  }
}
