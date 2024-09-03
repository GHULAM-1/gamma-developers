import { portfolioPageData } from "@/data/portfolio-page-data";
import React from "react";

export default function PortfolioHeader({
  purpose,
  title,
  pinDetails,
}: {
  purpose: string | undefined;
  title: string | undefined;
  pinDetails:
    | {
        title: string;
        value: string;
      }[]
    | undefined;
}) {
  return (
    <div>
      <div>
        <div></div>
        <div>{purpose}</div>
      </div>
      <div>{title}</div>
      <div>
        {pinDetails?.map((item) => (
          <div key={item.title}>
            <div>{item.title}</div>
            <div>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
