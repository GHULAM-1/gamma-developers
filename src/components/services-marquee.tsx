import React from "react";
import Marquee from "./magicui/marquee";
import { nanoid } from "nanoid";
export default function ServicesMarquee({
  content,
}: {
  content: string[] | undefined;
}) {
  if (content) {
    return (
      <div className="w-full flex justify-center ">
        <Marquee pauseOnHover className="[--duration:20s]">
          {content.map((item) => (
            <div className="text-white text-[80px] md:text-[150px] font-bold" key={nanoid()}>
              {item}{" "}
            </div>
          ))}
        </Marquee>
      </div>
    );
  }
}
