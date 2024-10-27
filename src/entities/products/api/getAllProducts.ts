import { Product } from "./types";

export const getAllProducts = async () => {
  const response = await fetch("http://localhost:3000/api/products");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const products: Product[] = await response.json();

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
};
