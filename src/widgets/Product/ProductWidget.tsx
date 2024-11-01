import { FC } from "react";
import { CartItem, Product } from "src/entities";
import { QuantityControls } from "src/features";

import styles from "./Product.module.css";

interface ProductWidgetProps {
  product: Product;
  cart: CartItem[];
}

export const ProductWidget: FC<ProductWidgetProps> = ({ product, cart }) => {
  const cartItem = cart.find((item) => item.productId === product.id) || {
    productId: product.id,
    count: 0,
  };

  return (
    <div className={styles.productContainer}>
      <div className={styles.productPage}>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <QuantityControls product={product} cartItem={cartItem} />
      </div>
    </div>
  );
};
