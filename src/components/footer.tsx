import React from 'react'
import Logo from './logo'
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';


export default function Footer() {
    return (
        <>   
       <footer className='flex flex-col md:flex-row items-start md:items-center justify-between'>
        <div className='flex justify-between w-full md:w-auto'>
        <div>
            <Logo/>
        </div>
        <div className='flex md:hidden text-white items-center gap-5 justify-center'>
            <Instagram color='#D0FF71'/>
            <Linkedin color='#D0FF71'/>
        </div>
        </div>
        
        <div className=' hidden md:flex text-white'>
        © Copyright 2023. All rights reserved.
        </div>


       <div className='text-white text-sm justify-start md:justify-center'>
            <p className='flex items-center gap-5 '><Mail color='#D0FF71' size={18}/> mianabubaka007@gmail.com</p>
            <p className='flex items-center gap-5  mt-3 mr-16'> <Phone color='#D0FF71' size={18}/> +92 (304) 5570099 </p> 
        </div>
       </footer>
        <div className='hidden md:flex text-white items-center gap-5 justify-center'>
            <Instagram color='#D0FF71'/>
            <Linkedin color='#D0FF71'/>
        </div>
        <div className=' block md:hidden text-white mt-3'>
        <p className='text-center text-xs '>© Copyright 2023. All rights reserved.</p>
        </div>

         </>
    
      )
}
