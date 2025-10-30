import React from "react";
import ArticlesTestimonials from "@/components/articles";
import Consultation from "@/components/landing-page/consultation";
import FeaturedProducts from "@/components/landing-page/featured-products";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import ProjectsShowcase from "@/components/projects";
import ServicesPage from "@/components/services-page";
import TeamSection from "@/components/landing-page/team-section";
import TrustedBy from "@/components/landing-page/trusted-by";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TrustedBy />
      <ProjectsShowcase />
      <ServicesPage />
      <FeaturedProducts />
      <TeamSection />
      <ArticlesTestimonials />
      <Consultation />
    </div>
  );
};

export default LandingPage;
