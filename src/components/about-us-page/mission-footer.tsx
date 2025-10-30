'use client'
import React from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Mail,
  Linkedin,
  Twitter,
  Globe,
} from "lucide-react";
import Footer from "../footer";

export default function RealEstateLanding() {

  return (
    <div className="min-h-screen bg-black text-white">
    
      <section className="relative px-4 sm:px-6 md:px-10 py-12 md:py-16">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-green-900/40 to-transparent"></div>
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden bg-black py-16 px-6">
         
            <div className="absolute inset-0 bg-[url('/heroSection/green-horizon-bg.png')] bg-cover bg-[position:center_32%] opacity-30"></div>
            <div className="relative flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  We're hiring!
                </h2>
                <p className="text-green-100 text-sm md:text-base">
                  Be a part of our amazing team
                </p>
              </div>

              <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition flex items-center gap-2">
                <span className="text-lg">✦</span> Open Positions
              </button>
            </div>
          </div>

     
        </div>
      </section>


      <section className="px-4 sm:px-6 md:px-10 mb-16">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-2xl p-8 md:p-12 backdrop-blur relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iODAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] bg-contain"></div>
          </div>
          <div className="relative max-w-3xl mx-auto md:mx-0 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
              <span className="text-yellow-300">
                Transparency, integrity, and professionalism
              </span>{" "}
              are the pillars of our business philosophy. We prioritize clear
              communication and honest advice to empower your decisions.
            </h2>
          </div>
        </div>
      </section>

     
      <Footer/>
    </div>
  );
}