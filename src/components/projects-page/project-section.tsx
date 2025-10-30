'use client'
import RealEstateLanding from "@/components/about-us-page/mission-footer";
import ValuesProcessSection from "@/components/about-us-page/values-processes";
import Navbar from "@/components/navbar";
import TeamSection from "@/components/landing-page/team-section";
import TrustedBy from "@/components/landing-page/trusted-by";
import React, { useEffect, useState } from "react";
import ProjectsShowcase from "../projects";
import ArticlesTestimonials from "../articles";
import OurProcess from "../our-processes";
import Footer from "../footer";
import HeroSection from "../hero-section";

export default function ProjectsSection() {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => setIsSmallScreen(window.innerWidth <= 440);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <HeroSection variant="projects" />
      <ProjectsShowcase isProjectPage />
      <TrustedBy/>
      <ArticlesTestimonials showArticles={false} />
      <OurProcess />
      <Footer />
    </div>
  );
}
