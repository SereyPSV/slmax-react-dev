export const getAllProducts = async () => {
  const response = await fetch(`http://localhost:3000/api/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch products!!!");
  }

  const products = await response.json();

  return products;
};
