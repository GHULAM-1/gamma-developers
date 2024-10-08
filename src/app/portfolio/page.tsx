"use client";
import PageHeading from "@/components/page-heading";
import SectionDivider from "@/components/section-divider";
import { portfolioPageData } from "@/data/portfolio-page-data";
import PortfolioCard from "@/components/portfolio-card";
export default function PortfolioPage() {
  return (
    <>
      <div className="max-w-[1365px] w-full flex flex-col justify-center items-center">
        <PageHeading
          description=" our portfolio reflects innovative software solutions that solve real-world problems. From robust web and mobile apps to AI-driven platforms, each project is designed to push boundaries and deliver measurable results. Explore how we’ve helped businesses transform with cutting-edge technology and development expertise."
          heading="We Don’t Just Showcase Work, We Build Solutions That Drive Success."
        />
        <div className="mt-14 w-full">
          <SectionDivider text="Our Portfolio" isViewMore={false} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-[100%] justify-items-center  mb-[200px] ">
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
