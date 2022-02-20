import { Cart, CartItem } from '../interfaces';
import BookFactory from '../factories/classes/BookFactory';
import MovieFactory from '../factories/classes/MovieFactory';
import GameFactory from '../factories/classes/GameFactory';

import BookModel from '../models/SequelizeModels/BookModel';
import MovieModel from '../models/SequelizeModels/MovieModel';
import GameModel from '../models/SequelizeModels/GameModel';

class ValidateCart {
  private async validateBook(book: CartItem) {

    const founded = await BookModel.findOne({ where: { id: book.id } });

    const stored = BookFactory.create(founded?.get());

    if (stored.price === book.price && stored.discount === book.discount ) {
      return true;
    }

    return false;
  }

  private async validateMovie(movie: CartItem) {
    const founded = await MovieModel.findOne({ where: { id: movie.id } });

    const stored = MovieFactory.create(founded?.get());

    if (stored.price === movie.price && stored.discount === movie.discount ) {
      return true;
    }

    return false;
  }

  private async validateGame(game: CartItem) {
    const founded = await GameModel.findOne({ where: { id: game.id } });

    const stored = GameFactory.create(founded?.get());

    if (stored.price === game.price && stored.discount === game.discount ) {
      return true;
    }

    return false;
  }

  public async validate(cart: Cart) {

    const itens : CartItem[] = cart.itens;

    const functionTypes = {
      'book': this.validateBook,
      'game': this.validateGame,
      'movie': this.validateMovie,
    };

    const itensValidationResult = await Promise.all(
      itens.map(async (item) => {
        const checkFunction = functionTypes[item.type];
        if (!checkFunction) {
          return false;
        }
  
        return checkFunction(item);
      }),
    );

    const initialValue = true;
    const isValid = itensValidationResult.reduce(
      (previousValue, currentValue) => previousValue && currentValue,
      initialValue,
    );

    return isValid;
  }
}

export default new ValidateCart();