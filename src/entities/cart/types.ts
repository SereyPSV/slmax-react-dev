import { Product } from "src/entities/product";

export interface CartItem {
  productId: number;
  count: number;
}
