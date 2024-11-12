"use client";

import * as React from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
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
    <Card className="max-w-[300px] overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative">
          <AspectRatio ratio={1}>
            <img
              src={images[currentImageIndex]}
              alt={`${name} - Image ${currentImageIndex + 1}`}
              className="object-cover w-full h-full transition-opacity duration-300"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextImage}
              className="rounded-full bg-background/80"
            >
              <span className="sr-only">Next image</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Button>
          </div>
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {isNew && <Badge variant="secondary">New</Badge>}
            {isOnSale && <Badge variant="destructive">Sale</Badge>}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="line-clamp-2">{name}</CardTitle>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            {isOnSale && salePrice ? (
              <>
                <span className="text-xl font-bold">
                  ${salePrice.toFixed(2)}
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  ${price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-xl font-bold">${price.toFixed(2)}</span>
            )}
          </div>
          <Button variant="outline" size="icon" className="rounded-full">
            <Heart className="h-4 w-4" />
            <span className="sr-only">Add to wishlist</span>
          </Button>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button className="flex-1">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
        <Button variant="secondary" className="flex-1">
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
};
export default ProductCard;
