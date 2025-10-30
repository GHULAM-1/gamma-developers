"use client";

import { useState } from "react";
import Image from "next/image";
import { Dot } from "lucide-react";

export default function ImageSectionClient({ service }: { service: any }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-[70vh] mt-28 mx-6 rounded-3xl overflow-hidden group">
      {service.image?.asset?.url ? (
        <>
          {isLoading && (
            <div
              className="absolute inset-0 bg-[url('/grid-placeholder.svg')] bg-center bg-cover bg-gray-900 animate-pulse mt-2"
              aria-hidden="true"
            />
          )}
          <Image
            src={service.image.asset.url}
            alt={service.title}
            fill
            priority
            onLoadingComplete={() => setIsLoading(false)}
            className={`object-cover transition-transform duration-700 ease-in-out ${
              isLoading ? "opacity-0" : "opacity-100"
            } group-hover:scale-110`}
          />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-12 md:p-16 lg:p-20">
        <div className="max-w-4xl">
          {/* 👇 Move this part downward slightly */}
          <div className="transform translate-y-6 md:translate-y-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {service.title}
            </h1>

            <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl mb-8">
              {service.description}
            </p>
          </div>

          <button className="bg-[#d4ff00] text-black px-6 py-5 mt-4 rounded-full font-medium hover:bg-[#c4ef00] transition-all hover:scale-105 inline-flex items-center gap-2">
            <Dot width={50} height={50} />
            Schedule Your Free Consultation
          </button>

          <p className="text-sm text-gray-400 mt-4">
            No commitment, just a strategic conversation.
          </p>
        </div>
      </div>
    </div>
  );
}
