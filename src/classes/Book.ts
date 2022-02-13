import { Book as BookInterface } from '../interfaces';

export default class Book implements BookInterface {

  name: string;

  price: number;

  discount: number;

  writer: string;

  genre: string;

  constructor(instance) {
    this.name = instance.name;
    this.price = instance.price;
    this.discount = instance.discount;
    this.writer = instance.writer;
    this.genre = instance.genre;
  }
}