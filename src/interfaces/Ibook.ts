import { Item } from './index';

export interface Book extends Item {
  writter: string;
  genre: string;
}