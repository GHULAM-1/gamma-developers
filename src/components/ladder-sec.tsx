import React from "react";
import { nanoid } from "nanoid";

export default function LadderSec({
  data,
}: {
  data:
    | {
        title: string;
        desc: string;
        image: string;
        points: {
          heading: string;
          explanation: string;
        }[];
      }[]
    | undefined;
}) {
  return (
    <div
      key={nanoid()}
      className="space-y-10 mb-32 text-white flex flex-col justify-center items-center "
    >
      {data?.map((item, index) => {
        const isEven = index % 2 !== 0;
        return (
          <div
            key={nanoid()}
            className={`flex md:mb-28  flex-col md:flex-row ${
              isEven ? "md:flex-row-reverse" : ""
            } items-center justify-between md:gap-40`}
          >
            <div className="md:w-1/2 flex-col gap-8 p-4 flex justify-center items-center">
              <div className="text-5xl font-[700] md:hidden">{item.title}</div>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover rounded-lg "
              />
            </div>
            <div className="md:w-1/2 p-4  text-center md:text-left flex  flex-col justify-between items-start  ">
              <div className="w-full  flex justify-center md:items-start items-center  flex-col md:flex-col md:text-center text-center">
                <div className="text-5xl hidden md:flex md:text-left font-bold mb-4 text-white  ">
                  {item.title.toUpperCase()}
                </div>
                <p className="md:text-left text-center text-neutral-400 text-[16px] w-full md:w-[80%]">
                  {item.desc}
                </p>
              </div>

              <div className="mt-10 flex md:justify-start md:items-start justify-center items-center flex-col">
                {item.points.map((point, index) => (
                  <div
                    key={nanoid()}
                    className="flex flex-col md:flex-row items-center justify-center md:justify-start md:items-start gap-4 text-neutral-400 text-[16px] w-[80%] mb-4"
                  >
                    <div className="mt-1 px-5 py-2 text-[25px] rounded-full border-[1px] border-neutral-400 border-opacity-30   text-white font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-[18px] font-bold text-white">
                        {point.heading}
                      </div>
                      <div>{point.explanation}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
