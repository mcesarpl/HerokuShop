import BookController from '../../controllers/BookController';
import SequelizeClient from '../../repositories/SequelizeClient';
import BookModel from '../../models/SequelizeModels/BookModel';

class BookControllerFactory {
  create() {
    const SequelizeBookModel = new SequelizeClient(BookModel);

    return new BookController(SequelizeBookModel);
  }
}

export default new BookControllerFactory();