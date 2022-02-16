import { Item } from './Iitem';

export interface Cart {
  abandoned: boolean;
  itens: Item[];
  subtotal: number;
  discounts: number;
  taxes: number;
  total: number;
}