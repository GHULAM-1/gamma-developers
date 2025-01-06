"use client";
import React, { useState } from "react";
import { givePortfolioData } from "@/lib/give-portfolio-data";
import { portfolioPageDataType } from "@/types/all-types";
import PortfolioHeader from "@/components/portfolio-header";
import LadderSec from "@/components/ladder-sec";
import Stack from "@/components/stack";
import SectionDivider from "@/components/section-divider";
import { Skeleton } from "@/components/ui/skeleton"; // Assume you have a Skeleton component
import StackMob from "@/components/stack-mob";

export default function APortfolio({ params }: { params: { slug: string } }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const data: portfolioPageDataType | undefined = givePortfolioData(params.slug);

  return (
    <>
      <div className="text-center md:text-left md:mt-16 text-white max-w-[1365px]">
        <PortfolioHeader
          pinDetails={data?.pinDetails}
          purpose={data?.purpose}
          title={data?.title}
        />
        <div className="relative">
          <img
            src={data?.bigImage}
            alt=""
            className={`rounded-2xl mb-12 z-20 ${
              isImageLoaded ? "opacity-1" : "opacity-0"
            }`}
            onLoad={() => setIsImageLoaded(true)} // Set image as loaded
            style={{ transition: "opacity 0.5s ease-in-out" }}
          />
          {!isImageLoaded && (
            <Skeleton className="absolute inset-0 rounded-2xl z-10 bg-gray-300" />
          )}
        </div>
        <div className="md:mt-28">
          <LadderSec data={data?.ladderData} />
        </div>
        <div>
          <SectionDivider text="Technologies used " isViewMore={false} />
        </div>
        <div className="md:my-28 mt-14 mb-20">
          <Stack data={data?.portfolioStackData} />
        </div>
      </div>
    </>
  );
}
