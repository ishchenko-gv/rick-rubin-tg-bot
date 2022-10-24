import { Service } from 'typedi';
import MusicService from '../music/music.service';

export type ChatMessage = {
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
  private musicService: MusicService;

  constructor(musicService: MusicService) {
    this.musicService = musicService;
  }

  public async readMessage(message: ChatMessage, reply: Reply) {
    this.handleReactionToMusicMessage(message, reply);
  }

  async handleReactionToMusicMessage(message: ChatMessage, reply: Reply) {
    const [musicStrategy, trackData] = this.musicService.parseDataFromUrl(
      message.replyToMessage.text
    );

    if (
      musicStrategy &&
      trackData &&
      this.getReaction(message.text) === Reaction.Wondering
    ) {
      try {
        await this.musicService.addToPlaylist(musicStrategy, trackData);

        reply('добавил 👍');
      } catch (err) {
        console.error(err);

        reply('не смог добавить, что-то поломалось 😬');
      }
    }
  }

  private getReaction(messageText: string): Reaction | null {
    if (messageText.match(new RegExp('ууу+', 'i'))) return Reaction.Wondering;

    return null;
  }
}
