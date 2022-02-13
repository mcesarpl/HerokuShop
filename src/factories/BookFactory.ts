import { Book as BookInterface } from '../interfaces';
import Book from '../classes/Book';

export default class BookFacture {

  instance: BookInterface;

  constructor(instance: BookInterface) {
    this.instance = instance;
  }

  create(): BookInterface {
    return new Book(this.instance);
  }
}