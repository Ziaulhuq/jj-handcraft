"use server";

import { Cart } from "@/types";

export async function adddItemToCart(data: Cart) {
  return {
    success: true,
    message: "item added to cart",
  };
}
