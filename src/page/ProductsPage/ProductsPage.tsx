import { FC } from "react";
import { getAllProducts } from "src/entities";
import { ProductsListWidget } from "src/widgets";

export const ProductsPage: FC = async () => {
  const allProducts = await getAllProducts();
  console.log(allProducts);

  if (!allProducts) {
    return <div>Products not found</div>;
  }

  return (
    <div>
      <h2>ProductsPage</h2>
      <ProductsListWidget products={allProducts.props.products} />
    </div>
  );
};
