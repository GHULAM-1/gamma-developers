import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import React from "react";
import { nanoid } from "nanoid";
import { processData } from "@/data/process";
import SectionDivider from "./section-divider";
export default function DevelopmentCycle({}) {
  return (
  <>
    <SectionDivider text="Development Cycle" isViewMore={false} />
    <Marquee pauseOnHover className="[--duration:20s] gap-0">
      {processData.map((item) => (
        <div className="text-white w-[380px] sm:w-[550px] md:w-[700px] md:h-[400px] flex flex-col-reverse md:flex-col justify-center lg:justify-normal gap-10 lg:gap-7 lg:w-[500px] lg:h-auto p-4 bg-[#212121] rounded-lg" key={nanoid()}>
          <div className="flex flex-row items-center md:items-start lg:gap-0 gap-4">
            <div>
              <img className="rounded-full aspect-square w-[170px] md:w-[400px] lg:w-[390px] lg:h-[150px] object-cover" src={item.image} alt="" />
            </div>
            <div className="text-[15px] sm:text-[18px] lg:text-base ml-0 md:ml-4 lg:mt-0 mt-3 text-left">
              <div>{item.description}</div>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="text-[29px] md:text-[35px] lg:text-[40px]">{item.title}</div>
            <div className="text-[29px] md:text-[35px] text-gray-400">{item.number}</div>
          </div>
        </div>
      ))}
    </Marquee>
  </>
  );
}
