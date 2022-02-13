import CartController from '../../controllers/CartController';
import SequelizeClient from '../../repositories/SequelizeClient';
import CartModel from '../../models/SequelizeModels/CartModel';

class CartControllerFactory {
  create() {
    const SequelizeCartModel = new SequelizeClient(CartModel);

    return new CartController(SequelizeCartModel);
  }
}

export default new CartControllerFactory();