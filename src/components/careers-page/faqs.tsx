"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  Instagram,
  Linkedin,
  Dribbble,
} from "lucide-react";
import { client } from "@/sanity/lib/client";
import { faqsQuery } from "@/sanity/queries";
import { FAQ } from "@/types/faqs/faqs-types";

export default function FAQs() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchFaqs() {
      try {
        const data = await client.fetch(faqsQuery);
        setFaqs(data);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFaqs();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) {
    return (
      <section className="bg-black text-white px-6 py-20 flex justify-center">
        <p className="text-gray-400">Loading FAQs...</p>
      </section>
    );
  }

  return (
    <section className="bg-black text-white px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        <div className="flex flex-col justify-start">
          <h2 className="text-4xl font-bold mb-4">FAQs</h2>
          <p className="text-gray-400 text-base mb-8 leading-relaxed max-w-sm">
            Everything you need to know about joining our team. If you have a
            question that isn’t answered here, feel free to reach out.
          </p>
          <button
            style={{ backgroundColor: "rgba(208, 255, 113, 1)" }}
            className="flex items-center justify-center gap-2 text-black w-40 py-2 rounded-full font-medium text-sm hover:bg-lime-500 transition"
          >
            ● Connect with Us
          </button>

          <div className="mt-10">
            <p className="text-sm text-gray-400 mb-4">Follow Us :</p>
            <div className="flex gap-5">
              <a href="#" className="hover:text-lime-400 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-lime-400 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-lime-400 transition">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="hover:text-lime-400 transition">
                <Dribbble size={20} />
              </a>
            </div>
          </div>
        </div>


        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={faq._id || index}
              className="border-b border-zinc-800 pb-6 last:border-none"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between w-full text-left items-start group"
              >
                <span className="font-medium text-base leading-snug group-hover:text-lime-400 transition">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp size={20} className="flex-shrink-0 mt-1" />
                ) : (
                  <ChevronDown size={20} className="flex-shrink-0 mt-1" />
                )}
              </button>

              {openIndex === index && (
                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
