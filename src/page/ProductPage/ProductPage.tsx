import { FC } from "react";
import { getProductById } from "src/entities";
import { ProductWidget } from "src/widgets";

interface IProductPageParams {
  productId: number;
}

export const ProductPage: FC<IProductPageParams> = async ({ productId }) => {
  const product = await getProductById(productId);

  console.log("product", product);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductWidget product={product.props.product} />;
};
