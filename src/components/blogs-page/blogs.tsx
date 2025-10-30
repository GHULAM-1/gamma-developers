import React from 'react'
import Navbar from '../navbar'
import BlogsBody from './blogs-body'
import HeroSection from '../hero-section';
import ArticlesTestimonials from '../articles';
import Footer from '../footer';

export default function  Blogs  () {
  return (
    <div>
    
      <Navbar />
      <HeroSection variant="blogs" />
      <BlogsBody />
      <ArticlesTestimonials showTestimonials={false} />
      <Footer />
    </div>
  );
}
