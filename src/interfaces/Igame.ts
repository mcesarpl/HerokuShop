import { Item } from './index';

export interface Game extends Item {
  platform: string;
  year: number;
}