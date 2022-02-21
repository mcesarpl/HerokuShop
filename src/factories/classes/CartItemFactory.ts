import { CartItem as CartItemInterface } from '../../interfaces';
import CartItem from '../../classes/CartItem';

class CartItemFacture {
  create(instance): CartItemInterface {
    return new CartItem(instance);
  }
}

export default new CartItemFacture();