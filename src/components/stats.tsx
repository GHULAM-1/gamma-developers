"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { stats } from "@/data/landing-page/trusted-by-data";
import { NumberTicker } from "@/components/ui/number-ticker";

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
          
            setVisibleIndexes((prev) => [
              ...prev.filter((i) => i !== index),
              index,
            ]);
          } else {
            // Reset when it goes out of view
            setVisibleIndexes((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.5 }
    );

    const items = containerRef.current?.querySelectorAll("[data-index]");
    items?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const renderTicker = (stat: any, i: number, size: string) => {
    const numericValue = parseFloat(stat.value.replace(/\D/g, "")) || 0;
    const suffix = stat.value.replace(/[0-9.]/g, ""); // e.g. '+'
    const isVisible = visibleIndexes.includes(i);

    return (
      <div
        key={i}
        data-index={i}
        className="flex flex-col items-center justify-center"
      >
        <Image
          src={stat.icon}
          alt={stat.label}
          width={size === "desktop" ? 40 : 36}
          height={size === "desktop" ? 40 : 36}
          className="mb-4 -translate-x-6"
        />

        <div className="flex items-end gap-1">
          {isVisible ? (
            <NumberTicker
              key={i + "-" + Date.now()}
              value={numericValue}
              className={`${
                size === "desktop" ? "text-[56px]" : "text-4xl"
              } font-bold text-white mb-1`}
            />
          ) : (
            <span
              className={`${
                size === "desktop" ? "text-[56px]" : "text-5xl"
              } font-bold text-white mb-1`}
            >
              0
            </span>
          )}
          <span
            className={`${
              size === "desktop" ? "text-[40px]" : "text-2xl"
            } font-bold text-white mb-2`}
          >
            {suffix}
          </span>
        </div>

        <p
          className={`text-gray-400 ${
            size === "desktop" ? "text-[16px]" : "text-sm"
          } text-center`}
        >
          {stat.label}
        </p>
      </div>
    );
  };

  return (
    <div ref={containerRef}>
      <div className="hidden md:flex flex-nowrap justify-center items-center gap-2 mx-auto max-w-[1280px] w-full">
        {/* Line before the first stat */}
        <div className="h-[190px] w-[2px] bg-lime-400 animate-pulse rounded-full" />

        {stats.map((stat, i) => (
          <React.Fragment key={i}>
            {/* Stat block */}
            <div className="w-[280px] h-[320px] flex flex-col items-center justify-center -translate-x-2">
              {renderTicker(stat, i, "desktop")}
            </div>

            {/* Line only if NOT the last stat */}
            {i < stats.length - 1 && (
              <div className="h-[190px] w-[2px] bg-lime-400 animate-pulse rounded-full" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile view */}
      <div className="grid md:hidden grid-cols-2 gap-8 max-w-md mx-auto">
        {stats.map((stat, i) => renderTicker(stat, i, "mobile"))}
      </div>
    </div>
  );
}
