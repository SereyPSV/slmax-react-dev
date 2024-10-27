"use client";

import { FC, useState } from "react";
import { Product } from "src/entities";

import styles from "./Product.module.css";

interface ProductWidgetProps {
  product: Product;
}

export const ProductWidget: FC<ProductWidgetProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };
  return (
    <div className={styles.productContainer}>
      <div className={styles.productPage}>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <div className={styles.quantitySelector}>
          <label htmlFor={styles.quantity}>Количество:</label>
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
        </div>
        <button className={styles.sendButton}>Добавить в корзину</button>
      </div>
    </div>
  );
};
