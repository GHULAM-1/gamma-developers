"use client";
import { blogCardsDataT } from "@/types/all-types";
import React, { useState } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

export default function BlogCard({
  authorName,
  bannerImage,
  estimatedReadingTime,
  mainHeading,
  publishedAt,
  slug,
  tag,
}: blogCardsDataT) {
  const [isImageLoaded, setIsImageLoaded] = useState(false); // Track image loading state

  return (
    <a
      href={`/blog/${slug}`}
      className="w-[365px] relative flex flex-col gap-5"
    >
      <div className="flex justify-between w-full">
        <div className="flex w-full gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>{authorName}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-[13px]">
            <div>{authorName}</div>
            <div className="text-[#FFFFFF9A] font-light">Editor</div>
          </div>
        </div>
        <div className="flex gap-5 whitespace-nowrap items-center justify-center">
          <Clock className="text-[#FFFFFF9A] font-light w-[13px] h-[13px]" />
          <span className="text-[#FFFFFF9A] font-light text-[13px]">
            {estimatedReadingTime}
          </span>
        </div>
      </div>

      <div className="relative">
        <Image
          width={365}
          height={255}
          src={bannerImage}
          alt="Blog Banner"
          className={`rounded-2xl z-20 ${
            isImageLoaded ? "opacity-1" : "opacity-0"
          }`}
          onLoad={() => setIsImageLoaded(true)} // Set image as loaded
          style={{ transition: "opacity 0.5s ease-in-out" }}
        />
        {!isImageLoaded && (
          <Skeleton className="absolute inset-0 rounded-xl z-10 bg-gray-300" />
        )}
      </div>

      <div className="text-[22px] font-semibold">{mainHeading}</div>
    </a>
  );
}
