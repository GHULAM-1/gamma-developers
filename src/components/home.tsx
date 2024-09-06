import React from "react";
import Hero from "./hero-sec";
import { DirectionAwareHoverDemo } from "./portfolio-cards";
import ServicesSec from "./services-sec";
import BlogSec from "./blog-sec";
import Footer from "./footer";
import { TestimonialCarousel } from "./testimonials";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";
import StackSec from "./stack-sec";
import DevelopmentCycle from "./development-cycle";
import StackMob from "./stack-mob";
import SectionDivider from "./section-divider";
import { blogCardsDataT } from "@/types/all-types";
import { sanityFetch } from "@/utils/sanityFetch";
import { blogCardsQuery } from "@/utils/queries";
export default async function Home() {
  const blogCardsData: blogCardsDataT[] = await sanityFetch({
    query: blogCardsQuery,
  });
  return (
    <>
      <Hero />
      <DirectionAwareHoverDemo />
      <DevelopmentCycle />
      <ServicesSec />
      <StackSec />
      <BlogSec data={blogCardsData} />
      <TestimonialCarousel />
    </>
  );
}
