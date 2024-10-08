import React from "react";

export default function PortfolioHeader({
  purpose,
  title,
  pinDetails,
}: {
  purpose: string | undefined;
  title: string | undefined;
  pinDetails:
    | {
        title: string;
        value: string;
      }[]
    | undefined;
}) {
  return (
    <div className="flex justify-center items-center flex-col md:mt-10">
      <div className="hidden md:flex justify-center items-center gap-2 ">
        <div className="w-[7px]  h-[7px] flex rounded-full bg-white"></div>
        <div className=" text-[18px] hidden md:flex">{purpose}</div>
      </div>
      <div className="flex text-[40px] md:text-[80px] font-[600]">{title}</div>
      <div className="text-[18px] md:hidden flex">{purpose}</div>

      <div className="grid md:hidden grid-cols-2   text-center mt-16 mb-20">
        {pinDetails?.map((detail, index) => (
          <div
            key={index}
            className={`p-4 text-white border-b-[1px] border-neutral-400 border-opacity-25 flex justify-center items-center flex-col ${
              index % 2 === 0 ? "border-r-[1px]" : ""
            }`}
          >
            <h3 className="text-sm font-light">{detail.title}</h3>
            <p className="text-lg font-bold">{detail.value}</p>
          </div>
        ))}
      </div>

      <div className="md:grid hidden w-full  grid-cols-4  text-center mt-16 mb-20">
        {pinDetails?.map((detail, index) => (
          <div
            key={index}
            className={`p-4 text-white border-b-[1px] border-neutral-400 border-opacity-25 flex justify-center items-center flex-col ${
              index % 4 !== 3 ? "border-r-[1px]" : ""
            }`}
          >
            <h3 className="text-[22px] font-light">{detail.title}</h3>
            <p className="text-[28px] font-bold">{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
