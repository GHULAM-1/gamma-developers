import React from 'react';
import { ourTeamTypes } from '@/types/all-types';
import teamMembers from '@/data/our-team-data';

export default function OurTeam() {
  return (
    <>
      <div className="flex justify-between text-white items-center">
        <h1 className="text-xl">Our Team</h1>
        <p className="font-semibold text-2xl">
          Each product is built by passionate hearts. <br /> It’s our team! Meet our leaders:
        </p>
      </div>

      <div className="mt-8 space-y-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-800 px-7 rounded-lg flex items-center justify-between hover:bg-[#d0ff71] text-white hover:text-black group"
          >
            <div className="flex-shrink-0">
              <img
                src={member.img}
                alt={member.name}
                className="w-44 h-52 object-cover rounded-full lg:rounded-l-lg lg:rounded-r-none"
              />
            </div>
            <div className="flex-grow pl-6 text-center">
              <h2 className="text-2xl font-bold">{member.name}</h2>
              <p className="text-lg text-gray-400">{member.designation}</p>
            </div>
            <div className="flex space-x-3">
              {member.icons.map((Icon, idx) => (
                <div
                  key={idx}
                  className="border border-gray-500 p-[0.35rem] rounded-full group-hover:border-black"
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
