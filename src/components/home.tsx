import React from "react";
import Hero from "./hero-sec";
import { DirectionAwareHoverDemo } from "./portfolio-cards";
import ServicesSec from "./services-sec";
import BlogSec from "./blog-sec";
import { TestimonialCarousel } from "./testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <DirectionAwareHoverDemo />
      <ServicesSec />
      <BlogSec />
      {/* <TestimonialCarousel /> */}
    </>
  );
}
