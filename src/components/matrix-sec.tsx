import React from 'react'
import { CompareDemo } from './compare-card'

export default function Matrix() {
  return (
    <>
        <div className='flex justify-between items-center'>

            <div className='text-white w-[60%]' >
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque exercitationem voluptas tempora repudiandae officia accusantium doloremque incidunt magni explicabo nam? Ut deserunt autem ipsa tempora rem minus at porro, eaque </p>
            </div>

            <div className='w-full '>
                <CompareDemo/>
            </div>

        </div>
    </>
  )
}
