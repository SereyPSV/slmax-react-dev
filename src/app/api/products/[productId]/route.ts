import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { productId: string } }
) {
  const productId = params.productId;

  if (!productId) {
    return NextResponse.json({ error: "Invalid product ID" });
  }

  const response = await fetch(
    `http://localhost:3030/products?id=${productId}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  if (!response.ok) throw new Error("Product not found");

  const product = await response.json();

  return NextResponse.json(product[0]);
}
