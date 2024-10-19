import Image from "next/image";
export const Main = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#F9FAFB] pt-16 px-4 sm:px-6 lg:px-8 ">
      <div className="text-center max-full mx-auto">
        <p className="text-sm font-semibold tracking-wider text-gray-600 uppercase mb-4">
          OH WHAT? THE SURPRISE AWAITS!
        </p>
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-4xl md:text-4xl lg:text-5xl mb-6">
          <p className="">UNWRAP THE EXCITEMENT AND STEP INTO OHH WHAT</p>
          <span className="block text-gray-900">
            WHERE WONDER, PASSION AND ELEGANCE CONVERGE
          </span>
        </h1>
        <p className=" max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          EXPLORE, INDULGE, AND LET THE &apos;ohh&apos; MOMENTS BEGIN!
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 mx-auto mt-10">
        <div className="col-span-1">
          <Image
            src="/bag1.jpeg"
            height={150}
            width={150}
            alt="Image 1"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="col-span-1">
          <Image
            src="/bag3.jpeg"
            height={150}
            width={150}
            alt="Image 1"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="col-span-1">
          <Image
            src="/bag4.jpeg"
            height={150}
            width={150}
            alt="Image 1"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};
