import MusicService from '../music';

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

export default class ChatService {
  musicService: MusicService;

  constructor(musicService: MusicService) {
    this.musicService = musicService;
  }

  public async handleMessage(message: ChatMessage, reply: Reply) {
    if (
      // this.checkIfReactToMusic(message.replyToMessage.text) &&
      this.getReaction(message.text) === Reaction.Wondering
    ) {
      try {
        await this.musicService.addToPlaylist(message.replyToMessage.text);

        reply('👍');
      } catch (err) {
        console.error(err);

        reply('не смог добавить, что-то поломалось 😬');
      }
    }
  }

  private getReaction(messageText: string): Reaction | null {
    if (messageText.match(/ууу+/)) return Reaction.Wondering;

    return null;
  }

  private checkIfReactToMusic(replyToMessageText: string) {
    return this.musicService.recognizeUrl(replyToMessageText);
  }
}
