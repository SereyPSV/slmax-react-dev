import { FC } from "react";
import { getAllProducts } from "src/entities";
import { ProductCard } from "src/features";

import styles from "./ProductCardsWidget.module.css";
import { ProductsListWidget } from "src/widgets";

export const ProductsPage: FC = async () => {
  const allProducts = await getAllProducts();

  return (
    <div>
      <h2>ProductsPage</h2>
      <ProductsListWidget products={allProducts.props.products} />
    </div>
  );
};
