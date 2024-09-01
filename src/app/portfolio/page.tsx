"use client";
import PageHeading from "@/components/page-heading";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { AllPortfolioCardsData } from "@/data/a-portfolio-card";
import { PortfolioCardType } from "@/types/all-types";

export default function DirectionAwareHoverDemo() {
  return (
    <>
      <div className="max-w-[1365px] w-full flex flex-col justify-center items-center">
        <PageHeading
          description="Crafting new bright brands, unique visual systems and digital experience focused on a wide range of original collabs."
          heading="We are a digital agency for visually compelling about stories Hubfolio."
        />
      </div>
    </>
  );
}

// <div className="mb-8 grid grid-cols-1 md:grid-cols-2 justify-items-center mt-0 md:mt-[-25px] gap-5 md:p-0 lg:p-20">
//   {AllPortfolioCardsData.map((portfolioCard: PortfolioCardType) => {
//     return (
//       <a href={`/portfolio/${portfolioCard.id}`} key={portfolioCard.id}>
//         <DirectionAwareHover
//           imageUrl={portfolioCard.image}
//           key={portfolioCard.name}
//         >
//           {portfolioCard.name}
//         </DirectionAwareHover>
//       </a>
//     );
//   })}
// </div>;
