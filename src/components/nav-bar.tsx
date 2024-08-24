"use client";
import React, { useState, useEffect } from "react";
import { Equal, X } from "lucide-react";
import { ShimmerButtonDemo } from "./shimmer-button";
import { FadeText } from "./magicui/fade-text";
import Logo from "./logo";
import Button from "./navbar-navigation";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isNavOpen]);

  const handleNavigation = (url: any) => {
    setIsNavOpen(false);
    router.push(url);
  };

  const navLinksClassName = "text-[65px] text-white font-black";

  return (
    <>
      <nav className="hidden lg:flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Logo />
          <Button />
        </div>
        <ShimmerButtonDemo />
      </nav>
      <div className="flex text-white w-full items-center justify-between h-[12vh] lg:hidden">
        <div
          className="img cursor-pointer"
          onClick={() => handleNavigation("/")}
        >
          <Logo/>
        </div>
        <div className="flex gap-8">
          <div
            className="cursor-pointer"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            Menu
          </div>
          <Equal
            className={`${!isNavOpen ? "flex" : "hidden"} cursor-pointer`}
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
          <X
            className={`${isNavOpen ? "flex" : "hidden"} cursor-pointer`}
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
        </div>
      </div>

      <div
        className={`${
          isNavOpen ? "flex" : "hidden"
        } md:hidden h-[88vh] mb-4 w-full items-center gap-5 flex-col`}
      >
        <div onClick={() => handleNavigation("/")} className="cursor-pointer">
          <FadeText
            className={`${navLinksClassName}`}
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.2 } },
            }}
            text="Home"
          />
        </div>
        <div
          onClick={() => handleNavigation("/portfolio")}
          className={`${navLinksClassName} cursor-pointer`}
        >
          Portolio
        </div>
        <div
          onClick={() => handleNavigation("/allService")}
          className={`${navLinksClassName} cursor-pointer`}
        >
          Services
        </div>
        <div
          onClick={() => handleNavigation("/services")}
          className={`${navLinksClassName} cursor-pointer`}
        >
          About
        </div>
        <div
          onClick={() => handleNavigation("/portfolio")}
          className={`${navLinksClassName} cursor-pointer`}
        >
          Blogs
        </div>
      </div>
    </>
  );
}
