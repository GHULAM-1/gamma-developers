import React from 'react'
import Hero from './hero-sec'
import { DirectionAwareHoverDemo } from './portfolio-cards'
// import AllServices from './services'
import AllBlogs from './blog'
import AllServices from '@/app/allService/page'

export default function Home() {
  return (
    <>   
      <Hero/>
      <DirectionAwareHoverDemo/>
      <AllServices/>
      <AllBlogs/>
     </>

  )

}
