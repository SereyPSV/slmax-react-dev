import { NextRequest, NextResponse } from "next/server";
import { products } from "./productsData";

export async function GET(request: NextRequest) {
  if (Array.isArray(products)) {
    return NextResponse.json(products);
  } else {
    return NextResponse.json({ error: "Products data is not an array" });
  }
}
