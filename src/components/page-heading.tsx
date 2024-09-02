import React from "react";

export default function PageHeading({
  heading,
  description,
}: {
  heading: string | undefined;
  description: string | undefined;
}) {
  return (
    <div className="flex   mt-28 justify-between items-end w-full  max-w-[1365px]  border-b-[1px] border-neutral-400 border-opacity-20 pb-28 mb-10">
      {heading && (
        <div className="leading-[1.15] tracking-tighter text-[55px] w-[740px] text-white font-[500]">
          <span className="text-black ">blank</span>
          {heading}
        </div>
      )}
      {description && (
        <div className="w-[410px] text-[16px] text-neutral-400">
          {description}
        </div>
      )}
    </div>
  );
}
