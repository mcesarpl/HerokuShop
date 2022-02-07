import { Cart as CartInterface } from '../interfaces';
import { Cart } from '../classes/Cart';

export default class CartFactory {

  instance: CartInterface;

  constructor(instance: CartInterface) {
    this.instance = instance;
  }

  create(): CartInterface {
    return new Cart(this.instance);
  }
}