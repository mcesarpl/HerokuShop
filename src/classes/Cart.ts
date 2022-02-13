import { Cart as CartInterface, Item } from '../interfaces';

export default class Cart implements CartInterface {
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

    this.calculateSubtotal();
    this.calculateDiscounts();
    this.calculateTotal();
  }

  private calculateSubtotal(): void {
    let subtotal = 0;

    this.itens.forEach((item) => {
      subtotal += item.price;
    });

    this.subtotal = subtotal;
  }

  private calculateDiscounts(): void {

    let totalWithDiscount = 0;

    this.itens.forEach((item) => {
      totalWithDiscount += item.price * (1 - item.discount);
    });

    if (this.subtotal > 0) {
      this.discounts = 1 - totalWithDiscount / this.subtotal;
    }
  }

  private calculateTotal(): void {
    this.total = this.subtotal * (1 - this.discounts) * (1 + this.taxes);
  }

}