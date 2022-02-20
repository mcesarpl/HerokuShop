import { Game as GameInterface } from '../../interfaces';
import Game from '../../classes/Game';

class GameFactory {
  create(instance): GameInterface {
    return new Game(instance);
  }
}

export default new GameFactory();