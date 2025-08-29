"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 const resourcesRef = useRef<HTMLLIElement | null>(null);
const mobileMenuRef = useRef<HTMLDivElement | null>(null);

const handleOutsideClick = (event: MouseEvent) => {
  if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
    setIsResourcesOpen(false);
  }
  if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
    setIsMobileMenuOpen(false);
  }
};


  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full flex items-center justify-between px-5 py-5 md:px-10 md:py-10 bg-transparent">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
        </Link>
      </div>

      <ul className="hidden lg:flex items-center space-x-8 text-white font-medium">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li className="relative" ref={resourcesRef}>
          <button
            onClick={() => setIsResourcesOpen(!isResourcesOpen)}
            className="flex items-center"
          >
            Resources <ChevronDown size={20} className="ml-1" />
          </button>
          {isResourcesOpen && (
            <ul className="absolute top-full left-0 mt-2 bg-white text-black rounded-md shadow-lg">
              <li>
                <Link href="/blog" className="block px-4 py-2">Blog</Link>
              </li>
              <li>
                <Link href="/faq" className="block px-4 py-2">FAQ</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>

      <div className="hidden lg:flex items-center">
        <div className="ml-4">
              <Link href="/contact" className="outline-none">
          <InteractiveHoverButton>{"Let's Talk"}</InteractiveHoverButton>
              </Link>
        </div>
      </div>

      <div className="lg:hidden flex items-center">
        <InteractiveHoverButton>{"Let's Talk"}</InteractiveHoverButton>
        <button onClick={() => setIsMobileMenuOpen(true)} className="ml-4">
          <Menu size={28} color="white" />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="lg:hidden fixed top-0 right-0 h-full w-1/3 bg-black bg-opacity-90 backdrop-blur-lg z-50 transform translate-x-0 transition-transform duration-300 ease-in-out"
        >
          <div className="flex justify-start p-6">
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X size={28} color="white" />
            </button>
          </div>
          <ul className="flex flex-col items-center space-y-6 text-white text-lg font-medium">
            <li>
              <Link href="/" onClick={handleLinkClick}>Home</Link>
            </li>
            <li>
              <Link href="/about" onClick={handleLinkClick}>About Us</Link>
            </li>
            <li>
              <Link href="/projects" onClick={handleLinkClick}>Projects</Link>
            </li>
            <li>
              <Link href="/services" onClick={handleLinkClick}>Services</Link>
            </li>
            <li>
              <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
            </li>
            <li>
              <Link href="/resources" onClick={handleLinkClick}>Resources</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}