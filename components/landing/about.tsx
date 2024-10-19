import Image from "next/image";
import Link from "next/link";

export const About = () => {
  return (
    <div className="">
      <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  About ohhwhat
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  At ohhwhat, we believe in the power of functional fashion. Our
                  tote bags and gifting solutions are designed to make your life
                  easier while keeping you stylish. Crafted with care and
                  attention to detail, each product tells a story of quality and
                  sustainability.
                </p>
              </div>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 w-fit"
                href="#"
              >
                Learn More About Us
              </Link>
            </div>
            <Image
              src={"/ohhwhat.jpeg"}
              alt="ohhwhat"
              height={500}
              width={500}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
