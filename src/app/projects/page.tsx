import Navbar from '@/components/navbar'
import React from 'react'
import AboutUs from '../about-us/page'
import ProjectsSection from '@/components/projects-page/project-section'

export default function  page  ()  {
  return (
  <div className="w-full min-h-screen bg-black overflow-x-hidden">
    <Navbar/>
    <ProjectsSection/>
    </div>
  )
}

