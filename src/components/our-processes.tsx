"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { processesQuery } from "@/sanity/queries";
import { Card, CardContent } from "@/components/ui/card";
import { ProcessStep } from "@/types/processes/types";

export default function OurProcess() {
  const [processSteps, setProcessSteps] = useState<ProcessStep[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.fetch(processesQuery);
        setProcessSteps(data);
      } catch (err) {
        console.error("Failed to fetch process steps:", err);
      }
    }
    fetchData();
  }, []);

  if (!processSteps.length) {
    return (
      <section className="w-full py-24 px-6 bg-black text-white text-center">
        <p className="text-gray-400">Loading process steps...</p>
      </section>
    );
  }

  return (
    <section className="relative w-full py-24 px-6 bg-black text-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold mb-3">Our Process</h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto leading-relaxed">
            The Drewl Hall of Fame: Featuring brands from around the world and
            projects of all shapes and sizes.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex relative flex-col justify-between min-h-[1200px]">
          {processSteps.map((step, index) => (
            <AnimatedStep
              key={step._id}
              step={index + 1}
              title={step.title}
              text={step.paragraph}
              image={step.image}
              align={index % 2 === 0 ? "right" : "left"}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-col space-y-10">
          {processSteps.map((step, index) => (
            <MobileStep
              key={step._id}
              step={index + 1}
              title={step.title}
              text={step.paragraph}
              image={step.image}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------- DESKTOP STEP ------------------ */
function AnimatedStep({
  step,
  title,
  text,
  image,
  align,
  isLast,
}: {
  step: number;
  title: string;
  text: string;
  image: string;
  align: "left" | "right";
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isLeft = align === "left";

  return (
    <div
      ref={ref}
      className="relative flex flex-col md:flex-row items-center transition-opacity duration-700"
    >
      {/* Step number */}
      <div
        className={`w-full md:w-1/2 ${
          isLeft
            ? "order-2 md:order-2 pr-0 md:pr-16 text-right"
            : "order-1 md:order-1 pl-0 md:pl-16 text-left"
        }`}
      >
        <span className="text-[100px] md:text-[120px] font-extrabold text-zinc-900 select-none leading-none">
          {`0${step}`}
        </span>
      </div>

      {/* Vertical line + Icon */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-10 w-fit">
        {/* Gradient line */}
        {step !== 1 && (
          <div
            className="relative w-[8px] overflow-hidden flex-1"
            style={{
              minHeight: "220px",
              maxHeight: "380px",
              height: "calc(100% - 5rem)",
            }}
          >
            <div
              className={`absolute top-0 left-0 w-full h-full ${
                isVisible ? "animate-lineGrowDownOnce" : "opacity-0"
              }`}
              style={{
                animationDuration: "2s",
                background:
                  "linear-gradient(to bottom, #1a1a1a 0%, #101010 40%, #b4ff4c 100%)",
              }}
            />
          </div>
        )}

        {/* Step icon */}
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center bg-[#243009] border-2 border-lime-400 shadow-[0_0_25px_rgba(132,211,112,0.45)] transition-all duration-700 ${
            isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Step ${step}`}
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
      </div>

      {/* Text content */}
      <div
        className={`w-full md:w-1/2 flex justify-center ${
          isLeft ? "md:justify-start md:order-1" : "md:justify-end md:order-2"
        } mt-6 md:mt-0`}
      >
        <Card className="bg-zinc-900 border-none rounded-xl shadow-xl max-w-md transition-all">
          <CardContent className="p-6 md:p-8">
            <h3
              className={`text-xl md:text-2xl font-semibold mb-3 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              } transition-all duration-700`}
            >
              {title}
            </h3>
            <p
              className={`text-gray-400 text-sm md:text-base leading-relaxed ${
                isVisible
                  ? "translate-y-0 opacity-100 delay-150"
                  : "translate-y-4 opacity-0"
              } transition-all duration-700`}
            >
              {text}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

/* ----------------- MOBILE STEP ------------------ */
function MobileStep({
  step,
  title,
  text,
  image,
  isLast,
}: {
  step: number;
  title: string;
  text: string;
  image: string;
  isLast: boolean;
}) {
  return (
    <div className="relative flex flex-col items-start">
      <Card className="bg-zinc-900 border-none rounded-lg shadow-lg w-full">
        <CardContent className="p-6 flex flex-col items-start">
          <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center bg-[#243009] border-2 border-lime-400 shadow-[0_0_20px_rgba(132,211,112,0.4)] overflow-hidden">
            <Image
              src={image}
              alt={`Step ${step}`}
              width={24}
              height={24}
              className="object-contain"
            />
          </div>

          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
        </CardContent>
      </Card>
    </div>
  );
}


