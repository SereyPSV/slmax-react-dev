import { Product } from "src/entities";
import { FC } from "react";
import { ProductCard } from "src/features";

import styles from "./ProductsList.module.css";

interface ProductsListWidgetProps {
  products: Product[];
}

export const ProductsListWidget: FC<ProductsListWidgetProps> = ({
  products,
}) => {
  return (
    <div className={styles.productsListContainer}>
      {products.map((product: Product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};
