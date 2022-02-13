import { Item } from './index';

export interface Book extends Item {
  writer: string;
  genre: string;
}