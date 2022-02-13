import MovieController from '../../controllers/MovieController';
import SequelizeClient from '../../repositories/SequelizeClient';
import MovieModel from '../../models/SequelizeModels/MovieModel';

class MovieControllerFactory {
  create() {
    const SequelizeMovieModel = new SequelizeClient(MovieModel);

    return new MovieController(SequelizeMovieModel);
  }
}

export default new MovieControllerFactory();