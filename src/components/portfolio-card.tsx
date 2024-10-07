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
    <a
      href={`/portfolio/${slug}`}
      className="cursor-pointer flex w-[623px] group flex-col border-b-[1px] border-neutral-400 border-opacity-20  py-8"
    >
      <img src={image} alt="" className=" object-cover  rounded-2xl" />
      <div className="flex justify-between items-center mt-10">
        <div>
          <div className="text-[28px] text-white mb-[15px]">
            {title.toLocaleUpperCase()}
          </div>
          {/* <div className="text-white text-[14px]">
            {tags.map((item) => (
              <div key={item} className="text-white">
                {item}
              </div>
            ))}
          </div> */}
        </div>
        <div className="">
          <div className="border-[1px] py-2 group-hover:bg-primary border-neutral-400 border-opacity-25 px-8 hover:bg-primary hover:stroke-black transition-all ease-linear cursor-pointer flex rounded-full justify-center items-center ">
            <ChevronRight
              className="stroke-white group-hover:stroke-black "
              size={25}
            />
          </div>
        </div>
      </div>
    </a>
  );
}
