"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation, PanInfo } from "framer-motion";
import { trustedLogos } from "../../data/landing-page/trusted-by-data";

export default function TrustedLogos() {
  const controls = useAnimation();
  const marqueeRef = useRef<HTMLDivElement>(null);

  const [direction, setDirection] = useState<"left" | "right">("left");
  const marqueeSpeed = 40; // smaller = slower

  // Start auto marquee
  useEffect(() => {
    controls.start({
      x: direction === "left" ? ["0%", "-50%"] : ["0%", "50%"],
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: marqueeSpeed,
      },
    });
  }, [controls, direction]);

  // Pause on hover / touch
  const handleMouseEnter = () => controls.stop();
  const handleMouseLeave = () =>
    controls.start({
      x: direction === "left" ? ["0%", "-50%"] : ["0%", "50%"],
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: marqueeSpeed,
      },
    });

  // Move marquee as user drags (instant feedback)
  const handleDrag = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (!info?.delta) return;
    if (info.delta.x > 0) {
      // dragging right
      controls.set({ x: "2%" });
    } else if (info.delta.x < 0) {
      // dragging left
      controls.set({ x: "-2%" });
    }
  };

  // When drag ends, continue auto scroll in that direction
  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (!info?.offset) return;
    const newDirection = info.offset.x > 0 ? "right" : "left";
    setDirection(newDirection);
    controls.start({
      x: newDirection === "left" ? ["0%", "-50%"] : ["0%", "50%"],
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: marqueeSpeed,
      },
    });
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-8 text-center overflow-hidden select-none">
      <p className="text-gray-400 text-sm mb-8 tracking-widest">TRUSTED BY</p>

      <motion.div
        ref={marqueeRef}
        className="flex items-center justify-center gap-16 opacity-80 cursor-grab active:cursor-grabbing"
        animate={controls}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        onTouchStart={handleMouseEnter}
        onTouchEnd={handleMouseLeave}
      >
        {/* Duplicate logos twice for seamless loop */}
        {[...trustedLogos, ...trustedLogos].map((logo, i) => (
          <React.Fragment key={i}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="object-contain"
            />
            {i < trustedLogos.length * 2 - 1 && (
              <span className="text-gray-700">|</span>
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
