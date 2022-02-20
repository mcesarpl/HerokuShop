import { Movie as MovieInterface } from '../../interfaces';
import Movie from '../../classes/Movie';

class MovieFactory {
  create(instance): MovieInterface {
    return new Movie(instance);
  }
}

export default new MovieFactory();