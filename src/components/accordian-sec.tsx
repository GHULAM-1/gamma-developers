"use client";
import React from "react";
import { AccordionDemo } from "./accordian";
import { Skeleton } from "@/components/ui/skeleton";

export default function WhoWeAre() {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-between my-32 items-center">
        <div className="w-full md:w-[40%] relative">
          <div className="relative">
          <img
            className="rounded-lg relative z-20"
            src="/about-us.jpg"
            alt="About Us"
            onLoad={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.opacity = "1";
            }}
            style={{ opacity: 0, transition: "opacity 0.5s ease-in-out" }}
          />
          <Skeleton className="absolute inset-0  rounded-xl z-10 bg-gray-300" />
          </div>
        </div>

        <div className="text-white text-left space-y-6 w-full md:py-0 py-7 md:w-[50%]">
          <h2 className="text-xl">Who We Are?</h2>
          <p className="font-semibold text-2xl">
            Empowering businesses worldwide with cutting-edge software solutions
            and transformative technology.
          </p>
          <div>
            <AccordionDemo />
          </div>
        </div>
      </div>
    </>
  );
}
