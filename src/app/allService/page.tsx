"use client";
import SectionDivider from "@/components/section-divider";
import { ServicesType } from "@/types/all-types";
import { Services } from "@/data/all-service-data";
import { ArrowUpRight } from 'lucide-react';

export default function AllServices() {
  return (
    <>
    <SectionDivider text="Our Services"/>
    <div className="mb-20">

      {Services.map((service: ServicesType, index: number) => {
        return (
          <a href={`/allService/${service.id}`} key={service.id}>
          <div
            key={index}
            className="relative text-white group flex justify-around border-b-[1px] py-8 items-center"
          >
            <p className="flex justify-end">{service.number}</p>
            <h1 className="text-white text-center text-7xl z-10 relative group">
              {service.serviceName}
              <div className="absolute text-sm text-black">
                <p className="absolute top-0 left-0 transform -translate-y-full bg-lime-400 rounded-full px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-[100ms]">
                  {service.hoverText1}
                </p>
                <p className="absolute bottom-8 left-[30rem] transform -translate-x-full -translate-y-1/2 bg-lime-400 rounded-full px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-750 delay-[300ms]">
                  {service.hoverText2}
                </p>
                <p className="absolute bottom-0 left-60 transform translate-y-full bg-lime-400 rounded-full px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150 delay-[300ms]">
                  {service.hoverText3}
                </p>
                <p className="absolute bottom-1/2 left-72 transform translate-x-full translate-y-1/2 bg-lime-400 rounded-full px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-[400ms]">
                  {service.hoverText4}
                </p>
              </div>
            </h1>
            <div className="border p-3 group-hover:bg-lime-400 group-hover:text-black rounded-full">
            <ArrowUpRight className="group-hover:scale-150 ease-in-out transition group-hover:transform duration-200" size={20}/>
            </div>
          </div>
          </a>
        );
      })}
    </div>
    </>
  );
}
