"use client";
import React, { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Mail,
  Linkedin,
  Twitter,
  Globe,
} from "lucide-react";
import { calendarDays, times } from "../data/about-us-page/footer-metting";

interface FooterProps {
  footerOnly?: boolean; 
}

export default function Footer({ footerOnly = false }: FooterProps) {
  const [selectedDate, setSelectedDate] = useState<number>(24);
  const [selectedTime, setSelectedTime] = useState<string>("12:00 PM");
  const [email, setEmail] = useState<string>("");

  return (
    <div className={`bg-black text-white ${footerOnly ? "" : "min-h-screen"}`}>
      {/* ===== Consultation Booking Section ===== */}
      {!footerOnly && (
        <section className="px-4 sm:px-6 md:px-10 mb-20 py-12">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-green-900/40 to-green-800/30 rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 opacity-20">
              <img
                src="/heroSection/green-horizon-bg.png"
                alt="Background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 to-green-800/50"></div>

            <div className="text-center mb-8 md:mb-12 relative z-10">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 md:mb-4 px-2">
                Ready to build something exceptional?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base px-2">
                Let's discuss how our expertise can transform your idea into a
                powerful digital solution. Schedule a free, no-obligation
                consultation with our strategy team today.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 max-w-5xl mx-auto relative z-10">
              {/* Header */}
              <div className="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div className="bg-black text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-base sm:text-lg flex-shrink-0">
                  <span className="text-lime-400">G</span>
                  <span className="text-white">D</span>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-gray-500 text-xs sm:text-sm mb-0.5 sm:mb-1">
                    Gemma Developers
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-1 sm:mb-2">
                    Free Consultation
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm mb-1">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>30 min</span>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Web conferencing details provided upon confirmation.
                  </p>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="block md:hidden mb-5">
                <button className="w-full bg-blue-500 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-blue-600 transition text-sm">
                  Book Free Consultation
                </button>
              </div>

              {/* Calendar + Time Slots */}
              <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Calendar */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <button className="p-2 hover:bg-gray-100 rounded">←</button>
                    <h4 className="font-semibold text-black">April 2024</h4>
                    <button className="p-2 hover:bg-gray-100 rounded">→</button>
                  </div>
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(
                      (day) => (
                        <div
                          key={day}
                          className="text-center text-xs text-gray-500 font-medium py-2"
                        >
                          {day}
                        </div>
                      )
                    )}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {calendarDays.flat().map((day, idx) => (
                      <button
                        key={idx}
                        onClick={() => day && setSelectedDate(day)}
                        disabled={!day}
                        className={`aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition
                          ${!day ? "invisible" : ""}
                          ${
                            day === selectedDate
                              ? "bg-blue-500 text-white"
                              : "text-black hover:bg-gray-100"
                          }
                        `}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <p className="font-medium mb-1">Time zone</p>
                    <p>🌍 Central European Time (6:30pm)*</p>
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <h4 className="font-semibold text-black mb-4">
                    Thursday, August 22
                  </h4>
                  <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
                    {times.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`w-full py-3 px-4 rounded-lg border-2 text-center font-medium transition
                          ${
                            selectedTime === time
                              ? "border-blue-500 bg-blue-50 text-blue-600"
                              : "border-gray-200 text-black hover:border-gray-300"
                          }
                        `}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

        
              <div className="hidden md:flex flex-col sm:flex-row justify-between items-center mt-6 pt-6 border-t gap-4">
                <button className="text-blue-500 text-sm font-medium hover:underline">
                  Cookie settings
                </button>
                <div className="flex flex-wrap gap-3">
                  <button className="text-gray-600 text-sm font-medium hover:text-gray-900">
                    Report abuse
                  </button>
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Rescheduling
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}


      <footer className="border-t border-gray-800 px-4 sm:px-6 md:px-10 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
       
            <div>
           
              <div className="text-3xl font-bold mb-4">
                <span className="text-[#D4FF3F] hover:brightness-125 transition">
                  G
                </span>
                <span className="text-white">D.</span>
              </div>

              <div className="space-y-2 text-gray-400 text-sm">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    152 Thatcher Road St,
                    <br />
                    Manhattan, NY 10463, US
                  </span>
                </p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 uppercase text-sm tracking-wide">
                General Inquiries
              </h4>
              <a
                href="mailto:example@emailname.com"
                className="text-gray-400 hover:text-white text-sm"
              >
                example@emailname.com
              </a>
              <div className="flex gap-3 mt-6">
                {[Linkedin, Twitter, Globe].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="group w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-[#D4FF3F]" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4 uppercase text-sm tracking-wide">
                Subscribe to our newsletter
              </h4>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/10 border border-gray-700 rounded-lg px-4 py-3 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
              <button
                className="w-full bg-white text-black font-semibold py-3 rounded-lg mt-3 transition hover:bg-[#A3FF2D]
"
              >
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-800 text-sm text-gray-500 gap-4">
            <p>©2023 Gemma Developers. All rights reserved.</p>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="hover:text-white">
                Career
              </a>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms and Agreements
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
