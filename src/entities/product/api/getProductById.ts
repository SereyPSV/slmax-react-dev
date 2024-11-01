export const getProductById = async (id: number | string) => {
  const response = await fetch(`http://localhost:3000/api/products/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const product = await response.json();

  return product;
};
