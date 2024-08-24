"use client";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { AllPortfolioCardsData } from "@/data/a-portfolio-card";
import { PortfolioCardType } from "@/types/all-types";
import SectionDivider from "./section-divider";

export function DirectionAwareHoverDemo() {
  return (
    <>
      <SectionDivider text="Our Portfolio"/>
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 justify-items-center mt-0 md:mt-[-25px] gap-5 md:p-0 lg:p-20">
        {AllPortfolioCardsData.slice(0, 6).map((portfolioCard: PortfolioCardType) => {
          return (
            <DirectionAwareHover imageUrl={portfolioCard.image} key={portfolioCard.name}>
              {portfolioCard.name}
            </DirectionAwareHover>
          );
        })}
      </div>
    </>
  );
}
