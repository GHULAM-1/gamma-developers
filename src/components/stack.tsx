"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { StackType } from "@/types/all-types";
import Marquee from "./magicui/marquee";

export default function Stack({ data }: { data: StackType[] | undefined }) {
  return (
    <>
      <div className="hidden md:grid grid-cols-2 mt-4 md:grid-cols-5 lg:flex-row items-center justify-center gap-y-10 bg-black dark:bg-black w-full">
        {data?.map((stack: StackType) => {
          return (
            <Card
              title={stack.name}
              brandColor={stack.brandColor}
              imageUrl={stack.image}
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black"
                colors={[stack.colors]}
                dotSize={2}
              />
              {/* Radial gradient for the cute fade */}
              <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
            </Card>
          );
        })}
      </div>
      <div className="grid md:hidden grid-cols-2 mt-4 md:grid-cols-5 lg:flex-row items-center justify-center gap-y-10 bg-black dark:bg-black w-full">
        {data?.slice(0, 8).map((stack: StackType) => {
          return (
            <Card
              title={stack.name}
              brandColor={stack.brandColor}
              imageUrl={stack.image}
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black"
                colors={[stack.colors]}
                dotSize={2}
              />
              {/* Radial gradient for the cute fade */}
              <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
            </Card>
          );
        })}
      </div>
    </>
  );
}

const Card = ({
  title,
  imageUrl,
  children,
  brandColor,
}: {
  title: string;
  imageUrl: string;
  children?: React.ReactNode;
  brandColor: string;
}) => {
  const [hovered, setHovered] = React.useState(true);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(true)}
      className="border border-white/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-[8rem] md:w-[15rem] mx-auto p-4 relative md:h-[10rem] h-[8rem] "
    >
      {/* <Icon className="absolute h-6 w-6 -top-3 -left-3 stroke-neutral-400  text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-black stroke-neutral-400" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-black stroke-neutral-400" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3  text-black stroke-neutral-400" /> */}

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 group flex justify-center items-center flex-col gap-2">
        <img
          className={`md:w-[70px] w-[40px]  fill-white h-[70px] text-red-700`}
          src={imageUrl}
        />
        <div style={{ color: brandColor }}>{title}</div>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
