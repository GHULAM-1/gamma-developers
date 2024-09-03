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
      }[]
    | undefined;
}) {
  return (
    <div key={nanoid()} className="space-y-10 mb-32 text-white">
      {data?.map((item, index) => {
        const isEven = index % 2 !== 0;
        return (
          <div
            key={nanoid()}
            className={`flex mb-28 flex-col md:flex-row ${
              isEven ? "md:flex-row-reverse" : ""
            } items-start justify-start`}
          >
            <div className="md:w-1/2 p-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-[80%] h-auto object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2 p-4  text-center md:text-left flex justify-start flex-col items-start">
              <div className="text-5xl text-left font-bold mb-4 text-white  ">
                {item.title.toUpperCase()}
              </div>
              <p className=" text-neutral-400 text-[16px] w-[80%]">
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
