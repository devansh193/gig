"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight, ShoppingBag } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  price: number;
  images: string[];
  isNew?: boolean;
  isOnSale?: boolean;
  salePrice?: number;
}

export const ProductCard = (
  { name, price, images, isNew, isOnSale, salePrice }: ProductCardProps = {
    name: "Sample Product",
    price: 99.99,
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400&text=Image+2",
      "/placeholder.svg?height=400&width=400&text=Image+3",
    ],
    isNew: true,
    isOnSale: true,
    salePrice: 79.99,
  }
) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Card className="max-w-[300px] overflow-hidden rounded-none">
      <CardHeader className="p-0">
        <div className="relative">
          <AspectRatio ratio={1}>
            <Image
              src={images[currentImageIndex]}
              alt={`${name} - Image ${currentImageIndex + 1}`}
              className="object-cover w-full h-full transition-opacity duration-300"
              height={100}
              width={100}
            />
          </AspectRatio>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevImage}
              className="rounded-full bg-background/80"
            >
              <span className="sr-only">Previous image</span>
              <ArrowLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextImage}
              className="rounded-full bg-background/80"
            >
              <ArrowRight />
            </Button>
          </div>
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {isNew && <Badge variant="secondary">New</Badge>}
            {isOnSale && <Badge variant="destructive">Sale</Badge>}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-center p-2 text-sm font-thin">
          {name}
        </CardTitle>
        <div className="mt-2 flex items-center justify-center">
          <div className="flex items-center justify-center gap-2 text-sm">
            {isOnSale && salePrice ? (
              <>
                <span className="text-sm font-bold">
                  ${salePrice.toFixed(2)}
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  ${price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-sm">${price.toFixed(2)}</span>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button className="w-full rounded-none">
          <ShoppingBag className=" mr-2 h-4 w-4" />
          Add to bag
        </Button>
      </CardFooter>
    </Card>
  );
};
export default ProductCard;
