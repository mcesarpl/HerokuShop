import { Cart as CartInterface, Item } from '../interfaces';

export class Cart implements CartInterface {
  abondoned: boolean;

  itens: Item[];

  subtotal: number;

  discounts: number;

  taxes: number;

  total: number;

  constructor(instance) {
    this.abondoned = instance.abondoned;
    this.itens = instance.itens;
    this.discounts = instance.discounts;
    this.taxes = instance.taxes;
    this.total = instance.total;
  }

}