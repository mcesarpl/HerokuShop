import { Book as BookInterface } from '../interfaces';

export class Book implements BookInterface {

  name: string;

  price: number;

  discount: number;

  writter: string;

  genre: string;

  constructor(instance) {
    this.name = instance.name;
    this.price = instance.price;
    this.discount = instance.discount;
    this.writter = instance.writter;
    this.genre = instance.genre;
  }
}