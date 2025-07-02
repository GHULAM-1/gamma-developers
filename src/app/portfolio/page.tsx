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
          description="Where innovation drives real impact. We tackle complex challenges with cutting-edge development expertise, delivering scalable solutions from web to AI. Our mission is clear: build exceptional software that powers business success. See how we're shaping the digital future."
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
