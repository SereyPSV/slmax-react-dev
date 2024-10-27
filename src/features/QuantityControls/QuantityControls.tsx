"use client";

import { FC, useState } from "react";
import styles from "./QuantityControls.module.css";
import { CartItem, Product } from "src/entities";
import { setCart } from "src/entities/cart/api/setCart";

interface ProductWidgetProps {
  product: Product;
  cartItem?: CartItem;
}

export const QuantityControls: FC<ProductWidgetProps> = ({
  product,
  cartItem,
}) => {
  const [quantity, setQuantity] = useState(cartItem ? cartItem.count : 1);
  const handleIncrease = () => {
    setQuantity((prevQuantity) => Math.min(product.count, prevQuantity + 1));
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  const handleAddToCart = () => {
    setCart({ productId: product.id, count: quantity });
  };
  return (
    <div className={styles.quantitySelector}>
      <label htmlFor={styles.quantity}>
        Product left: {product.count - quantity}
      </label>
      <div className={styles.quantityControls}>
        <button className={styles.button} onClick={handleDecrease}>
          -
        </button>
        <input
          className={styles.input}
          type="number"
          id="quantity"
          value={quantity}
          readOnly
          min="1"
        />
        <button className={styles.button} onClick={handleIncrease}>
          +
        </button>
      </div>
      <button className={styles.sendButton} onClick={handleAddToCart}>
        Добавить в корзину
      </button>
    </div>
  );
};
