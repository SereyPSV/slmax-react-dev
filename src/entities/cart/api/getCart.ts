"use server";

import { cookies } from "next/headers";
import { CartItem } from "../types";

export const getCart = async (): Promise<CartItem[]> => {
  const cookieHandler = await cookies();
  const existingCart = cookieHandler.get("cart")?.value;

  if (existingCart) {
    return JSON.parse(existingCart);
  }

  return [];
};
