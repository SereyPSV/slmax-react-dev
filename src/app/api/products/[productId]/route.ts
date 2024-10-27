import { NextResponse } from "next/server";
import { products } from "../productsData";

export async function GET(
  request: Request,
  { params }: { params: { productId: string } }
) {
  const productId = Number(params.productId);

  if (Number.isNaN(productId)) {
    return NextResponse.json({ error: "Invalid product ID" });
  }

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return NextResponse.json({ error: "Product not found" });
  }

  return NextResponse.json(product);
}
