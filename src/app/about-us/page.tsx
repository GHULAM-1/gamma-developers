import RealEstateLanding from "@/components/about-us-page/mission-footer";
import ValuesProcessSection from "@/components/about-us-page/values-processes";
import Navbar from "@/components/navbar";
import TeamSection from "@/components/landing-page/team-section";
import TrustedBy from "@/components/landing-page/trusted-by";
import React from "react";
import HeroSection from "@/components/hero-section";

export default function AboutUs() {

  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden">
      <Navbar />
     <HeroSection variant="about-us"/>
      <TrustedBy />
      <ValuesProcessSection />
    <TeamSection/>
    <RealEstateLanding/>
    </div>
  );
}
