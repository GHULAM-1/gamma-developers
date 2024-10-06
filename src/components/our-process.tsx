'use client'
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function OurProcess({
  data,
}: {
  data:
    | {
        number: number;
        title: string;
        description: string;
      }[]
    | undefined;
}) {
  return (
    <div className="bg-white text-black flex flex-col md:flex-row w-full  rounded-3xl justify-between items-start p-8 md:p-20">
      <div className="w-50% flex  flex-col">
        <div className="text-[39px] md:text-[50px] font-[500] mb-16 md:mb-32">Process</div>
        <img
          src="https://uithemez.com/i/hubfolio_HTML/creative_agency/assets/imgs/process.svg"
          alt=""
        />
      </div>
      <div className="flex flex-col w-full mt-5 md:mt-0 md:w-[50%]">
        <div className="text-[16px] mb-20 md:mb-32 pt-4">
          Business challenges are tough, but we have a proven record of
          elevating our partners to their next and best selves.
        </div>
        <div>
          {data?.map((item, index) => (
            <Accordion
              defaultValue="item-1"
              type="single"
              collapsible
              className="w-full"
            >
              <AccordionItem value={`item-${index + 1}`} className=" ">
                <AccordionTrigger className="text-[20px]  ">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-[14px] ">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        <div className="flex mt-14 cursor-pointer">
          <div className=" hover:bg-primary transition-all ease-linear hover:scale-105 rounded-3xl px-6 py-3 flex border-[1px] border-neutral-400 border-opacity-80">
            Work with us
          </div>
        </div>
      </div>
    </div>
  );
}
