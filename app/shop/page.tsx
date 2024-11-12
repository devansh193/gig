"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/app-sidebar";
import ProductCard from "@/components/product-card";
import { Menu } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
const items = [
  {
    id: 1,
    title: "Leather tote bag",
    price: 799.0,
    image: ["/bag1.jpeg", "/bag2.jpeg", "/bag3.jpeg"],
  },
  {
    id: 2,
    title: "Canvas bag",
    price: 599.0,
    image: ["/bag1.jpeg", "/bag2.jpeg", "/bag3.jpeg"],
  },
  {
    id: 1,
    title: "Messenger bag",
    price: 999.0,
    image: ["/bag1.jpeg", "/bag2.jpeg", "/bag3.jpeg"],
  },
];
export const Shop = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="flex min-h-screen overflow-hidden">
      {isMobile ? (
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="fixed top-4 left-4 z-40 lg:hidden"
            >
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle Sidebar</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-[250px]">
            <Sidebar />
          </SheetContent>
        </Sheet>
      ) : (
        <div className="fixed inset-y-0 left-0">
          <Sidebar />
        </div>
      )}
      <div className={`flex-1 ${isMobile ? "ml-0" : "ml-[250px]"}`}>
        <div className="flex flex-col h-screen m-4">
          <header className="sticky top-0 h-16 py-3 border-b-2 border-gray-100 z-30 ml-10 bg-[#F3F3F3] md:ml-4 rounded-md">
            <div className="container px-4 py-3 sm:px-6 lg:px-8">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Shop</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <main className="h-screen p-4 sm:p-6 lg:p-8 bg-[#F3F3F3] ml-4 my-4 rounded-md">
            <h1 className="text-2xl font-bold mb-4">Shop</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {items.map((item) => (
                <ProductCard
                  key={item.id}
                  name={item.title}
                  price={item.price}
                  images={item.image}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
export default Shop;
