"use client";
import PageHeading from "@/components/page-heading";
import SectionDivider from "@/components/section-divider";
import LadderSec from "@/components/ladder-sec";
import { portfolioPageData } from "@/data/portfolio-page-data";
import PortfolioCard from "@/components/portfolio-card";
export default function PortfolioPage() {
  return (
    <>
      <div className="max-w-[1365px] w-full flex flex-col justify-center items-center">
        <PageHeading
          description="Crafting new bright brands, unique visual systems and digital experience focused on a wide range of original collabs."
          heading="We are a digital agency for visually compelling about stories Hubfolio."
        />
        <SectionDivider text="Our Portfolio" isViewMore={false} />

        <div className="flex w-full ">
          {portfolioPageData?.map((item) => (
            <PortfolioCard
              key={item.slug}
              image={item.image}
              slug={item.slug}
              title={item.title}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
    </>
  );
}
