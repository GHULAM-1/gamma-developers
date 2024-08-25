import React from 'react'
import { AccordionDemo } from './accordian'
import { TestimonialCarousel } from './testimonials'
import { SparklesPreview } from './lets-work-button'

export default function WhoWeAre() {
  return (
    <>
      <div className='flex justify-between my-32 items-center' >
        <div className='w-[40%] '>
            <img className='rounded-lg' src="/about-us.jpg" alt="" />
        </div>

        <div className='text-white text-left space-y-6 w-[50%]'>
            <h2 className='text-xl '>Who We Are? </h2>
            <p className='font-semibold text-2xl'>Elevating brands globally with innovative strategies and visionary design</p>
            <div>
                <AccordionDemo/>
            </div>

        </div>
      </div>

      
     

    </>
  )
}
