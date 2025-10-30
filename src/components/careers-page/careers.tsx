import React from 'react'
import Navbar from '../navbar'
import HeroSection from '../hero-section'
import OurProcess from '../our-processes'
import OurValues from '../our-values'
import OpenPositions from './open-positions'
import FAQs from './faqs'
import Footer from '../footer'

export default function Careers  ()  {
  return (
    <div>
      <Navbar />
      <HeroSection variant="careers" />
      <OurProcess />
      <OurValues />
      <OpenPositions />
      <FAQs />
      <Footer footerOnly={true} />
    </div>
  );
}

