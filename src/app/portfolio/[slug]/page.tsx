"use client";
import { givePortfolioData } from "@/lib/give-portfolio-data";
import { portfolioPageDataType } from "@/types/all-types";
import PortfolioHeader from "@/components/portfolio-header";
import LadderSec from "@/components/ladder-sec";
export default function APortfolio({ params }: { params: { slug: string } }) {
  const data: portfolioPageDataType | undefined = givePortfolioData(
    params.slug
  );
  return (
    <>
      <div className="mt-16 text-white">
        <PortfolioHeader
          pinDetails={data?.pinDetails}
          purpose={data?.purpose}
          title={data?.title}
        />
        <img
          src="https://uithemez.com/i/hubfolio_HTML/inner_pages/assets/imgs/portfolio/project/2.jpg"
          alt=""
        />
        <LadderSec data={data?.ladderData} />
      </div>
    </>
  );
}
