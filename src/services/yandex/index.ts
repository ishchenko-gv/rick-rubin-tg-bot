const cookie2 =
  "yandexuid=719833141666302042; yuidss=719833141666302042; gdpr=0; _ym_uid=1666302078457594140; _ym_d=1666302078; skid=1059353231666302688; _ym_isad=2; cycada=M8gjrZuF141LK0gioMMEG6fOjcxzlLtGCfvXUjCivjo=; yabs-frequency=/5/0000000000000000/W8bELlFb268GIIVtr3CyFc8rQn198LNtUc2RI7vI44aXDKIa3zRezs4GIIFMrq0Knj3aQ1198m00/; font_loaded=YSv1; _ym_visorc=b; ymex=1981662045.yrts.1666302045#1697924649.yrtsi.1666388649; i=UvIQj0FkQv03DXAyR86v+b24QpFPtQQaD/1VG4HNXjyLpGNOFKyfTJAaZwpQexcma6JsZQdfpKN+IJsVYxNqQWpUQHY=; chromecast=''; is_gdpr=1; is_gdpr_b=CN+rNhD4kAEYASgC; Session_id=3:1666389542.5.0.1666302082011:oUhSuQ:85.1.2:1|137318309.-1.2|1703241964.79498.2.2:79498|3:10260029.376789.mYYq2MjnHIsmazbOgoOFxvR4KfI; sessionid2=3:1666389542.5.0.1666302082011:oUhSuQ:85.1.2:1|137318309.-1.2|1703241964.79498.2.2:79498|3:10260029.376789.fakesign0000000000000000000; yp=1981749542.udn.cDrQk9C10L7RgNCz0LjQuSDQmNGJ0LXQvdC60L4%3D#1981741580.multib.1; L=QHJ+Z2lLfnhcWn92QERBVmF3DmB1SQUFJVY/EA8sHjAk.1666389542.15137.363111.3fdc2c5a58f1a7bc9639ca09a7f58f36; yandex_login=nordicore; ys=udn.cDrQk9C10L7RgNCz0LjQuSDQmNGJ0LXQvdC60L4%3D#c_chck.1731739019; device_id=a1d4a9ea9627d2c6bb44214356297d83451df5232; _yasc=OXY+lqRMpRNb3mXmsaL5nGlOuQy71FsVYf3E5Ah2Jhb0JyL8CScrtkhDWSqAgWguAL2poM1l; active-browser-timestamp=1666390088326; lastVisitedPage=%7B%22137318309%22%3A%22%2Fusers%2Fnordicore%2Fplaylists%22%7D";
const cookie1 =
  "yandexuid=719833141666302042; yuidss=719833141666302042; gdpr=0; _ym_uid=1666302078457594140; _ym_d=1666302078; skid=1059353231666302688; _ym_isad=2; cycada=M8gjrZuF141LK0gioMMEG6fOjcxzlLtGCfvXUjCivjo=; yabs-frequency=/5/0000000000000000/W8bELlFb268GIIVtr3CyFc8rQn198LNtUc2RI7vI44aXDKIa3zRezs4GIIFMrq0Knj3aQ1198m00/; font_loaded=YSv1; _ym_visorc=b; ymex=1981662045.yrts.1666302045#1697924649.yrtsi.1666388649; i=UvIQj0FkQv03DXAyR86v+b24QpFPtQQaD/1VG4HNXjyLpGNOFKyfTJAaZwpQexcma6JsZQdfpKN+IJsVYxNqQWpUQHY=; chromecast=''; is_gdpr=1; is_gdpr_b=CN+rNhD4kAEYASgC; Session_id=3:1666389542.5.0.1666302082011:oUhSuQ:85.1.2:1|137318309.-1.2|1703241964.79498.2.2:79498|3:10260029.376789.mYYq2MjnHIsmazbOgoOFxvR4KfI; sessionid2=3:1666389542.5.0.1666302082011:oUhSuQ:85.1.2:1|137318309.-1.2|1703241964.79498.2.2:79498|3:10260029.376789.fakesign0000000000000000000; yp=1981749542.udn.cDrQk9C10L7RgNCz0LjQuSDQmNGJ0LXQvdC60L4%3D#1981741580.multib.1; L=QHJ+Z2lLfnhcWn92QERBVmF3DmB1SQUFJVY/EA8sHjAk.1666389542.15137.363111.3fdc2c5a58f1a7bc9639ca09a7f58f36; yandex_login=nordicore; ys=udn.cDrQk9C10L7RgNCz0LjQuSDQmNGJ0LXQvdC60L4%3D#c_chck.1731739019; device_id=a1d4a9ea9627d2c6bb44214356297d83451df5232; _yasc=OXY+lqRMpRNb3mXmsaL5nGlOuQy71FsVYf3E5Ah2Jhb0JyL8CScrtkhDWSqAgWguAL2poM1l; lastVisitedPage=%7B%22137318309%22%3A%22%2Fusers%2Fnordicore%2Fplaylists%22%7D; active-browser-timestamp=1666390812403";

