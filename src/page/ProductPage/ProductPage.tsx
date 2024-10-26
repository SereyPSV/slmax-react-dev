import { FC } from "react";

interface IProductPageParams {
  params: {
    productId: string;
  };
}

export const ProductPage: FC<IProductPageParams> = ({ params }) => {
  return (
    <div>
      <h2>{`ProductPage${params}`}</h2>
    </div>
  );
};
