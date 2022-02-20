import { Cart as CartInterface } from '../../interfaces';
import Cart from '../../classes/Cart';

class CartFactory {
  create(instance): CartInterface {
    return new Cart(instance);
  }
}

export default new CartFactory();