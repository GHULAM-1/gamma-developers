import React from "react";
import Stack from "./stack";
import SectionDivider from "./section-divider";
import { homePageStackData } from "@/data/stack-data";
import Marquee from "./magicui/marquee";
export default function StackSec() {
  return (
    <div className="w-full flex max-w-[1365px] flex-col mb-12 md:mb-44">
      <SectionDivider className="md:flex hidden" text="Our Stack" isViewMore={false} />
      <SectionDivider className="flex md:hidden" text="Stack" isViewMore={false} />

      <Stack data={homePageStackData} />
    </div>
  );
}
