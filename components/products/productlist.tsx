import React from "react";
import ProductCard from "./card-Products";
import { Product } from "@/types";

const ProductList = ({
  data,
  title,
  limit,
}: {
  data: Product[];
  title?: string;
  limit?: number;
}) => {
  const limitedData = limit ? data.slice(0, limit) : data;
  return (
    <>
      <h1>{title}</h1>
      {data.length > 0 ? (
        <div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {limitedData.map((product: Product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <p>No products found</p>
        </div>
      )}
    </>
  );
};

export default ProductList;
