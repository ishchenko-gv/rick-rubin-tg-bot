import { Service } from 'typedi';
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
    await this.handleReactionToMusic(message, reply);
  }

  private async handleReactionToMusic(message: RickMessage, reply: Reply) {
    if (
      // this.checkIfReactToMusic(message.replyToMessage.text) &&
      this.getReaction(message.text) === Reaction.Wondering
    ) {
      try {
        await this.musicService.addToPlaylist(message.replyToMessage.text);

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

  private checkIfReactToMusic(replyToMessageText: string) {
    // return this.musicService.recognizeUrl(replyToMessageText);
  }
}
