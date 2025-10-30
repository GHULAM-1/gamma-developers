
"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Twitter,
  Dribbble,
} from "lucide-react";
import Navbar from "../navbar";
import { FormData } from "@/types/contact-us-page/types";

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    company: "",
    service: "",
    message: "",
    agreeToPrivacy: false,
  });

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div
      className="relative min-h-screen text-white overflow-hidden"
      style={{
        backgroundColor: "#000",
        backgroundImage: `
          radial-gradient(
            circle at 30% 50%, 
            rgba(76, 175, 80, 0.25) 0%, 
            rgba(0, 0, 0, 0.5) 60%, 
            rgba(0, 0, 0, 1) 100%
          ),
          url("/heroSection/green-horizon-bg.png")
        `,
        backgroundBlendMode: "screen, normal",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "contrast(110%) brightness(105%)",
      }}
    >
      {/* Smoky overlay under navbar */}
      <div className="absolute top-0 left-0 w-full h-[120px] pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-30 animate-smoke-move bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0)_70%)] blur-2xl"></div>
      </div>

      <Navbar />

      {/* Main Content */}
      <div className="px-6 lg:px-16 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="flex flex-col space-y-6 h-full">
            {/* Map Section */}
            <div className="bg-transparent bg-opacity-40 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 flex-1">
              <div className="relative h-full min-h-[400px] bg-gray-800 rounded-2xl overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=31.4697,74.2728&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "invert(0) saturate(1) brightness(1)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  className="grayscale opacity-80"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Location Pin */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full">
                  <div className="relative">
                    <MapPin
                      size={48}
                      className="text-blue-500 fill-yellow-500"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-green-500 rounded-full opacity-30 animate-pulse"></div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold mb-2">Find Us Here</h3>
                  <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-lime-400 hover:text-black transition transition">
                    View On Google Maps
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {/* Email + Phone in one row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { Icon: Mail, value: "@gammadevelopers.com" },
                  { Icon: Phone, value: "+92 307 4593601" },
                ].map(({ Icon, value }, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gray-800 flex flex-col items-start"
                  >
                    <div className="mb-12">
                      <Icon size={32} className="text-lime-400" />
                    </div>
                    <p className="font-medium text-white text-lg">{value}</p>
                  </div>
                ))}
              </div>

              {/* Address in next row */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gray-800 flex flex-col items-start">
                <div className="mb-12">
                  <MapPin size={32} className="text-lime-400" />
                </div>
                <p className="font-medium text-white text-lg">
                  152 Thatcher Road St, Manhattan, NY 10463, US
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-transparent bg-opacity-40 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-gray-800 flex flex-col">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Let's Build Something
              <br />
              Exceptional
            </h2>

            <div className="space-y-6 flex-1">
              {[
                { name: "email", label: "Your Email", type: "email" },
                { name: "name", label: "Name", type: "text" },
                { name: "company", label: "Company", type: "text" },
              ].map(({ name, label, type }) => (
                <div key={name}>
                  <label className="block text-sm mb-2 text-gray-300">
                    {label}
                  </label>
                  <input
                    type={type}
                    name={name}
                    value={(formData as any)[name]}
                    onChange={handleChange}
                    className="w-full bg-white/10 backdrop-blur-md border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-lime-400 transition placeholder-gray-400 text-white"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Services
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-white/10 backdrop-blur-md border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-lime-400 transition appearance-none cursor-pointer text-white"
                >
                  <option value="">Select a service</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="design">UI/UX Design</option>
                  <option value="consulting">Consulting</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Tell us about your project
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  maxLength={300}
                  className="w-full bg-white/10 backdrop-blur-md border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-lime-400 transition resize-none placeholder-gray-400 text-white"
                />
                <div className="text-right text-sm text-gray-400 mt-1">
                  {formData.message.length}/300
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agreeToPrivacy"
                  checked={formData.agreeToPrivacy}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 accent-lime-400"
                />
                <label className="text-sm text-gray-300">
                  I agree to the{" "}
                  <span className="text-lime-400 underline cursor-pointer">
                    privacy policy
                  </span>
                </label>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-lime-400 text-black font-semibold py-3 rounded-xl hover:bg-lime-300 transition"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-0 px-6 lg:px-16 py-12 mt-2 text-white">
        {/* Fixed blending overlay for footer */}
        <div className="absolute inset-x-0 -top-128 bottom-0 pointer-events-none -z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="absolute inset-0 opacity-20 animate-smoke-move bg-[radial-gradient(circle_at_50%_100%,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0)_70%)] blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="text-3xl font-bold mb-6">
                <span className="text-lime-400">G</span>
                <span className="text-white">D.</span>
              </div>
              <p className="text-gray-300 mb-4">
                152 Thatcher Road St,
                <br />
                Manhattan, NY 10463, US
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-white">General Inquiries</h3>
              <p className="text-gray-300">@gammadevelopers.com</p>
              <div className="flex gap-4 mt-6">
                {[Instagram, Linkedin, Twitter, Dribbble].map((Icon, idx) => (
                  <button
                    key={idx}
                    className="text-gray-400 hover:text-lime-400 transition"
                  >
                    <Icon size={20} />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-xl text-white">
                Subscribe to our newsletter
              </h3>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 bg-white/10 backdrop-blur-md border border-gray-700 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-lime-400 transition placeholder-gray-400 text-white"
                />
                <button className="bg-white text-black px-6 py-2 rounded-xl text-sm font-medium hover:bg-lime-400 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800 text-sm text-gray-400">
            <p>©2025 Gamma Developers. All rights reserved.</p>
            <div className="flex gap-6">
              {["Career", "Privacy Policy", "Terms and Agreements"].map(
                (item) => (
                  <button key={item} className="hover:text-lime-400 transition">
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes smokeMove {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-15px) scale(1.05);
            opacity: 0.9;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
        }
        .animate-smoke-move {
          animation: smokeMove 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}