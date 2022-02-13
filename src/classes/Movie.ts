import { Movie as MovieInterface } from '../interfaces';

export default class Movie implements MovieInterface {

  name: string;

  price: number;

  discount: number;

  duration: number;

  rating: number;

  constructor(instance) {
    this.name = instance.name;
    this.price = instance.price;
    this.discount = instance.discount;
    this.duration = instance.duration;
    this.rating = instance.rating;
  }
}