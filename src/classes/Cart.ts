import { Cart as CartInterface, CartItem } from '../interfaces';
export default class Cart implements CartInterface {
  abandoned: boolean;

  itens: CartItem[];

  subtotal: number;

  discounts: number;

  taxes: number;

  total: number;

  constructor(instance) {
    this.abandoned = instance.abandoned || false;
    this.itens = instance.itens || [];
    this.discounts = instance.discounts || 0;
    this.taxes = instance.taxes || 0;
    this.total = instance.total || 0;

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
    const total = this.subtotal * (1 - this.discounts) * (1 + this.taxes);
    if (total < 0) {
      this.total = 0;
      return;
    }

    this.total = total;
  }

}