import { CartItem as CartItemInterface } from '../../interfaces';
import CartItem from '../../classes/CartItem';

export default class CartItemFacture {

  instance: CartItemInterface;

  constructor(instance: CartItemInterface) {
    this.instance = instance;
  }

  create(): CartItemInterface {
    return new CartItem(this.instance);
  }
}