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
      this.checkIfReactToMusic(message.replyToMessage.text) &&
      this.getReaction(message.text) === Reaction.Wondering
    ) {
      await this.musicService.addToPlaylist(message.replyToMessage.text);

      reply('👍');
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
