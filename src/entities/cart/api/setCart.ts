"use server";

import { cookies } from "next/headers";
import { getCart } from "./getCart";
import { CartItem } from "../types";

export const setCart = async (cartItem: CartItem) => {
  const existingCart = await getCart();
  let updatedCart: CartItem[] = [...existingCart];

  const itemIndex = updatedCart.findIndex(
    (item) => item.productId === cartItem.productId
  );
  if (itemIndex > -1) {
    updatedCart[itemIndex].count += cartItem.count;
  } else {
    updatedCart.push(cartItem);
  }

  const cookieHandler = await cookies();
  cookieHandler.set("cart", JSON.stringify(updatedCart), {
    httpOnly: true,
  });

  return updatedCart;
};
