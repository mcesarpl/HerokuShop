import { CartItem } from './index';

export interface Cart {
  abandoned: boolean;
  itens: CartItem[];
  subtotal: number;
  discounts: number;
  taxes: number;
  total: number;
}