export default class YandexMusic {
  constructor() {}

  parseTrackDataFromUrl(url: string) {
    if (!url)
      return {
        albumId: null,
        trackId: null,
      };

    const [, albumId] = url.match(/album\/(\d+)/) || [];
    const [, trackId] = url.match(/track\/(\d+)/) || [];

    return {
      albumId,
      trackId,
    };
  }

  async getPlaylistRevision() {
    try {
      const data = await fetch(
        'https://music.yandex.ru/handlers/playlist.jsx?owner=nordicore&kinds=1030&light=true&madeFor=&withLikesCount=true&forceLogin=true&lang=ru&external-domain=music.yandex.ru&overembed=false&ncrnd=0.8524821500292261',
        {
          method: 'get',
          headers: {
            Cookie: cookie1,
          },
        }
      );

      const {
        playlist: { revision },
      } = await data.json();

      return revision;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  async addTrackToPlaylist(trackId: string, albumId: string, revision: number) {
    if (!trackId || !albumId) return;

    try {
      await fetch('https://music.yandex.ru/handlers/playlist-patch.jsx', {
        method: 'post',
        headers: {
          Cookie: cookie2,
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'X-Current-UID': '137318309',
          'X-Retpath-Y': 'https://music.yandex.ru/users/nordicore/playlists',
        },
        body: `owner=137318309&kind=1030&revision=${revision}&diff=%5B%7B%22op%22%3A%22insert%22%2C%22at%22%3A0%2C%22tracks%22%3A%5B%7B%22id%22%3A%22${trackId}%22%2C%22albumId%22%3A${albumId}%7D%5D%7D%5D&from=web-own_playlists-track-track-main&lang=ru&sign=de666a343477ce3da4d2bf64ffbcfffaaeefc850%3A1666390053584&experiments=%7B%22ABTestIds%22%3A%22667484%2C73%22%2C%22WebDontPayPopup%22%3A%22default%22%2C%22WebGenerativeTab%22%3A%22default%22%2C%22WebInteractiveSplashscreenWithTrackTimeLimit%22%3A%2230sec%22%2C%22WebMyVibeFreemium%22%3A%22on%22%2C%22WebNewImportVk%22%3A%22default%22%2C%22WebPayPromoToPay%22%3A%22on%22%2C%22WebProductNamePlus%22%3A%22on%22%2C%22WebPromocodeMain%22%3A%22all%22%2C%22WebRedAlert%22%3A%22default%22%2C%22WebTVMusicYnison%22%3A%22default%22%2C%22WebTouchFreeMusicRestriction%22%3A%22control%22%2C%22WebTouchMBrickFButton%22%3A%22on%22%2C%22WebYMConnect%22%3A%22default%22%2C%22barBelowExperiment%22%3A%22default%22%2C%22boostConfigExperiment632ea30e4c9d9c728ba9cf03%22%3A%22default%22%2C%22boostConfigExperiment632ea3764c9d9c728ba9cf17%22%3A%22default%22%2C%22boostConfigExperiment6336f6b67b511931704c44bb%22%3A%22on%22%2C%22boostConfigExperiment6336f7077b511931704c44c1%22%3A%22on%22%2C%22boostConfigExperiment6336f7a87b511931704c44c5%22%3A%22on%22%2C%22boostConfigExperiment6336f8357b511931704c44ca%22%3A%22on%22%2C%22boostConfigExperiment6336f8507b511931704c44ce%22%3A%22default%22%2C%22boostConfigExperiment6336f8617b511931704c44d2%22%3A%22on%22%2C%22boostConfigExperiment6336f87e7b511931704c44d6%22%3A%22default%22%2C%22boostConfigExperiment6336f8c17b511931704c44da%22%3A%22default%22%2C%22boostConfigExperiment6336f983871bba378181236d%22%3A%22on%22%2C%22boostConfigExperiment63407b5f9daf4e216c6394e3%22%3A%22default%22%2C%22boostConfigExperiment634951a5e3fab57ecf3be2da%22%3A%22default%22%2C%22boostConfigExperiment634951fae3fab57ecf3be2de%22%3A%22on%22%2C%22boostConfigExperiment634ced1791b9520e70992176%22%3A%22default%22%2C%22boostConfigExperiment634ced5791b9520e7099217a%22%3A%22default%22%2C%22boostConfigExperiment634ced8191b9520e7099217e%22%3A%22default%22%2C%22boostConfigExperiment634ceda291b9520e70992184%22%3A%22default%22%2C%22boostConfigExperiment634cedcd91b9520e70992191%22%3A%22default%22%2C%22boostConfigExperiment634cede491b9520e70992195%22%3A%22default%22%2C%22boostConfigExperiment634cee0291b9520e70992199%22%3A%22on%22%2C%22boostConfigExperiment634cee1a91b9520e7099219d%22%3A%22default%22%2C%22boostConfigExperiment634cee3191b9520e709921a1%22%3A%22default%22%2C%22iframeNewReact%22%3A%22default%22%2C%22musicPrice%22%3A%22M5_49M%22%2C%22musicSearchRanking%22%3A%22default%22%2C%22playlistBoostExperiment607289c805a7dd7ae28a8b04%22%3A%22default%22%2C%22playlistBoostExperiment607289d405a7dd7ae28a8b07%22%3A%22on%22%2C%22playlistBoostExperiment62b52e604607ba1e1cbf3747%22%3A%22default%22%2C%22playlistBoostExperiment635167a27c919d32142dbc21%22%3A%22default%22%2C%22playlistBoostExperiment635167f67c919d32142dbc23%22%3A%22default%22%2C%22playlistBoostExperiment635168157c919d32142dbc25%22%3A%22default%22%2C%22playlistBoostExperiment6351682b7c919d32142dbc27%22%3A%22default%22%2C%22playlistBoostExperiment635168417c919d32142dbc31%22%3A%22default%22%2C%22playlistBoostExperiment635168777c919d32142dbc3a%22%3A%22on%22%2C%22playlistBoostExperiment635168e89b627c586b31a758%22%3A%22on%22%2C%22playlistBoostExperiment635169477c919d32142dbc3c%22%3A%22on%22%2C%22playlistBoostExperiment6351695d7c919d32142dbc3e%22%3A%22default%22%2C%22useHlsTracks%22%3A%22default%22%2C%22webAntiMusicBlockNaGlavnoi%22%3A%22on%22%2C%22webBarBelowRubilnik%22%3A%22default%22%2C%22webSidebarBanner%22%3A%22default%22%7D&external-domain=music.yandex.ru&overembed=false`,
      });
    } catch (err) {
      console.log(err);
    }
  }
}
