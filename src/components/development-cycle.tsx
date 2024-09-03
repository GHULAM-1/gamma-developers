import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import React from "react";
import { nanoid } from "nanoid";
import { processData } from "@/data/process";

export default function DevelopmentCycle({}) {
  return (
    <Marquee pauseOnHover className="[--duration:20s] gap-0">
      {processData.map((item) => (
        <div className="text-white flex flex-col gap-7 w-[500px] p-4 bg-[#212121] rounded-lg" key={nanoid()}>
          <div className="flex items-start">
            <div>
              <img className="rounded-full aspect-square w-[390px] h-[150px] object-cover" src={item.image} alt="" />
            </div>
            <div className="ml-4 text-left">
              <div>{item.description}</div>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="text-[40px]">{item.title}</div>
            <div className="text-[40px] text-gray-400">{item.number}</div>
          </div>
        </div>
      ))}
    </Marquee>
  );
}
