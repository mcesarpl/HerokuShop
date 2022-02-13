import { Game as GameInterface } from '../interfaces';

export class Game implements GameInterface {

  name: string;

  price: number;

  discount: number;

  platform: string;

  year: number;

  constructor(instance) {
    this.name = instance.name;
    this.price = instance.price;
    this.discount = instance.discount;
    this.platform = instance.platform;
    this.year = instance.year;
  }
}