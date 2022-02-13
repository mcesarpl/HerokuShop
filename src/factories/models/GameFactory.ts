import { Game as GameInterface } from '../../interfaces';
import Game from '../../classes/Game';

export default class GameFactory {

  instance: GameInterface;

  constructor(instance: GameInterface) {
    this.instance = instance;
  }

  create(): GameInterface {
    return new Game(this.instance);
  }
}