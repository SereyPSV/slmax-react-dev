import { FC } from "react";
import { CartItem } from "src/entities";
import { CartItemCard } from "src/features";

import styles from "./CartWidget.module.css";

interface CartWidgetProps {
  cart: CartItem[];
}

export const CartWidget: FC<CartWidgetProps> = ({ cart }) => {
  return cart.length === 0 ? (
    <p>Корзина пуста</p>
  ) : (
    <div className={styles.productsListContainer}>
      {cart.map((cartItem) => (
        <CartItemCard cartItem={cartItem} />
      ))}
    </div>
  );
};
