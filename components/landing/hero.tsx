import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { Button } from "../ui/button";

const navItems = ["Men", "Women", "New", "Store"];
const navItems2 = ["About", "FAQs", "Cart"];
export const Main = () => {
  return (
    <div className="flex flex-col items-center bg-white px-4 sm:px-6 lg:px-8 mb-2">
      <div className="bg-white grid grid-cols-2 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 xl:grid-cols-12 w-full gap-x-2 gap-y-4">
        {navItems.map((item) => (
          <div
            className="col-span-1 bg-neutral-100 flex items-center justify-center py-2 sm:py-4 rounded-xl hover:cursor-pointer text-sm sm:text-base"
            key={item}
          >
            {item}
          </div>
        ))}
        <div className="col-span-2 xl:col-span-5 lg:col-span-2 md:col-span-1 bg-neutral-100 flex items-center py-2 px-3 rounded-xl hover:cursor-pointer">
          <input
            className="bg-neutral-100 flex-grow outline-none text-sm sm:text-base"
            placeholder="Search..."
          />
          <Search className="h-4 w-4 sm:h-5 sm:w-5" />
        </div>
        {navItems2.map((item) => (
          <div
            className="col-span-1 bg-neutral-100 flex items-center justify-center py-2 rounded-xl hover:cursor-pointer text-sm sm:text-base"
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
      <section className="relative min-h-[400px] sm:min-h-[600px] overflow-hidden mt-4 rounded-xl bg-[#F3F3F3] w-full">
        <div className="absolute inset-0 select-none flex items-center justify-center">
          <div className="text-[20vw] font-bold leading-none text-[#E8E8E8]">
            OHHWHAT
          </div>
        </div>

        <div className="container relative px-4 py-8 sm:py-16">
          <div className="grid gap-8 sm:gap-16 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4 sm:space-y-8">
              <div className="space-y-2 sm:space-y-4">
                <h1 className="text-3xl sm:text-[3.5rem] font-medium leading-tight tracking-[-0.02em] text-black">
                  Best Cloth Bag Collection For You
                </h1>
                <p className="text-sm sm:text-base text-black/60">
                  2024-PRESENT
                </p>
              </div>
              <p className="text-base sm:text-lg text-black/80">
                ↘ Discover the epitome of style and craftsmanship with our
                curated bag collection.
              </p>
              <div>
                <Button
                  className="group h-10 sm:h-12 rounded-full border bg-white px-4 sm:px-6 text-black hover:bg-black hover:text-white"
                  variant="outline"
                >
                  Start Shopping
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 flex space-x-2 sm:space-x-3">
                <Button
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border bg-white text-black hover:bg-black hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border bg-white text-black hover:bg-black hover:text-white"
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
