"use client";

import React, { useEffect, useState } from "react";
import { MapPin, Clock } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { positionsQuery } from "@/sanity/queries";
import { Position } from "@/types/careers/open-positions";

export default function OpenPositions() {
  const [positions, setPositions] = useState<Position[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPositions() {
      try {
        const data = await client.fetch(positionsQuery);
        setPositions(data);
      } catch (error) {
        console.error("Error fetching positions:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPositions();
  }, []);

  if (loading) {
    return (
      <section className="bg-black text-white px-6 py-20 flex justify-center">
        <p className="text-gray-400">Loading positions...</p>
      </section>
    );
  }

  return (
    <section className="bg-black text-white px-6 py-20">
      <div className="max-w-8xl mx-auto">
        {/* Section Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Open Positions
        </h1>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto leading-relaxed">
          Join our team of passionate creators, strategists, and engineers.
          We're looking for talented individuals who want to build exceptional
          digital products that make a difference.
        </p>

        {/* Job Cards */}
        <div className="space-y-6 w-full mx-auto px-8">
          {positions.map((position) => (
            <div
              key={position._id}
              className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#1E1E1E] shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Header Row */}
              <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                <h2 className="text-xl md:text-2xl font-semibold">
                  {position.title}
                </h2>
                {position.department && (
                  <span className="bg-[#2B3525] text-[#C5FF59] text-xs font-medium px-3 py-1 rounded-full">
                    {position.department}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                {position.description}
              </p>

              {/* Job Details */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <MapPin size={16} />
                  <span>{position.location || "Remote"}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Clock size={16} />
                  <span>Full-Time</span>
                </div>
              </div>

              {/* Button */}
              <button className="bg-[#C5FF59] text-black font-medium px-6 py-2.5 rounded-full text-sm hover:bg-[#b6f240] transition-colors">
                • Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
