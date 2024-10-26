import { FC } from "react";
import { ProductPage as ProductPageComponent } from "src/page";

export interface IProductPageParams {
  params: {
    productId: string;
  };
}

const ProductPage: FC<IProductPageParams> = ({ params }) => {
  return <ProductPageComponent params={params} />;
};

export default ProductPage;
