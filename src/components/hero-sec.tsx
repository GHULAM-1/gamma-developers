import React from 'react'
export default function Hero() {
  return (

    <>
    <div className='py-20 md:py-32'>
      <div className='py-12 text-white flex items-center gap-32'>
        <p className=' text-6xl md:text-7xl font-bold tracking-[0.2rem]'><span className='text-[#D0FF71]  text-6xl md:text-9xl font-extrabold'>S</span>HAPING</p>

        <p className='hidden md:block w-[23%] self-end mb-3 text-xl font-medium'>Create a Professional
            Website Today <span className='text-[#D0FF71]'>!</span></p>
      </div>

      <div className='text-white  '>
        <p className='text-5xl md:text-7xl tracking-[0.3rem] -mt-9'>TOMORROW TODAY</p>
        <p className='block md:hidden w-[60%] self-end mb-3 text-xl font-medium'>Create a Professional
            Website Today <span className='text-[#D0FF71]'>!</span></p>
        <p className='text-[#D0FF71] flex justify-end w-full md:w-[75%] py-3'>POWERFUL HTML Template</p>
      </div>
    </div>
    </>
  )
}
