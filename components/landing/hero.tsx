import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { Button } from "../ui/button";

const navItems = ["Men", "Women", "New", "Store"];
const navItems2 = ["About", "FAQs", "Cart"];
export const Main = () => {
  return (
    <div className="flex flex-col items-center bg-white px-4 sm:px-6 lg:px-8 mb-2">
      <div className="bg-white grid grid-cols-5 sm:grid-cols-9 w-full gap-x-2 gap-y-4">
        {navItems.map((item) => (
          <div
            className="col-span-1 bg-neutral-100 flex items-center justify-center py-4 rounded-xl hover:cursor-pointer"
            key={item}
          >
            {item}
          </div>
        ))}
        <div className="col-span-2 bg-neutral-100 flex items-center py-2 px-3 rounded-xl hover:cursor-pointer">
          <input
            className="bg-neutral-100 flex-grow outline-none"
            placeholder="Search..."
          />
          <Search className="" />
        </div>
        {navItems2.map((item) => (
          <div
            className="col-span-1 bg-neutral-100 flex items-center justify-center py-2 rounded-xl hover:cursor-pointer"
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
      <section className="relative min-h-[600px] overflow-hidden mt-4 rounded-xl bg-[#F3F3F3]">
        <div className="absolute inset-0 select-none">
          <div className="text-[20vw] font-bold leading-none text-[#E8E8E8]">
            OHHWHAT
          </div>
        </div>

        <div className="container relative mx-auto px-4 py-16">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-[3.5rem] font-medium leading-[1.1] tracking-[-0.02em] text-black">
                  Best Cloth Bag Collection For You
                </h1>
                <p className="text-base text-black/60">2024-PRESENT</p>
              </div>

              <p className="text-lg text-black/80">
                ↘ Discover the epitome of style and craftsmanship with our
                curated bag collection.
              </p>
              <div>
                <Button
                  className="group h-12 rounded-full border bg-white px-6 text-black hover:bg-black hover:text-white"
                  variant="outline"
                >
                  Start Shopping
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute bottom-4 right-4 flex space-x-3">
                <Button
                  size="icon"
                  variant="outline"
                  className="h-10 w-10 rounded-full border bg-white text-black hover:bg-black hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-10 w-10 rounded-full border bg-white text-black hover:bg-black hover:text-white"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
