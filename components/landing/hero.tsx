export const Main = () => {
  return (
    <div className="flex flex-col items-center bg-white px-4 sm:px-6 lg:px-8 mb-2">
      <section className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] overflow-hidden mt-4 rounded-xl bg-[#F3F3F3] w-full">
        <div className="absolute inset-0 select-none flex items-center justify-center">
          <div className="text-[15vw] sm:text-[20vw] font-bold leading-none text-[#E8E8E8]">
            OHHWHAT
          </div>
        </div>

        <div className="container relative px-4 py-6 sm:py-8 md:py-12 lg:py-16">
          <div className="grid gap-6 sm:gap-8 md:gap-12 lg:gap-16 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-8">
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-[-0.02em] text-black">
                  Best Cotton Canvas Bags Collection For You
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-black/60">
                  2024-PRESENT
                </p>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-black/80">
                ↘ Discover the epitome of style and craftsmanship with our
                curated bag collection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
