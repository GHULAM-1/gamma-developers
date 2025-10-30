"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { Dot } from "lucide-react";

export default function Navbar() {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <header className="w-full bg-transparent absolute top-0 left-0 z-50">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6 py-6 text-white">
        <div className="text-2xl font-bold">
          <span className="text-lime-400">G</span>
          <span className="text-white">D.</span>
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
          <NavLink href="/" label="Home" />
          <NavLink href="/about-us" label="About Us" />
          <NavLink href="/projects" label="Projects" />
          <NavLink href="/services" label="Services" />
          <NavLink href="/contact-us" label="Contact" />

          <DropdownMenu
            open={isResourcesOpen}
            onOpenChange={setIsResourcesOpen}
          >
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 hover:text-lime-400 transition">
                Resources
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isResourcesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-48 bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden"
            >
              <DropdownMenuItem asChild>
                <a
                  href="/blogs"
                  className="block px-6 py-3 text-white hover:bg-gray-800 transition"
                >
                  Blogs
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="/careers"
                  className="block px-6 py-3 text-white hover:bg-gray-800 transition"
                >
                  Careers
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <Button className="group flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-all duration-300 hover:bg-black">
          <Dot
            size={12}
            strokeWidth={10}
            className="text-black transition-all duration-300 group-hover:text-white align-middle"
          />
          <span className="transition-all duration-300 group-hover:text-white leading-none">
            Let's Talk
          </span>
        </Button>

        <div className="flex md:hidden items-center gap-3">
          <Button className="group flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-all duration-300 hover:bg-black">
            <Dot
              size={12}
              strokeWidth={10}
              className="text-black transition-all duration-300 group-hover:text-white align-middle"
            />
            <span className="transition-all duration-300 group-hover:text-white leading-none">
              Let's Talk
            </span>
          </Button>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}



function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="hover:text-lime-400 transition">
      {label}
    </a>
  );
}


function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="text-white p-0">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="bg-gray-900 border-l border-gray-800 text-white"
      >
        <SheetHeader>
          <SheetTitle className="text-lime-400 text-2xl font-bold mb-6">
            Menu
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-4 text-sm font-medium">
          <NavLink href="/" label="Home" />
          <NavLink href="/about-us" label="About Us" />
          <NavLink href="/projects" label="Projects" />
          <NavLink href="/services" label="Services" />
          <NavLink href="/contact-us" label="Contact" />

    
          <div className="flex flex-col">
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="flex justify-between items-center hover:text-lime-400 transition"
            >
              <span>Resources</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  resourcesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {resourcesOpen && (
              <div className="flex flex-col pl-4 mt-2 border-l border-gray-700">
                <a
                  href="/blogs"
                  className="text-white py-2 hover:text-lime-400 transition"
                >
                  Blogs
                </a>
                <a
                  href="/careers"
                  className="text-white py-2 hover:text-lime-400 transition"
                >
                  Careers
                </a>
              </div>
            )}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
