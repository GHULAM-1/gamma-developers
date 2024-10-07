"use client";
import React, { useState, useEffect } from "react";
import { Spotlight } from "./spotlight";

export default function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const descriptions = [
    [
      "BRANDING IDENTITY",
      "STRATEGY AND PLANNING",
      "REBRAND",
      "PITCHDESK",
      "BRANDING IDENTITY",
    ],
    [
      "MARKETING CONSULT",
      "SEO / PPC",
      "SOCIAL MEDIA",
      "GG/FB ADS",
      "BRANDING IDENTITY",
    ],
    [
      "AFFILIATE",
      "EMAIL MARKETING",
      "iSH program",
      "SOCIAL MEDIA",
      "BRANDING IDENTITY",
    ],
  ];

  // Function to handle the automatic loop
  useEffect(() => {
    const loopInterval = setInterval(() => {
      if (hoveredIndex === null) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
      }
    }, 1300); // Change every 3 seconds

    return () => clearInterval(loopInterval);
  }, [hoveredIndex]);

  // Function to handle when a user hovers over a heading
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setCurrentIndex(index);
  };

  // Function to handle when a user stops hovering
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="text-white px-5 md:px-0 max-w-[1365px] w-screen h-full md:h-screen gap-5 md:justify-center flex mb-16 lg:flex-row flex-col tracking-tighter items-start lg:items-center">
      <Spotlight
        className="top-[10px] left-0 md:left-30 md:-top-0"
        fill="#D0FF71"
      />
      <div className="flex flex-col leading-[1.25] mr-10 w-[50%]">
        <p
          className={`text-[50px] cursor-pointer sm:text-[70px] md:text-[100px] ${
            currentIndex === 0 ? "text-primary" : "text-white"
          }`}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          Design
        </p>
        <p
          className={`text-[50px] cursor-pointer sm:text-[70px] md:text-[100px] ${
            currentIndex === 1 ? "text-primary" : "text-white"
          }`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          Deployments
        </p>
        <p
          className={`text-[50px] cursor-pointer sm:text-[70px] md:text-[100px] ${
            currentIndex === 2 ? "text-primary" : "text-white"
          }`}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          Grow
        </p>
      </div>
      <div className="flex flex-col w-[100%] md:w-[70%] h-auto lg:w-[50%] items-right ml-0 lg:ml-10">
        <div className="relative w-full h-[230px] rounded overflow-hidden">
          <img
            src="/heroImage.jpg"
            alt=""
            className={`absolute top-0 left-0 w-full h-full object-cover rounded-xl transform transition-all duration-300 ease-in-out ${
              currentIndex === 0
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          />
          <img
            src="/heroImage2.jpg"
            alt=""
            className={`absolute top-0 left-0 w-full h-full object-cover rounded-xl transform transition-all duration-300 ease-in-out ${
              currentIndex === 1
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          />
          <img
            src="/heroImage3.jpg"
            alt=""
            className={`absolute top-0 left-0 w-full h-full object-cover rounded-xl transform transition-all duration-300 ease-in-out ${
              currentIndex === 2
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          />
        </div>
        <div className="flex justify-between mt-0 sm:mt-10 lg:mt-0">
          <ul className="text-[12px] sm:text-sm text-left w-1/2">
            {descriptions[currentIndex]
              .slice(0, Math.ceil(descriptions[currentIndex].length / 2))
              .map((text, index) => (
                <li key={index} className="mt-5 font-light">
                  {text}
                </li>
              ))}
          </ul>
          <ul className="text-[12px] sm:text-sm text-left w-1/2">
            {descriptions[currentIndex]
              .slice(Math.ceil(descriptions[currentIndex].length / 2))
              .map((text, index) => (
                <li key={index} className="mt-5 font-light">
                  {text}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
