import { getProductBySlug } from "@/lib/actions/products.action";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductPrice from "@/components/products/product-price";
import { Badge } from "@/components/ui/badge";
import ProductImage from "@/components/products/product-image";
import AddToCart from "@/components/Shared/Header/add-to-cart";

const productDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-14">
          {/* ----image grid-- */}
          <div className="col-span-2">
            <ProductImage images={product.images} />
          </div>

          {/* ----- main --- */}
          <div className="col-span-2 p-6">
            <div className="flex flex-col gap-6">
              <p>
                {product.brand} {product.category}
              </p>
              <h1 className="font-bold text-xl">{product.name}</h1>
              <p>
                {product.rating} of {product.numReviews} Reviews
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <ProductPrice
                  value={Number(product.price)}
                  className="w-24 bg-green-100 font-medium rounded-full px-5 py-2 text-green-800 "
                />
              </div>
            </div>
            <div className="mt-10">
              <p className="font-semibold">Description</p>
              <p className="text-sm mt-2">{product.description}</p>
            </div>
          </div>
          {/* ----- cart area ----*/}
          <div className="col-span-2">
            <Card>
              <CardContent className="">
                <div className="mb-2 flex justify-between">
                  <div>Price</div>
                  <div>
                    <ProductPrice value={Number(product.price)} />
                  </div>
                </div>
                <div className="mb-2 flex justify-between">
                  <div>status</div>
                  {product.stock > 0 ? (
                    <Badge variant="outline">In Stock</Badge>
                  ) : (
                    <Badge variant="destructive">Out of Stock</Badge>
                  )}
                </div>
                {product.stock > 0 && (
                  <div className="flex justify-center mt-2">
                    <AddToCart
                      item={{
                        productId: product.id,
                        name: product.name,
                        slug: product.slug,
                        price: product.price,
                        qty: 1,
                        image: product.images![0],
                      }}
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default productDetailsPage;
