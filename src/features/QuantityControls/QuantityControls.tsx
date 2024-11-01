"use client";

import { FC, useState } from "react";
import { CartItem, Product } from "src/entities";
import { setCart } from "src/entities/cart/api/setCart";
import styles from "./QuantityControls.module.css";

interface ProductWidgetProps {
  product: Product;
  cartItem: CartItem;
}

export const QuantityControls: FC<ProductWidgetProps> = ({
  product,
  cartItem,
}) => {
  const [quantity, setQuantity] = useState(cartItem.count);

  const handleIncrease = () => {
    setQuantity(() => Math.min(product.count, quantity + 1));
  };

  const handleDecrease = () => {
    setQuantity(() => Math.max(1, quantity - 1));
  };

  const handleAddToCart = () => {
    setCart({ productId: product.id, count: quantity });
  };

  return (
    <div className={styles.quantitySelector}>
      <label htmlFor={styles.quantity}>
        Products left: {product.count - quantity}
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
        Add to Cart
      </button>
    </div>
  );
};
