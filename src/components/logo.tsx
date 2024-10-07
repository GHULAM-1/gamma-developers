import React from "react";

export default function Logo() {
  return (
    <div>
      <a href="/">
      <div className="md:flex hidden flex-col justify-center items-center  tracking-[3px] px-0 py-2 -ml-[10px] md:p-2 md:ml-0">
        <div className="text-3xl text-white font-bold">GAMMA</div>
        <div className="text-[8px] ml-[10px] tracking-[9px] font-semibold text-white">
          DEVELOPERS
        </div>
      </div>
      <div className="flex md:hidden">
        <div>
          <span className="text-primary text-[28px] font-black">G</span>
          <span className="text-white font-black text-[28px]">
            D<span className="text-[10px]">s</span>
          </span>
        </div>
      </div>
    </a>
    </div>
  );
}
