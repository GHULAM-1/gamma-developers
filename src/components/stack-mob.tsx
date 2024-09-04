import React from "react";
import { homePageStackData } from "@/data/stack-data";
import { StackType } from "@/types/all-types";
import Marquee from "./magicui/marquee";
import SectionDivider from "./section-divider";
export default function StackMob({
  data,
}: {
  data?: StackType[];
}) {
  const stacks = data || homePageStackData;

  return (
    <div className="max-w-[1365px] w-full">
      <SectionDivider text="Our Stack" className="" isViewMore={false} />

 <Marquee pauseOnHover className="[--duration:30s]">

    <div className="flex mb-44">
      {stacks.map((stack: StackType) => (
        <div className="flex flex-col gap-4 border border-white/[0.2] group/canvas-card  items-center justify-center dark:border-white/[0.2]  max-w-sm w-[15rem] mx-auto p-4 relative h-[10rem] ">
          <div className="w-[30%]">
            <img src={stack.image} alt={stack.name} />
          </div>
          <div style={{ color: stack.brandColor }}>{stack.name}</div>
        </div>
      ))}
    </div>
    </Marquee>
    </div>
  );
}
