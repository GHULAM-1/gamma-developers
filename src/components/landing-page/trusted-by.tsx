"use client";
import React from "react";
import Stats from "@/components/stats";
import TrustedLogos from "@/components/landing-page/trusted-logos"; // new component


export default function TrustedBy() {
  return (
    <section className="w-full bg-black py-16 text-white">
      <TrustedLogos />
        <div className="max-w-[1440px] mx-auto px-6 mt-24">
          <div className="max-w-[505px] text-left mb-16">
            <h2 className="text-[48px] font-semibold mb-4 leading-[58px]">
              Why Choose Us
            </h2>
            <p className="text-white text-[16px] leading-[24px]">
              Discover the stories behind some of our most successful and
              innovative digital experiences.
            </p>
          </div>
          <Stats />
        </div>
    </section>
  );
}
