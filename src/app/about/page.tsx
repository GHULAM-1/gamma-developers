import React from 'react';
import { ScrollBasedVelocityDemo } from '@/components/about-us-scroll';
import WhoWeAre from '@/components/accordian-sec';
import { TestimonialCarousel } from '@/components/testimonials';

import OurTeam from '@/components/our-team-section';
import AboutUsHero from '@/components/about-us-hero';

export default function AboutUs() {
  return (
    <>
      <div className="max-w-[1365px] w-full">

        <AboutUsHero/>
        <ScrollBasedVelocityDemo />
        <div>
        <video autoPlay loop muted  src="/about-us.mp4" className="w-full h-auto"></video>

        </div>
        <WhoWeAre />
        <OurTeam />
        <TestimonialCarousel />
      </div>
    </>
  );
}
