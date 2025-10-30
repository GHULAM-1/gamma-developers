"use client";

import React, { useState, useEffect } from "react"; 
import { Card, CardContent } from "@/components/ui/card";

import { client } from "@/sanity/lib/client";
import { valuesQuery } from "@/sanity/queries";

import { ValueItem } from "@/types/values/type";

export default function OurValues() {
  const [values, setValues] = useState<ValueItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await client.fetch(valuesQuery);
      setValues(data);
    }
    fetchData();
  }, []);

  if (!values.length) {
    return (
      <section className="bg-black text-white py-20 text-center">
        <p className="text-gray-400">Loading core values...</p>
      </section>
    );
  }

  return (
    <section className="relative w-full bg-black text-white flex flex-col items-center justify-center py-28 px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">Our Values</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          The beliefs that shape our work and our commitment to your success.
        </p>
      </div>

      <div className="relative w-full max-w-[1300px] flex justify-center">
        <div className="absolute inset-0 bg-[#111111] rounded-[2rem] border border-[#1f1f1f]" />

        <div className="relative z-10 flex flex-col md:flex-row items-stretch justify-center gap-8 w-full p-8">
          {values.map((value, i) => (
            <Card
              key={i}
              className="relative flex-1 border-none bg-[#1a1a1a] rounded-[1.5rem] overflow-hidden shadow-[0_0_60px_rgba(173,255,47,0.05)]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#111111] to-[#1a1a1a] rounded-[1.5rem]" />
              <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-lime-400/30 via-lime-400/10 to-transparent blur-[45px] rounded-b-[1.5rem]" />

              <CardContent className="relative z-10 p-8">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  {value.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
