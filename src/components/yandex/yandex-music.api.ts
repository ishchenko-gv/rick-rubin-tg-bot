import { Service } from 'typedi';

@Service()
export class YandexMusicApi {
  public async addTrackToPlaylist(
    trackId: string,
    albumId: string,
    revision: number
  ) {
    try {
      await fetch('https://music.yandex.ru/handlers/playlist-patch.jsx', {
        method: 'post',
        headers: {
          Cookie: process.env.YANDEX_COOKIE,
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'X-Current-UID': '137318309',
          'X-Retpath-Y': 'https://music.yandex.ru/users/nordicore/playlists'
        },
        body: `owner=137318309&kind=1030&revision=${revision}&diff=%5B%7B%22op%22%3A%22insert%22%2C%22at%22%3A0%2C%22tracks%22%3A%5B%7B%22id%22%3A%22${trackId}%22%2C%22albumId%22%3A${albumId}%7D%5D%7D%5D&from=web-own_playlists-track-track-main&lang=ru&sign=de666a343477ce3da4d2bf64ffbcfffaaeefc850%3A1666390053584&experiments=%7B%22ABTestIds%22%3A%22667484%2C73%22%2C%22WebDontPayPopup%22%3A%22default%22%2C%22WebGenerativeTab%22%3A%22default%22%2C%22WebInteractiveSplashscreenWithTrackTimeLimit%22%3A%2230sec%22%2C%22WebMyVibeFreemium%22%3A%22on%22%2C%22WebNewImportVk%22%3A%22default%22%2C%22WebPayPromoToPay%22%3A%22on%22%2C%22WebProductNamePlus%22%3A%22on%22%2C%22WebPromocodeMain%22%3A%22all%22%2C%22WebRedAlert%22%3A%22default%22%2C%22WebTVMusicYnison%22%3A%22default%22%2C%22WebTouchFreeMusicRestriction%22%3A%22control%22%2C%22WebTouchMBrickFButton%22%3A%22on%22%2C%22WebYMConnect%22%3A%22default%22%2C%22barBelowExperiment%22%3A%22default%22%2C%22boostConfigExperiment632ea30e4c9d9c728ba9cf03%22%3A%22default%22%2C%22boostConfigExperiment632ea3764c9d9c728ba9cf17%22%3A%22default%22%2C%22boostConfigExperiment6336f6b67b511931704c44bb%22%3A%22on%22%2C%22boostConfigExperiment6336f7077b511931704c44c1%22%3A%22on%22%2C%22boostConfigExperiment6336f7a87b511931704c44c5%22%3A%22on%22%2C%22boostConfigExperiment6336f8357b511931704c44ca%22%3A%22on%22%2C%22boostConfigExperiment6336f8507b511931704c44ce%22%3A%22default%22%2C%22boostConfigExperiment6336f8617b511931704c44d2%22%3A%22on%22%2C%22boostConfigExperiment6336f87e7b511931704c44d6%22%3A%22default%22%2C%22boostConfigExperiment6336f8c17b511931704c44da%22%3A%22default%22%2C%22boostConfigExperiment6336f983871bba378181236d%22%3A%22on%22%2C%22boostConfigExperiment63407b5f9daf4e216c6394e3%22%3A%22default%22%2C%22boostConfigExperiment634951a5e3fab57ecf3be2da%22%3A%22default%22%2C%22boostConfigExperiment634951fae3fab57ecf3be2de%22%3A%22on%22%2C%22boostConfigExperiment634ced1791b9520e70992176%22%3A%22default%22%2C%22boostConfigExperiment634ced5791b9520e7099217a%22%3A%22default%22%2C%22boostConfigExperiment634ced8191b9520e7099217e%22%3A%22default%22%2C%22boostConfigExperiment634ceda291b9520e70992184%22%3A%22default%22%2C%22boostConfigExperiment634cedcd91b9520e70992191%22%3A%22default%22%2C%22boostConfigExperiment634cede491b9520e70992195%22%3A%22default%22%2C%22boostConfigExperiment634cee0291b9520e70992199%22%3A%22on%22%2C%22boostConfigExperiment634cee1a91b9520e7099219d%22%3A%22default%22%2C%22boostConfigExperiment634cee3191b9520e709921a1%22%3A%22default%22%2C%22iframeNewReact%22%3A%22default%22%2C%22musicPrice%22%3A%22M5_49M%22%2C%22musicSearchRanking%22%3A%22default%22%2C%22playlistBoostExperiment607289c805a7dd7ae28a8b04%22%3A%22default%22%2C%22playlistBoostExperiment607289d405a7dd7ae28a8b07%22%3A%22on%22%2C%22playlistBoostExperiment62b52e604607ba1e1cbf3747%22%3A%22default%22%2C%22playlistBoostExperiment635167a27c919d32142dbc21%22%3A%22default%22%2C%22playlistBoostExperiment635167f67c919d32142dbc23%22%3A%22default%22%2C%22playlistBoostExperiment635168157c919d32142dbc25%22%3A%22default%22%2C%22playlistBoostExperiment6351682b7c919d32142dbc27%22%3A%22default%22%2C%22playlistBoostExperiment635168417c919d32142dbc31%22%3A%22default%22%2C%22playlistBoostExperiment635168777c919d32142dbc3a%22%3A%22on%22%2C%22playlistBoostExperiment635168e89b627c586b31a758%22%3A%22on%22%2C%22playlistBoostExperiment635169477c919d32142dbc3c%22%3A%22on%22%2C%22playlistBoostExperiment6351695d7c919d32142dbc3e%22%3A%22default%22%2C%22useHlsTracks%22%3A%22default%22%2C%22webAntiMusicBlockNaGlavnoi%22%3A%22on%22%2C%22webBarBelowRubilnik%22%3A%22default%22%2C%22webSidebarBanner%22%3A%22default%22%7D&external-domain=music.yandex.ru&overembed=false`
      });
    } catch (err) {
      console.log(err);
    }
  }

  public async getPlaylistRevision() {
    try {
      const data = await fetch(
        'https://music.yandex.ru/handlers/playlist.jsx?owner=nordicore&kinds=1030&light=true&madeFor=&withLikesCount=true&forceLogin=true&lang=ru&external-domain=music.yandex.ru&overembed=false&ncrnd=0.8524821500292261',
        {
          method: 'get',
          headers: {
            Cookie: process.env.YANDEX_COOKIE
          }
        }
      );

      return (await data.json()).playlist.revision;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}
