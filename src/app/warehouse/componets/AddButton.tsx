'use client'
import { addProductToDatabase } from "@/Actions/warehouse";
import React, { useTransition } from "react";

const AddButton = () => {
  const [isPending, startTransition] = useTransition();
  const formdata = new FormData();
  formdata.append("product", "MacbookAir 2020");
  formdata.append("price", "2000");
  return (
    <div>
      <button
        className="fixed bottom-10 border bg-green-700 text-white rounded"
        onClick={() => startTransition(() => addProductToDatabase(formdata))}
      >
        {isPending ? "Adding" : "Add Macbook"}
      </button>
    </div>
  );
};

export default AddButton;
