import { Product } from "../types";

export const getProductById = async (id: number) => {
  const response = await fetch(`http://localhost:3000/api/products/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const product: Product = await response.json();

  return {
    props: {
      product,
    },
    revalidate: 10,
  };
};
