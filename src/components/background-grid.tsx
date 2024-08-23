"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-full relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg mt-10">
      <Boxes className="absolute inset-0 w-full h-full pointer-events-auto" />
      
      <div className="py-20 z-20 relative pointer-events-none"> {/* Ensure text is in front but not blocking interactions */}
        <div className="py-12 text-white flex items-center gap-24">
          <p className="text-9xl font-bold tracking-[0.2rem]">
            <span className="text-[#D0FF71] text-[10rem] font-extrabold">S</span>
            HAPING
          </p>

          <p className="w-[18%] self-end mb-3 text-xl font-medium">
            Create a Professional Website Today <span className="text-[#D0FF71]">!</span>
          </p>
        </div>

        <div className="text-white">
          <p className="text-8xl tracking-[0.3rem] -mt-9">TOMORROW TODAY</p>

          <p className="text-[#D0FF71] flex justify-end w-[85%] py-3">POWERFUL HTML Template</p>
        </div>
      </div>
    </div>
  );
}
