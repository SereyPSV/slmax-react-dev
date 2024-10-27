import { FC } from "react";
import { Product } from "src/entities";
import { QuantityControls } from "src/features";

import styles from "./Product.module.css";

interface ProductWidgetProps {
  product: Product;
}

export const ProductWidget: FC<ProductWidgetProps> = ({ product }) => {
  return (
    <div className={styles.productContainer}>
      <div className={styles.productPage}>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <QuantityControls product={product} />
      </div>
    </div>
  );
};
