"use client";

import { useEffect, useRef } from "react";
export const CouponBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const timer = setInterval(scroll, 30);
    return () => clearInterval(timer);
  }, []);

  const content = (
    <>
      <div className="flex items-center gap-4 whitespace-nowrap">
        <span className="text-2xl font-light tracking-wider text-gray-500">
          GET 20% OFF COUPON BAG20
        </span>
        <span className="text-2xl font-light tracking-wider text-gray-500">
          GET 20% OFF COUPON BAG20
        </span>
      </div>
    </>
  );

  return (
    <div className="bg-[#F3F3F3] py-6 my-2 mx-4 md:mx-10 rounded-xl">
      <div ref={containerRef} className="flex overflow-hidden">
        <div className="flex animate-marquee">
          {content}
          {content}
          {content}
        </div>
      </div>
    </div>
  );
};
export default CouponBanner;
