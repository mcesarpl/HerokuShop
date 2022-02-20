import { Book as BookInterface } from '../../interfaces';
import Book from '../../classes/Book';

class BookFacture {
  create(instance): BookInterface {
    return new Book(instance);
  }
}

export default new BookFacture();