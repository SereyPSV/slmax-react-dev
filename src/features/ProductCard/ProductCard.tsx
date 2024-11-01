import { FC } from "react";
import { Product } from "src/entities";
import styles from "./ProductCard.module.css";
import Link from "next/link";
import { formatPrice } from "src/shared/lib";

export const ProductCard: FC<Product> = ({
  id,
  title,
  price,
  description,
  count,
}) => {
  return (
    <Link key={id} href={`/products/${id}`} className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.price}>{formatPrice(price)}</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.count}>Quantity: {count}</p>
    </Link>
  );
};
