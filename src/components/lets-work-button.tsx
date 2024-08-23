"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { ArrowRight } from 'lucide-react';

export function SparklesPreview() {
  return (
    <div className="h-[10rem] cursor-pointer select-none relative w-full bg-black flex flex-col  justify-center overflow-hidden rounded-md border-[1px]  mb-16">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={110}
          className="w-full h-full"
          particleColor="#d0ff71"
          speed={10}
        />
      </div>
      <h1 className="md:text-7xl p-9 text-3xl lg:text-6xl font-bold  text-[#d0ff71] relative z-20 flex items-center justify-between group">
        Let's Work Together <ArrowRight size={90} className="text-black group-hover:text-white transition ease-in-out duration-200 delay-150"/>
      </h1>
    </div>
  );
}
