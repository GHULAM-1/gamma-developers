"use client";
import { ArrowUpRight } from 'lucide-react';
import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const DirectionAwareHover = ({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  className,
}: {
  imageUrl: string;
  children: React.ReactNode | string;
  childrenClassName?: string;
  imageClassName?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [direction, setDirection] = useState<string>("left");

  const getDirection = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    obj: HTMLElement
  ) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  };

  return (
    <motion.div
      ref={ref}
      className={cn(
        " w-96 md:h-[20rem] md:w-[23rem] lg:h-[23rem] lg:w-[23.8rem] xl:w-[30.8rem] xl:h-[28rem] bg-transparent rounded-lg overflow-hidden group/card relative",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="relative h-full w-full"
          initial="initial"
          whileHover={direction}
          exit="exit"
        >
          <motion.div className="group-hover/card:block hidden absolute w-full h-full bg-black/40 transition duration-500" />
          <motion.div
            className="h-full w-full relative bg-gray-50 dark:bg-black"
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          >
            <Image
              alt="image"
              className={cn(
                "h-full py-3 w-full bg-gray-800 object-contain hover:blur-[2px] hover:opacity-95 ease-in-out transition duration-200",
                imageClassName
              )}
              width="1000"
              height="1000"
              src={imageUrl}
            />
          </motion.div>
          <motion.div
            variants={textVariants}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className={cn(
              "text-[#d0ff71] font-bold text-3xl absolute bottom-4 left-4 z-40",
              childrenClassName
            )}
            style={{
              textShadow: "3px 3px 4px rgba(0, 0, 0, 5)",
              WebkitTextStroke: "0.1px black",
            }}
          >
            {children}
          </motion.div>
          <motion.button
            variants={textVariants}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="absolute flex gap-1 items-center bottom-4 right-4 z-40 bg-[#d0ff71] text-black font-bold py-1 px-4 rounded opacity-0 group-hover/card:opacity-100"
          >
            View
            <ArrowUpRight size={15}/>

          </motion.button>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

const variants = {
  initial: {
    x: 0,
  },

  exit: {
    x: 0,
    y: 0,
  },
  top: {
    y: 20,
  },
  bottom: {
    y: -20,
  },
  left: {
    x: 20,
  },
  right: {
    x: -20,
  },
};

const textVariants = {
  initial: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  exit: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  top: {
    y: -20,
    opacity: 1,
  },
  bottom: {
    y: 2,
    opacity: 1,
  },
  left: {
    x: -2,
    opacity: 1,
  },
  right: {
    x: 20,
    opacity: 1,
  },
};
