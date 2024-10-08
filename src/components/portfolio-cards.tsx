"use client";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { AllPortfolioCardsData } from "@/data/a-portfolio-card";
import { PortfolioCardType } from "@/types/all-types";
import Image from "next/image";
import SectionDivider from "./section-divider";
import { ArrowUpRight } from "lucide-react";

export function DirectionAwareHoverDemo() {
  return (
    <>
      <div className="flex flex-col justify-center max-w-[1365px] items-center mb-[140px] w-full">
          <SectionDivider className="hidden md:flex" text="Our Portfolio" />
          <SectionDivider className="md:hidden flex" text="Portfolio" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {AllPortfolioCardsData.slice(0, 4).map(
            (portfolioCard: PortfolioCardType) => {
              return (
                <div
                  key={portfolioCard.id}
                  className="bg-[#1F2022] sm:h-[450px] lg:h-[450px] xl:h-[600px] rounded-2xl p-4 text-white"
                >
                  <Image
                    alt="loading ..."
                    width={600}
                    height={450}
                    src={portfolioCard.image}
                    className="w-full h-[85%] sm:h-[87%] rounded-2xl object-cover"
                  />
                  <div className="flex justify-between w-full items-center mt-4">
                    <div className="flex w-full items-center gap-5 pl-2">
                      <span className="w-[5px] h-[5px] rounded-full bg-[#79797A]"></span>
                      <div className="text-[14px] sm:text-[20px] lg:text-[24px] font-medium">
                        {portfolioCard.name}
                      </div>
                    </div>
                    <div>
                      <a
                        href="/portfolio"
                        className="hover:bg-primary whitespace-nowrap border border-[#FFFFFF5A] hover:text-black transition-all ease-linear text-sm flex justify-center items-center rounded-3xl px-[12px] py-[3px] md:px-4 md:py-2 lg:px-[25px] lg:py-[12px] cursor-pointer"
                      >
                        <span>View</span>
                        <ArrowUpRight size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
}
