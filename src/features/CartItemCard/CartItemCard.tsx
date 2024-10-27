import { FC } from "react";
import { CartItem, getProductById } from "src/entities";

import styles from "./CartItemCard.module.css";
import Link from "next/link";
import { QuantityControls } from "../QuantityControls";

export interface CartItemProps {
  cartItem: CartItem;
}

export const CartItemCard: FC<CartItemProps> = async ({ cartItem }) => {
  const product = await getProductById(cartItem.productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  const { id, title, price, description, count } = product.props.product;
  return (
    <div className={styles.card}>
      <Link key={id} href={`/products/${id}`}>
        <div className={styles.count}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.price}>${price.toFixed(2)}</p>
          <p className={styles.description}>{description}</p>
          <p className={styles.count}>Количество: {count}</p>
        </div>
      </Link>
      <QuantityControls product={product.props.product} cartItem={cartItem} />
    </div>
  );
};
