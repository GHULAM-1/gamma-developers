import React from 'react'
import { AccordionDemo } from './accordian'


export default function WhoWeAre() {
  return (
    <>
      <div className='flex md:flex-row flex-col justify-between my-32 items-center' >
        <div className='w-full md:w-[40%] '>
            <img className='rounded-lg' src="/about-us.jpg" alt="" />
        </div>

        <div className='text-white text-left space-y-6 w-full  md:py-0 py-7 md:w-[50%]'>
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
