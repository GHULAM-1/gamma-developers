import React from 'react';
import teamMembers from '@/data/our-team-data';

export default function OurTeam() {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-between text-white items-center md:-mt-0 -mt-14">
        <h1 className="text-4xl md:text-xl md:mb-0 mb-10">Our Team</h1>
        <p className="font-semibold text-2xl md:leading-normal leading-relaxed">
          Each product is built by passionate hearts. <br /> It’s our team! Meet our leaders:
        </p>
      </div>

      <div className="mt-8 space-y-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-800 px-7 rounded-lg flex md:flex-row flex-col items-center justify-between hover:bg-[#d0ff71] text-white hover:text-black group py-2 md:py-0 gap-5 md:gap-0"
          >
            <div className="flex-shrink-0">
              <img
                src={member.img}
                alt={member.name}
                className="w-44 h-52 object-cover rounded-full lg:rounded-l-lg lg:rounded-r-none"
              />
            </div>
            <div className="flex-grow pl-6 text-center">
              <h2 className="text-base md:text-2xl font-bold">{member.name}</h2>
              <p className="text-base md:text-lg text-gray-400">{member.designation}</p>
            </div>
            <div className="flex space-x-3 ">
              {member.icons.map((Icon:any, idx:any) => (
                <div
                  key={idx}
                  className="border border-gray-500 p-[0.35rem] rounded-full group-hover:border-black mb-4 md:mb-0 "
                >
                  {Icon}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
