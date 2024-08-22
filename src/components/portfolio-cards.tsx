"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { PortfolioCardData } from "@/data/all-cards-data";
import { PortfolioCardType } from "@/types/all-types";
import SectionDivider from "./section-divider";

export function DirectionAwareHoverDemo() {
  const imageUrl =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
        <SectionDivider text="Our Portfolio"/>
      <div className="mb-8 grid grid-cols-2 justify-items-center mt-[-30px] gap-5 p-20">
        {PortfolioCardData.map((portfolioCard: PortfolioCardType) => {
          return (
            <DirectionAwareHover imageUrl={portfolioCard.image}>
              {portfolioCard.name}
            </DirectionAwareHover>
          );
        })}
      </div>
    </>
  );
}
