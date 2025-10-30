import React from 'react'
import Navbar from '../navbar';
import HeroSection from '../hero-section';
import ServicesPage from '../services-page';
import ArticlesTestimonials from '../articles';

export default function Servicespage () {
  return (
    <div>
      <Navbar />
      <HeroSection variant="services" />
      <ServicesPage />
      <ArticlesTestimonials showArticles={false} />
    </div>
  );
}

