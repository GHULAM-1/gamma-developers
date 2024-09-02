"use client";

import { testimonialsData } from "@/data/testimonilas-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex: number) => (prevIndex + 1) % testimonialsData.length
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex rounded-2xl items-center mt-10 mb-40 py-[100px]  justify-between bg-[#1A1B1E]">
      <div className=" mb-9 w-[60%]">
        <img src="/testimonials-img.png" alt="" />
      </div>

      <div className="transition-all ease-linear w-full flex max-w-[1365px]  justify-center items-center  text-white ">
        <div className="w-full p-8 rounded ">
          <p className=" text-[36px] tracking-tighter pb-10 border-b-[1px] border-neutral-400 border-opacity-25">
            "{testimonialsData[currentIndex].message}"
          </p>
          <div className="flex justify-between items-center">
            <div className="mt-8 text-right font-semibold flex justify-start gap-4 ">
              <Avatar className="w-[50px] h-[50px]">
                <AvatarImage src={testimonialsData[currentIndex].img} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col text-sm items-start">
                <div className=" text-[18px] mb-2">
                  {testimonialsData[currentIndex].name}
                </div>
                <div className="text-neutral-500 text-[14px]">
                  {testimonialsData[currentIndex].designation}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
