"use client";
import React from "react";
import { ShimmerButtonDemo } from "./shimmer-button";
import Logo from "./logo";
import Button from "./navbar-navigation";

export default function NavBar() {
  return (
    <>
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-6">   
          <Logo/>
            <Button/>
        </div>

          <ShimmerButtonDemo/>
        
      </nav>
    </>
  );
}
