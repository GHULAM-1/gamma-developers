import React from "react";
import { ShimmerButtonDemo } from "./shimmer-button";
import Logo from "./logo";

export default function NavBar() {
  return (
    <>
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-6">   
          <Logo/>
          <div>
            <ul className="flex text-white gap-7 border-[1px] px-5 py-2 rounded-full text-sm border-slate-600">
              <li  className="hover:bg-[#D0FF71] hover:text-black px-4 py-1 cursor-pointer rounded-full" >Homec</li>
              <li className="hover:bg-[#D0FF71] hover:text-black px-4 py-1 cursor-pointer rounded-full" >Portfolio</li>
              <li className="hover:bg-[#D0FF71] hover:text-black px-4 py-1 cursor-pointer rounded-full" >Blog</li>
              <li className="hover:bg-[#D0FF71] hover:text-black px-4 py-1 cursor-pointer rounded-full" >About us</li>
            </ul>
          </div>
        </div>

          <ShimmerButtonDemo/>
        
      </nav>
    </>
  );
}
