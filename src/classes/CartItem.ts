import { CartItem as CartItemInterface } from '../interfaces';

export default class CartItem implements CartItemInterface {

  id: string;

  type: string;

  price: number;

  discount: number;

  constructor(instance) {
    this.id = instance.id;
    this.type = instance.typpe;
    this.price = instance.price;
    this.discount = instance.discount;
  }
}