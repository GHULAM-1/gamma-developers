"use client";
import { givePortfolioData } from "@/lib/give-portfolio-data";
import { portfolioPageDataType } from "@/types/all-types";
export default function APortfolio({ params }: { params: { slug: string } }) {
  const data: portfolioPageDataType | undefined = givePortfolioData(
    params.slug
  );
  return (
    <>
      <div className="flex w-full w-screen h-screen justify-center items-center">
        <div className="text-5xl text-white bg-red-800">{params.slug}</div>
        <div className="text-5xl text-white ">{data?.title}</div>
      </div>
    </>
  );
}
