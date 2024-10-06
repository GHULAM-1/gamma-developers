"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";

export default function NavBar() {
  const pathname = usePathname();

  const tabs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  return (
    <div className=" w-full  flex justify-center items-center fixed top-0  left-0 right-0 z-50 backdrop-blur-md bg-opacity-70 bg-black px-3">
      <div className="w-full max-w-[1340px] mx-auto flex text-white justify-between items-center py-2">
        <div className="flex gap-2">
          <a href="/">
          <div className="mt-3">
            <Logo />
          </div>
          </a>
          <div className="flex gap-2 text-sm rounded-lg justify-center items-center">
            <div className="border-[0.5px] border-[#FFFFFF5A] flex justify-center items-center rounded-3xl text-sm px-1">
              {tabs.map((tab) => (
                <a
                  href={tab.path}
                  key={tab.name}
                  className={`px-5 py-[5px] my-[2.5px] rounded-3xl cursor-pointer transition-all ease-linear ${
                    pathname === tab.path ? "bg-[#FFFFFF2A]" : ""
                  }`}
                >
                  {tab.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div>
          <a href="/contact">
          <div className="flex justify-center items-center rounded-3xl bg-white text-black px-5 py-[7px] text-sm gap-2 cursor-pointer">
            <span>Start Project</span>
            <MoveUpRight className="w-[18px] h-[18px]" />
          </div>
          </a>
        </div>
      </div>
    </div>
  );
}
