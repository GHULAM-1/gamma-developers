import { BlogType } from "@/types/all-types";
import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock } from "lucide-react";
export default function BlogCard({
  image,
  mainText,
  ownerName,
  ownerImage,
  date,
  timeToRead,
}: BlogType) {
  return (
    <>
      <div className="w-full max-w-[300px] flex flex-col gap-5">
        <div className="flex justify-between w-full">
          <div className="flex w-full gap-3 ">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>{ownerName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col text-[13px]">
              <div>{ownerName}</div>
              <div className="text-[#FFFFFF9A] font-light">Editor</div>
            </div>
          </div>
          <div className="flex gap-5 whitespace-nowrap items-center justify-center">
            <Clock className="text-[#FFFFFF9A] font-light w-[13px] h-[13px]" />
            <span className="text-[#FFFFFF9A] font-light text-[13px]">
              {date}
            </span>
          </div>
        </div>

        <Image
          width={365}
          height={255}
          src="https://uithemez.com/i/hubfolio_HTML/inner_pages/assets/imgs/blogs/blog1/1.jpg"
          alt={mainText} // Providing descriptive alt text
          className="rounded-2xl"
        />

        <div className="text-[22px] font-semibold">{mainText}</div>
      </div>
    </>
  );
}