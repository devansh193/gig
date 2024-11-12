const items = [
  {
    id: 1,
    name: "EXPRESS DELIVERY",
    desc: "Express delivery all over India from our bag company",
  },
  {
    id: 2,
    name: "PAYMENT IN 3X",
    desc: "Take advantage of a payment in 3x without fees from of purpose",
  },
  {
    id: 2,
    name: "BEAUTIFY DESIGN",
    desc: "Get the beautiful designs.",
  },
];
export const Community = () => {
  return (
    <div className="container mx-auto px-4 my-4">
      <h1 className="text-[3.5rem] font-medium leading-[1.1] tracking-[-0.02em] text-black text-center my-2 py-4">
        We Supported By
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-[#F7F7F7] rounded-xl p-6 transition-all h-[200px] items-center justify-center"
          >
            <div className="flex items-center justify-center text-md font-medium leading-[1.1] tracking-[-0.02em] text-black">
              {item.name}
            </div>
            <p className="text-center text-sm font-medium leading-[1.1] tracking-[-0.02em] text-black">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
