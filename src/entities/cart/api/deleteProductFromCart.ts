export const deleteProductFromCart = async (id: number) => {
  const response = await fetch(`http://localhost:3000/api/carts/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete product from cart");
  }

  return {
    props: {},
    revalidate: 10,
  };
};
