import { addProductToDatabase } from "@/Actions/warehouse";
import { Product } from "@/types";
import { revalidateTag } from "next/cache";
import React from "react";
import AddButton from "./componets/AddButton";



const WareHousing = async () => {
  const MockApi =
    "https://655079737d203ab6626dd390.mockapi.io/api/lui/v1/products";

  const res = await fetch(MockApi, {
    cache: "no-cache",
    method: "GET",
    next:{
      tags:['products']
    }
  });
  const products: Product[] = await res.json();

  
  return (
    <div>
      <h1 className="flex text-center underline text-2xl">Warehousing</h1>
      <form
        action={addProductToDatabase}
        className="flex flex-col gap-5 max-w-xl mx-auto p-5"
      >
        <input
          name="product"
          placeholder="Enter product name"
          className="border border-gray-300 p-2 rounded-md text-black"
          type="text"
        />
        <input
          name="price"
          placeholder="Enter product price"
          className="border border-gray-300 p-2 text-black rounded-md"
          type="text"
        />
        <button type="submit" className="bg-blue-500 focus:bg-blue-700 rounded">
          Add product
        </button>
      </form>
      <h1 className="flex text-center underline text-2xl">
        List of our products
      </h1>
      <div className="flex flex-wrap mb-8 ">
        {products.map((product, i) => {
          return (
            <div key={i} className="p-5 shadow">
              <p>{product.product}</p>
              <p>{product.price}</p>
            </div>
          );
        })}
      </div>
      <AddButton/>
    </div>
  );
};

export default WareHousing;
