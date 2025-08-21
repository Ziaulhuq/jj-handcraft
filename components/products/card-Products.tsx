import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import ProductPrice from "./product-price";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div>
      <Card className="">
        <CardHeader className=" rounded-sm">
          <Link href={`/product/${product.slug}`}>
            <Image
              src={product.images[0]}
              width={300}
              alt={product.name}
              height={300}
              priority={true}
              className="object-fill w-full h-full"
            />
          </Link>
          <div></div>
        </CardHeader>
        <CardContent className=" grid gap-4">
          <div className="text-xs font-semibold">{product.brand}</div>
          <Link href={`/product/${product.slug}`}>
            <h2 className="text-sm font-bold">{product.name}</h2>
          </Link>
          <div className="flex justify-between items-center gap-4 text-sm md:text-md">
            <p>{product.rating} stars</p>
            {product.stock > 0 ? (
              <ProductPrice value={Number(product.price)} />
            ) : (
              <p className="text-red-700 font-bold">out of stock</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
