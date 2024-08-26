import React from "react";
export default function Hero() {
  return (
    <>
      <div className="max-w-[1365px] text-white leading-[165px] w-full h-screen justify-center   flex flex-col  tracking-tighter">
        <div className="flex  items-center gap-[100px]">
          <div className=" font-bold text-[9.0vw]">SHAPING</div>
          <div className="flex flex-col justify-center items-start text-[22px] pt-10 leading-normal">
            <span>Create a Professional</span>
            <span>Website Today!</span>
          </div>
        </div>
        <div className="text-[9.0vw]">TOMORROW,TODAY</div>
        <div className="w-full flex justify-end leading-normal">
          <span className="text-[#FFFFFF8A]">POWERFUL HTML Template</span>
        </div>
      </div>
    </>
  );
}
