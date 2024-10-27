import { FC } from "react";
import { getProductById } from "src/entities";
import { ProductWidget } from "src/widgets";

interface IProductPageParams {
  productId: number;
}

export const ProductPage: FC<IProductPageParams> = async ({ productId }) => {
  const product = await getProductById(productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>ProductsPage</h2>
      <ProductWidget product={product.props.product} />
    </div>
  );
};
