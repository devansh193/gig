"use client";

import { useState } from "react";
import Image from "next/image";

const items = [
  {
    id: 1,
    name: "Pouch",
    images: ["/pouch1.jpeg", "/pouch2.jpeg"],
    price: "₹XXX.00",
  },
  {
    id: 2,
    name: "Tote",
    images: ["/tote2.jpeg", "/tote1.jpeg"],
    price: "₹XXX.00",
  },
  {
    id: 3,
    name: "Backpack",
    images: ["/backp1.jpeg", "/backp2.jpeg"],
    price: "₹XXX.00",
  },
];

export const Marketing = () => {
  const [hoveredItems, setHoveredItems] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleMouseEnter = (itemId: number) => {
    setHoveredItems((prev) => ({ ...prev, [itemId]: true }));
  };

  const handleMouseLeave = (itemId: number) => {
    setHoveredItems((prev) => ({ ...prev, [itemId]: false }));
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-2">
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-xl bg-[#F3F3F3] p-4 sm:p-6 transition-all"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={() => handleMouseLeave(item.id)}
          >
            <div className="aspect-square overflow-hidden relative rounded-lg">
              {item.images.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt={`${item.name} - Image ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className={`object-cover transition-opacity duration-300 ${
                    (index === 0 && !hoveredItems[item.id]) ||
                    (index === 1 && hoveredItems[item.id])
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />
              ))}
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-base sm:text-lg font-medium">{item.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
