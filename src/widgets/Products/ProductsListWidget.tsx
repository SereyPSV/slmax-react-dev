import { Product } from "src/entities";
import { FC } from "react";
import { ProductCard } from "src/features";

import styles from "./ProductsList.module.css";

interface IProductsListWidgetProps {
  products: Product[];
}

export const ProductsListWidget: FC<IProductsListWidgetProps> = ({
  products,
}) => {
  return (
    <div className={styles.productsListContainer}>
      {products.map((product: Product) => (
        <ProductCard {...product} />
      ))}
    </div>
  );
};
