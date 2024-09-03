import React from "react";
import { WavyBackgroundDemo } from "@/components/about-us-hero";
import { ScrollBasedVelocityDemo } from "@/components/about-us-scroll";
import WhoWeAre from "@/components/accordian-sec";
import { TestimonialCarousel } from "@/components/testimonials";
import { SparklesPreview } from "@/components/lets-work-button";
import OurTeam from "@/components/our-team-section";
export default function AboutUs() {
  return (
    <>
      <div className="">
        <WavyBackgroundDemo />
        <ScrollBasedVelocityDemo />
        <div>
          <video autoPlay loop src="/about-us.mp4"></video>
        </div>
        <WhoWeAre />
        <OurTeam />
        <TestimonialCarousel />
        <SparklesPreview />
      </div>
    </>
  );
}
