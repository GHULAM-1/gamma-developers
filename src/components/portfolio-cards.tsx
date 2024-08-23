"use client";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { AllPortfolioCardsData } from "@/data/a-portfolio-card";
import { PortfolioCardType } from "@/types/all-types";
import SectionDivider from "./section-divider";

export function DirectionAwareHoverDemo() {
  return (
    <>
      <SectionDivider text="Our Portfolio"/>
      <div className="mb-8 grid grid-cols-2 justify-items-center mt-[-30px] gap-5 p-20">
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
