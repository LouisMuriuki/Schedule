"use server";

import { Product } from "@/types";
import { revalidateTag } from "next/cache";

const MockApi =
  "https://655079737d203ab6626dd390.mockapi.io/api/lui/v1/products";

export const addProductToDatabase = async (data: FormData) => {
  const productName = data.get("product")?.toString();
  const productPrice = data.get("price")?.toString();

  if (!productName || !productPrice) {
    throw new Error("Invalid data Entry")
  }

  const newProduct: Product = {
    product: productName,
    price: productPrice,
  };
  await fetch(MockApi, {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
    },
  });
  revalidateTag("products");
};
