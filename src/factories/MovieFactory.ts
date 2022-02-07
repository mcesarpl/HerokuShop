import { Movie as MovieInterface } from '../interfaces';
import { Movie } from '../classes/Movie';

export default class MovieFactory {

  instance: MovieInterface;

  constructor(instance: MovieInterface) {
    this.instance = instance;
  }

  create(): MovieInterface {
    return new Movie(this.instance);
  }
}