import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const response = await fetch("http://localhost:3030/products", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) throw new Error("Failed to fetch products");

  const products = await response.json();
  return NextResponse.json(products);
}
