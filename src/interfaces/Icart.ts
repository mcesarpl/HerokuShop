import { Item } from './Iitem';

export interface Cart {
  abondoned: boolean;
  itens: Item[];
  subtotal: number;
  discounts: number;
  taxes: number;
  total: number;
}