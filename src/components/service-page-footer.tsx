"use client";
import React, { useState } from "react";
import { Instagram, Linkedin, Twitter } from "lucide-react";

interface FooterProps {
  companyName?: string;
  address?: string;
  email?: string;
  backgroundImage?: string;
  socialLinks?: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    dribbble?: string;
  };
  onNewsletterSubmit?: (email: string) => void;
}

const ExactFooter: React.FC<FooterProps> = ({
  companyName = "GD.",
  address = "152 Thatcher Road St,\nMahattan, NY 10463, US",
  email = "@gammadevelopers.com",
  backgroundImage,
  socialLinks = {
    instagram: "#",
    linkedin: "#",
    twitter: "#",
    dribbble: "#",
  },
  onNewsletterSubmit,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onNewsletterSubmit) {
      onNewsletterSubmit(newsletterEmail);
    }
    setNewsletterEmail("");
  };

  return (
    <footer className="bg-black text-white font-sans">
      {/* Top CTA Section with Background Image */}
      <div className="relative overflow-hidden">
        <div
          className="absolute left-1/2 transform -translate-x-1/2 h-[500px] w-[calc(100%+2rem)] bg-center bg-cover bg-no-repeat rounded-3xl overflow-hidden"
          style={{
            backgroundImage: `url(${backgroundImage || "/heroSection/green-horizon-bg.png"})`,
            zIndex: 0,
          }}
        />

  
        <div className="absolute inset-0 bg-black/10 z-10"></div>

        {/* CTA Content */}
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 z-20 text-white">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Ready to build something exceptional?
            </h2>
            <p className="text-base sm:text-lg text-gray-200 mb-6 sm:mb-8 leading-relaxed">
              Let's discuss how our expertise can transform your idea into a
              powerful digital solution. Schedule a free, no-obligation
              consultation with our strategy team today.
            </p>
            <button className="inline-flex items-center bg-[#d4ff00] hover:bg-green-300 text-black font-semibold py-3 sm:py-3.5 px-6 sm:px-8 rounded-full transition duration-300 ease-in-out text-sm sm:text-base shadow-lg">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <circle cx="10" cy="10" r="8" fill="currentColor" />
                <path
                  d="M10 6v4m0 0v4m0-4h4m-4 0H6"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Schedule Your Free Consultation
            </button>
            <p className="text-sm text-gray-300 mt-4 sm:mt-6">
              No commitment, just a strategic conversation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ExactFooter;
