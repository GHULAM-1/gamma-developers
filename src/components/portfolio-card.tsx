import React from "react";
import { ChevronRight } from "lucide-react";

export default function PortfolioCard({
  image,
  title,
  slug,
  tags,
}: {
  image: string;
  title: string;
  slug: string;
  tags: string[];
}) {
  return (
    <div className="flex flex-col ">
      <img src={image} alt="" className="w-[623px] h-[428px]" />
      <div>
        <div>
          <div>{title}</div>
          <div>
            {tags.map((item) => (
              <div key={item} className="text-[#BDBDBD]">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div>
          <ChevronRight />
        </div>
      </div>
    </div>
  );
}
