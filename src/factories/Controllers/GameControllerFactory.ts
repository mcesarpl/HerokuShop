import GameController from '../../controllers/GameController';
import SequelizeClient from '../../repositories/SequelizeClient';
import GameModel from '../../models/SequelizeModels/GameModel';

class GameControllerFactory {
  create() {
    const SequelizeGameModel = new SequelizeClient(GameModel);

    return new GameController(SequelizeGameModel);
  }
}

export default new GameControllerFactory();