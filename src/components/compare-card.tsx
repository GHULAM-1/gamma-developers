import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    <div className="w-full h-[66vh] px-1 md:px-8 flex items-center justify-center [perspective:800px] [transform-style:preserve-3d]">
      <div
        style={{
          // transform: "rotateX(15deg) translateZ(80px)",
        }}
        className="p-1 md:p-0 rounded-2xl border-[2px] border-slate-700 mx-auto w-3/4 h-1/2 md:h-3/4"
      >
        <Compare
          firstImage="https://assets.aceternity.com/notes-dark.png"
          secondImage="https://assets.aceternity.com/linear-dark.png"
          firstImageClassName="object-cover object-left-top w-full"
          secondImageClassname="object-cover object-left-top w-full"
          className="w-full h-full rounded-[22px] md:rounded-lg"
          slideMode="hover"
        />
      </div>
    </div>
  );
}
