import Navbar from '@/components/navbar'
import React from 'react'
import Servicespage from '@/components/services-pages/services-page'
import CalendarFooterComponent from '@/components/footer'

export default function page  () {
  return (
  <div className="w-full min-h-screen bg-black overflow-x-hidden">
    <Servicespage/>
    <CalendarFooterComponent/>
    </div>
  )
}
