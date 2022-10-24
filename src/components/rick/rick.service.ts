import { Service } from 'typedi';
import { MusicData, MusicStrategy } from '../../types';
import MusicService from '../music/music.service';

export type RickMessage = {
  text: string;
  replyToMessage: {
    text: string;
  };
};

type Reply = (message: string) => void;

enum Reaction {
  Wondering
}

@Service()
export class RickService {
  musicService: MusicService;

  constructor(musicService: MusicService) {
    this.musicService = musicService;
  }

  public async readMessage(message: RickMessage, reply: Reply) {
    const musicData = this.musicService.parseDataFromUrl(
      message.replyToMessage.text
    );

    if (musicData && this.getReaction(message.text) === Reaction.Wondering) {
      try {
        await this.musicService.addToPlaylist(musicData);

        reply('добавил 👍');
      } catch (err) {
        console.error(err);

        reply('не смог добавить, что-то поломалось 😬');
      }

      return;
    }
  }

  private getReaction(messageText: string): Reaction | null {
    if (messageText.match(new RegExp('ууу+', 'i'))) return Reaction.Wondering;

    return null;
  }
}
