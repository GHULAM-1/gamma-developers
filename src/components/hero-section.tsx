"use client";
import React from "react";
import { HeroContent } from "@/types/hero-section-page/types";
import { Dot } from "lucide-react";

type HeroVariant =
  | "landing-page"
  | "projects"
  | "about-us"
  | "services"
  | "blogs"
  | "careers"
  | "contact";

interface HeroSectionProps {
  variant?: HeroVariant;
}

export default function HeroSection({
  variant = "landing-page",
}: HeroSectionProps) {
  const content: Record<HeroVariant, HeroContent> = {
    blogs: {
      bg: "/heroSection/blogs-page.png",
      overlay: "bg-black/55",
      titleDesktop: "Blogs",
      titleMobile: "Blogs",
      descriptionDesktop:
        "From concept to code, we deliver scalable and secure software solutions that solve your unique challenges.",
      descriptionMobile:
        "Delivering scalable and secure software solutions to solve your unique challenges.",
      buttonsDesktop: [
        { text: "Schedule Your Free Consultation", style: "primary" },
      ],
      buttonsMobile: [
        { text: "Schedule Your Free Consultation", style: "primary" },
      ],
      note: "Explore insights, updates, and innovations from our team.",
    },

    "landing-page": {
      bg: "/heroSection/green-horizon-bg.png",
      overlay: "",
      titleDesktop: (
        <>
          Building the Future of
          <br />
          Digital Experiences
        </>
      ),
      titleMobile: "Building the Future of Digital Experiences",
      descriptionDesktop:
        "We partner with visionary brands to architect, build, and scale world-class software solutions. From complex enterprise platforms to captivating mobile apps, we turn ambitious ideas into market-leading realities.",
      descriptionMobile:
        "We transform ideas into powerful apps, sleek designs, and intelligent software solutions.",
      buttonsDesktop: [
        { text: "Start a Project", style: "primary" },
        { text: "Explore Our Services", style: "secondary" },
      ],
      buttonsMobile: [
        { text: "Get in Touch", style: "primary" },
        { text: "View More", style: "secondary" },
      ],
    },

    projects: {
      bg: "/heroSection/green-horizon-bg.png",
      overlay: "bg-black/60",
      titleDesktop: "Projects",
      titleMobile: "Projects",
      descriptionDesktop:
        "You have the vision. We have the expert team to make it a reality. Let's talk about your project and how we can partner to create impact.",
      descriptionMobile:
        "Let's discuss your vision and goals to create impact.",
      buttonsDesktop: [
        { text: "Schedule Your Free Consultation", style: "primary" },
      ],
      buttonsMobile: [
        { text: "Schedule Your Free Consultation", style: "primary" },
      ],
      note: "No commitment, just a strategic conversation.",
    },

    "about-us": {
      bg: "/heroSection/green-horizon-bg.png",
      overlay: "bg-black/60",
      titleDesktop: "About Us",
      titleMobile: "About Us",
      descriptionDesktop:
        "You have the vision. We have the expert team to make it a reality.",
      descriptionMobile: "Let’s create something impactful together.",
      buttonsDesktop: [
        { text: "Schedule Your Free Consultation", style: "primary" },
      ],
      buttonsMobile: [
        { text: "Schedule Your Free Consultation", style: "primary" },
      ],
      note: "No commitment, just a strategic conversation.",
    },

    careers: {
      bg: "/heroSection/green-horizon-bg.png",
      overlay: "bg-black/55",
      titleDesktop: "Grow with Us",
      titleMobile: "Grow with Us",
      descriptionDesktop:
        "You have the vision. We have the expert team to make it a reality. Let's talk about your project, your goals, and how we can partner to create a product that delivers real impact.",
      descriptionMobile:
        "You have the vision. We have the expert team to make it a reality. Let's talk about your project, your goals, and how we can partner to create a product that delivers real impact.",
      buttonsDesktop: [
        { text: "Schedule Your Free Consultation", style: "primary" },
      ],
      buttonsMobile: [
        { text: "Schedule Your Free Consultation", style: "primary" },
      ],
      note: "No commitment, just a strategic conversation.",
    },
    services: {
      bg: "/heroSection/green-horizon-bg.png",
      overlay: "bg-black/60",
      titleDesktop: "Services",
      titleMobile: "Services",
      descriptionDesktop:
        "Let’s talk about your goals and how we can partner to create results that matter.",
      descriptionMobile: "We build products that create measurable results.",
      buttonsDesktop: [
        { text: "Schedule Your Free Consultation", style: "primary" },
      ],
      buttonsMobile: [
        { text: "Schedule Your Free Consultation", style: "primary" },
      ],
      note: "Explore what we can build together.",
    },
    contact: {
      bg: "/heroSection/green-horizon-bg.png",
      overlay: "bg-black/60",
      titleDesktop: "Contact Us",
      titleMobile: "Contact Us",
      descriptionDesktop:
        "Let's collaborate to bring your vision to life. Reach out to our team and start your digital transformation journey today.",
      descriptionMobile:
        "Reach out to our team and start your digital journey today.",
      buttonsDesktop: [{ text: "Get in Touch", style: "primary" }],
      buttonsMobile: [{ text: "Get in Touch", style: "primary" }],
    },
  };

  const data = content[variant];

  return (
    <section
      className={`relative w-full ${
        variant === "landing-page"
          ? "min-h-screen flex items-center justify-center bg-[#030804] overflow-hidden"
          : "pt-32 md:pt-40 lg:pt-48 pb-8 md:pb-12 px-4 md:px-6 lg:px-8 bg-black"
      }`}
    >
      {variant === "landing-page" ? (
        <>
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${data.bg}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#07100a]/50 to-[#030804]" />

          {/* Content */}
          <div className="relative z-10 w-full max-w-[1200px] mx-auto text-center px-6 sm:px-8 md:px-12 lg:px-16 py-24 sm:py-32 md:py-40">
            {/* Titles */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              {typeof data.titleDesktop === "string"
                ? data.titleDesktop
                : data.titleDesktop}
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
              {data.descriptionDesktop}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {data.buttonsDesktop.map((btn, idx) => (
                <button
                  key={idx}
                  className={`flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-medium transition-all duration-300 ${
                    btn.style === "primary"
                      ? "bg-[#D4FF3F] text-black hover:bg-lime-300 hover:scale-105"
                      : "border border-white/30 text-white hover:bg-white/10"
                  }`}
                >
                  <Dot
                    size={32}
                    className={`${btn.style === "primary" ? "text-black" : "text-white"}`}
                  />
                  {btn.text}
                </button>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* === Other Pages === */}
          <div className="relative w-full max-w-[1400px] mx-auto rounded-3xl md:rounded-[32px] lg:rounded-[40px] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${data.bg}')`,
                backgroundSize: "cover",
              }}
            />
            <div className={`absolute inset-0 ${data.overlay}`} />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-lime-400/20 rounded-full blur-[100px]" />

            <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 py-16 md:py-24 max-w-[700px]">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {typeof data.titleDesktop === "string"
                  ? data.titleDesktop
                  : data.titleMobile}
              </h1>
              <p className="text-white/90 text-base md:text-lg lg:text-xl mb-8 leading-relaxed">
                {data.descriptionDesktop}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                {data.buttonsDesktop.map((btn, idx) => (
                  <button
                    key={idx}
                    className={`px-8 py-4 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                      btn.style === "primary"
                        ? "bg-[#D4FF3F] text-black hover:bg-lime-300 hover:scale-105"
                        : "border border-white/30 text-white hover:bg-white/10"
                    }`}
                  >
                    {btn.text}
                  </button>
                ))}
              </div>
              {data.note && (
                <p className="text-white/70 text-sm mt-4">{data.note}</p>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
