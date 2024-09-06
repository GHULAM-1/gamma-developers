"use client";
import React from "react";
import { ArrowRight } from 'lucide-react';

export function LetsTalk() {
  return (
    <a href="/contact">
      <div className="cursor-pointer select-none relative max-w-[1365px] w-[87vw] px-8 bg-primary text-black flex flex-col justify-center overflow-hidden rounded-md -mt-36 py-4 ">
        <h1 className="md:text-7xl py-4 md:py-9 text-xl lg:text-6xl font-bold flex items-center justify-between text-center">
          <span className="flex-1 text-left">Let's Work Together</span>
          <ArrowRight 
            size={50} 
            className="align-middle md:inline hidden" 
          />
          <ArrowRight 
            size={40} 
            className="align-middle md:hidden inline" 
          />
        </h1>
      </div>
    </a>
  );
}
