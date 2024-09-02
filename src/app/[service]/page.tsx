import React from "react";
import giveServiceData from "@/lib/give-service-data";
import PageHeading from "@/components/page-heading";
import { servicePageDataType } from "@/data/services-data";
import SectionDivider from "@/components/section-divider";
import ServicesMarquee from "@/components/services-marquee";
import { SubTypesGrid } from "@/components/sub-types-grid";
import { SupportGrid } from "@/components/support-grid";
import Stack from "@/components/stack";
import OurProcess from "@/components/our-process";
export default function Service({ params }: { params: { service: string } }) {
  console.log(params.service);
  const data: servicePageDataType | undefined = giveServiceData(params.service);
  console.log(data);
  return (
    <div className="w-full flex flex-col max-w-[1365px]">
      <PageHeading
        heading={data?.mainHeading}
        description={data?.description}
      />
      <ServicesMarquee content={data?.marqueeContent} />

      <div className="mt-20">
        <SectionDivider text="Our Stack" isViewMore={false} />
      </div>
      <div className="mb-40">
        <Stack data={data?.stackData} />
      </div>
      <SectionDivider text="Type of Apps " isViewMore={false} />
      <SubTypesGrid data={data?.subTypesData} />

      <div className="mt-44">
        <OurProcess data={data?.processData} />
      </div>
      <div className="mt-44">
        <SectionDivider text="Deliverables" isViewMore={false} />
      </div>
      <div className="mb-32">
        <SupportGrid data={data?.supportData} />
      </div>
    </div>
  );
}
