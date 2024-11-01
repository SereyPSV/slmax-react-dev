import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { productId: string } }
) {
  const productId = Number(params.productId);
  console.log(productId);

  if (Number.isNaN(productId)) {
    return NextResponse.json({ error: "Invalid product ID" });
  }

  const response = await fetch(`http://localhost:3030/products/${productId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response) {
    return NextResponse.json({ error: "Product not found" });
  }

  const product = await response.json();

  return NextResponse.json(product);
}
