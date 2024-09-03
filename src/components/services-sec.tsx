"use client";
import SectionDivider from "@/components/section-divider";
import { ServicesType } from "@/types/all-types";
import { Services } from "@/data/all-service-data";
import { ArrowUpRight } from "lucide-react";

export default function ServicesSec() {
  return (
    <>
      <div className="mb-44 w-full mt-[140px] rounded-2xl bg-white flex flex-col justify-center items-center text-black max-w py-[100px] md:py-[140px]">
        {/* <SectionDivider className="text-black" text="Our Services" /> */}
        <div className="border-b p-5 w-[90%]">
          <div className="flex w-full justify-start items-center gap-2 pl-2">
            <span className="w-[5px] h-[5px] rounded-full bg-[#79797A]"></span>
            <div className="text-[18px] ">Our Services</div>
          </div>
        </div>

        {Services.map((service: ServicesType, index: number) => (
          <a
            className="w-[90%]"
            href={`/${service.serviceSlug}`}
            key={service.id}
          >
            <div
              key={index}
              className="relative w-full text-black group flex justify-between px-0 lg:px-10 border-b-[1px] py-8 items-center"
            >
              <p className="flex justify-end text-[12px] md:text-[18px] text-black font-medium">
                {service.number}
              </p>
              <h1
                className={`text-[25px] sm:text-[30px] md:text-[50px] lg:text-[80px] z-10 relative group tracking-tighter font-medium `}
              >
                {service.serviceName}
                <div className="absolute text-sm text-black">
                  <p className="absolute tracking-normal font-normal top-5 md:top-0 left-0 transform -translate-y-full bg-lime-400 rounded-full px-2 py-1 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-[100ms]">
                    {service.hoverText1}
                  </p>
                  <p className="absolute tracking-normal font-normal bottom-7 left-[6rem] md:left-[30rem] transform -translate-x-full -translate-y-1/2 bg-lime-400 rounded-full px-2 py-1 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-750 delay-[300ms]">
                    {service.hoverText2}
                  </p>
                  <p className="absolute tracking-normal font-normal bottom-0 left-28 md:left-60 transform translate-y-full bg-lime-400 rounded-full px-2 py-1 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-150 delay-[300ms]">
                    {service.hoverText3}
                  </p>
                  <p className="absolute tracking-normal font-normal bottom-12 md:bottom-1/2 left-16 md:left-72 transform translate-x-full translate-y-1/2 bg-lime-400 rounded-full px-2 py-1 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-1000 delay-[400ms]">
                    {service.hoverText4}
                  </p>
                </div>
              </h1>
              <div className="border p-3 bg-lime-400 lg:bg-white text-black rounded-full lg:group-hover:bg-lime-400 lg:group-hover:text-black">
                <ArrowUpRight
                  className="ease-in-out size-4 md:size-7 transition transform duration-200 group-hover:scale-150"
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
