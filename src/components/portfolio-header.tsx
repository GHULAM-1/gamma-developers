import { portfolioPageData } from "@/data/portfolio-page-data";
import { Item } from "@radix-ui/react-accordion";
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
        <div className=" p-4 text-white border-b-[1px] border-neutral-400 border-opacity-25 border-r-[1px] flex justify-center items-center flex-col">
          <h3 className="text-sm font-light">Client</h3>
          <p className="text-lg font-bold">Ali Khan</p>
        </div>
        <div className=" p-4  text-white border-b-[1px] border-neutral-400 border-opacity-25 flex justify-center items-center flex-col">
          <h3 className="text-sm font-light">Year</h3>
          <p className="text-lg font-bold">2023</p>
        </div>
        <div className=" p-4  text-white border-r-[1px] border-neutral-400 border-opacity-25 flex justify-center items-center flex-col">
          <h3 className="text-sm font-light">Role</h3>
          <p className="text-lg font-bold">Developer</p>
        </div>
        <div className="  text-white flex justify-center items-center flex-col">
          <h3 className="text-sm font-light">Platform</h3>
          <p className="text-lg font-bold">Mobile</p>
        </div>
      </div>

      <div className="md:grid hidden w-full  grid-cols-4  text-center mt-16 mb-20">
        <div className=" p-4 text-white border-b-[1px] border-neutral-400 border-opacity-25 border-r-[1px] flex justify-center items-center flex-col">
          <h3 className="text-[22px] font-light">Client</h3>
          <p className="text-[28px] font-bold">Ali Khan</p>
        </div>
        <div className=" p-4  text-white border-b-[1px] border-neutral-400 border-opacity-25 flex justify-center items-center flex-col">
          <h3 className="text-[22px] font-light">Year</h3>
          <p className="text-[28px] font-bold">2023</p>
        </div>
        <div className=" p-4  text-white border-r-[1px] border-b-[1px] border-l-[1px] border-neutral-400 border-opacity-25 flex justify-center items-center flex-col">
          <h3 className=" font-light text-[22px]">Role</h3>
          <p className="text-[28px] font-bold">Developer</p>
        </div>
        <div className="  text-white flex justify-center items-center flex-col border-b-[1px] border-neutral-400 border-opacity-25">
          <h3 className="text-[22px] font-light">Platform</h3>
          <p className="text-[28px] font-bold">Mobile</p>
        </div>
      </div>
    </div>
  );
}
