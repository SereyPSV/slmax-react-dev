import { FC } from "react";
import { ProductPage as ProductPageComponent } from "src/page";

export interface IProductPageParams {
  params: {
    productId: string;
  };
}

const ProductPage: FC<IProductPageParams> = async ({ params }) => {
  const { productId } = await params;

  if (!productId) {
    return <div>Invalid product ID</div>;
  }

  return <ProductPageComponent productId={Number(productId)} />;
};

export default ProductPage;
