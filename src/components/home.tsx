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
import Marquee from "./magicui/marquee";
export default function Home() {
  return (
    <>
      <Hero />
      <DirectionAwareHoverDemo />
      <ServicesSec />

      <StackSec />

      <BlogSec />
      <TestimonialCarousel />
    </>
  );
}
