"use client";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { AllPortfolioCardsData } from "@/data/a-portfolio-card";
import { PortfolioCardType } from "@/types/all-types";

export default function DirectionAwareHoverDemo() {
  return (
    <>
      <div className="mb-8 grid grid-cols-2 justify-items-center mt-[-30px] gap-5 p-20">
        {AllPortfolioCardsData.map((portfolioCard: PortfolioCardType) => {
          return (
            <a href={`/portfolio/${portfolioCard.id}`} key={portfolioCard.id}>
              <DirectionAwareHover
                imageUrl={portfolioCard.image}
                key={portfolioCard.name}
              >
                {portfolioCard.name}
              </DirectionAwareHover>
            </a>
          );
        })}
      </div>
    </>
  );
}
