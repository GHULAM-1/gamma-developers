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

export default function Home() {
  return (
    <>
      <Hero />
      <DirectionAwareHoverDemo />
      <DevelopmentCycle />
      <ServicesSec />
      <div className="block lg:hidden max-w-[1365px] w-full">

        <StackMob />
      </div>
      <div className="hidden lg:block">
        <StackSec />
      </div>
      <BlogSec />
      <TestimonialCarousel />
    </>
  );
}
