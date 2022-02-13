import { Item } from './index';

export interface Movie extends Item {
  duration: number;
  rating: number;
}