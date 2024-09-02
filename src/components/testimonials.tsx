"use client";

import * as React from "react";
<<<<<<< HEAD
import { testimonialsData } from "@/data/testimonilas-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
=======
import { testimonialsData } from "@/data/testimonials-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";

>>>>>>> abubakar
export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex: number) => (prevIndex + 1) % testimonialsData.length
      );
<<<<<<< HEAD
    }, 3500); 
=======
    }, 3500); // Change testimonial every 3 seconds
>>>>>>> abubakar

    return () => clearInterval(interval);
  }, []);

  return (
<<<<<<< HEAD
    <div className="flex rounded-2xl items-center mt-10 mb-40 py-[100px]  justify-between bg-[#1A1B1E]">
=======
    <div className="flex items-center justify-between">
>>>>>>> abubakar
      <div className=" mb-9 w-[60%]">
        <img src="/testimonials-img.png" alt="" />
      </div>

<<<<<<< HEAD
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
=======

    <div className="transition-all ease-linear w-full flex justify-center items-center bg-background text-white ">
      <div className="w-full p-8 rounded shadow-lg">
        <p className="italic text-3xl ">
          "{testimonialsData[currentIndex].message}"
        </p>
        <div className="flex justify-between items-center">
          <div className="mt-4 text-right font-semibold flex justify-start gap-4">
            <Avatar>
              <AvatarImage src={testimonialsData[currentIndex].img} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col text-sm items-start">
              <div>{testimonialsData[currentIndex].name}</div>
              <div className="text-neutral-500">
                {testimonialsData[currentIndex].designation}
              </div>
            </div>
          </div>
          <svg
            className="w-12 h-12 text-neutral-700 opacity-80"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
        </div>
      </div>
    </div>
    </div>
>>>>>>> abubakar
  );
}
