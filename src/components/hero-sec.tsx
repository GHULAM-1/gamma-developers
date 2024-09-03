"use client";
import React, { useState } from "react";

export default function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const handleMouseEnter = (index: any) => {
    setHoveredIndex(index);
  };

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

  return (
    <div className="max-w-[1365px] text-white w-full h-screen gap-5 justify-center flex flex-row tracking-tighter items-center">
      <div className="flex flex-col leading-[1.25] mr-10">
        <p
          className={`text-[100px] ${
            hoveredIndex === 0 ? "text-white" : "text-gray-400"
          }`}
          onMouseEnter={() => handleMouseEnter(0)}
        >
          Design
        </p>
        <p
          className={`text-[100px] ${
            hoveredIndex === 1 ? "text-white" : "text-gray-400"
          }`}
          onMouseEnter={() => handleMouseEnter(1)}
        >
          Deployment
        </p>
        <p
          className={`text-[100px] ${
            hoveredIndex === 2 ? "text-white" : "text-gray-400"
          }`}
          onMouseEnter={() => handleMouseEnter(2)}
        >
          Growth
        </p>
      </div>
      <div className="flex flex-col w-[40%] items-right ml-10">
        <div className="relative w-full h-[230px] rounded">
          <img
            src="/heroImage.jpg"
            alt=""
            className={`absolute top-0 left-0 w-full object-contain rounded-xl  transform transition-all duration-300 ease-in-out ${
              hoveredIndex === 0
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          />
          <img
            src="/heroImage2.jpg"
            alt=""
            className={`absolute top-0 left-0 w-full object-contain rounded-xl transform transition-all duration-300 ease-in-out ${
              hoveredIndex === 1
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          />
          <img
            src="/heroImage3.jpg"
            alt=""
            className={`absolute top-0 left-0 w-full object-contain rounded-xl transform transition-all duration-300 ease-in-out ${
              hoveredIndex === 2
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          />
        </div>
        <div className="flex justify-between">
          <ul className="text-sm text-left w-1/2">
            {descriptions[hoveredIndex]
              .slice(0, Math.ceil(descriptions[hoveredIndex].length / 2))
              .map((text, index) => (
                <li key={index} className="mt-5 font-light">
                  {text}
                </li>
              ))}
          </ul>
          <ul className="text-sm text-left w-1/2">
            {descriptions[hoveredIndex]
              .slice(Math.ceil(descriptions[hoveredIndex].length / 2))
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
