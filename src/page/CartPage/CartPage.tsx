import { FC } from "react";
import { getCart } from "src/entities";
import { CartWidget } from "src/widgets";

export const CartPage: FC = async () => {
  const cart = await getCart();

  return (
    <div>
      <h2>CartPage</h2>
      <CartWidget cart={cart} />
    </div>
  );
};
