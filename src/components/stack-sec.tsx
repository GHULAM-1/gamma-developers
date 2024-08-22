import React from 'react'
import { IconCloudDemo } from './stack-globe'

export default function Stack() {
  return (
   <>
        <div className='flex items-center justify-around'>
            <div>
                <IconCloudDemo/>
            </div>
            <div className='text-white w-[30%] text-justify '>
                <h1 className='text-center text-4xl font-semibold mb-6'>OUR STACK</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ab itaque similique at velit sit expedita harum sunt. Est maxime id iure, hic blanditiis totam iste consectetur quisquam asperiores nesciunt?</p>
            </div>
        </div>
   </>
  )
}
