import React from "react";
import Stack from "./stack";
import SectionDivider from "./section-divider";
import { homePageStackData } from "@/data/stack-data";
export default function StackSec() {
  return (
    <div className="w-full flex max-w-[1365px] flex-col mb-44">
      <SectionDivider text="Our Stack" isViewMore={false} />
      <Stack data={homePageStackData} />
    </div>
  );
}
