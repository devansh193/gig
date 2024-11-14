import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

const items = [
  {
    id: 1,
    name: "Bag1",
    src: "/bag1.jpeg",
  },
  {
    id: 2,
    name: "Bag2",
    src: "/bag2.jpeg",
  },
  {
    id: 3,
    name: "Bag3",
    src: "/bag3.jpeg",
  },
];
export const Marketing = () => {
  return (
    <div className="container mx-auto px-4 mt-4 mb-2">
      <RadioGroup
        defaultValue="all"
        className="flex flex-wrap items-center justify-between gap-8 pb-8"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="all" id="all" className="h-5 w-5" />
          <Label
            htmlFor="all"
            className="text-[3.5rem] font-medium leading-[1.1] tracking-[-0.02em] text-black"
          >
            All Collection
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="new" id="new" className="h-5 w-5" />
          <Label
            htmlFor="new"
            className="text-[3.5rem] font-medium leading-[1.1] tracking-[-0.02em] text-black"
          >
            New Collection
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="popular" id="popular" className="h-5 w-5" />
          <Label
            htmlFor="popular"
            className="text-[3.5rem] font-medium leading-[1.1] tracking-[-0.02em] text-black"
          >
            Popular Collection
          </Label>
        </div>
      </RadioGroup>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative bg-[#F3F3F3] rounded-xl p-6 transition-all"
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-sm text-gray-600">₹195.00</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full hover:bg-white"
                >
                  <Heart className="h-4 w-4" />
                  <span className="sr-only">Add to wishlist</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full hover:bg-white"
                >
                  <ShoppingBag className="h-4 w-4" />
                  <span className="sr-only">Add to cart</span>
                </Button>
              </div>
            </div>
            <div className="aspect-square overflow-hidden">
              <Image
                src={item.src}
                alt="Hobo Small Leather Bag"
                width={400}
                height={400}
                className="h-full w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
