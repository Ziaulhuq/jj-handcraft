"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { Cart } from "@/types";
import { toast } from "sonner";
import { adddItemToCart } from "@/lib/actions/cart.action";
import Link from "next/link";

const AddToCart = ({ item }: { item: Cart }) => {
  const handleAddToCart = async () => {
    const res = await adddItemToCart(item);

    // if (!res.success) {
    //   toast({
    //     variant: "destructive",
    //     description: res.message,
    //   });
    //   return;
    // }

    //handle success to cart
    toast(`${item.name} added to cart`, {
      // description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: <Link href="/Cart">Go To Cart</Link>,
        onClick: () => console.log("added success"),
      },
    });
  };

  return (
    <Button className="w-full" onClick={handleAddToCart}>
      <span>
        <PlusIcon />
      </span>{" "}
      Add To Cart
    </Button>
  );
};

export default AddToCart;
