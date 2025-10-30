// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { client } from "@/sanity/lib/client";
// import { discoverCardsQuery } from "@/sanity/queries";
// import { DiscoverCard } from '@/types/blogs/discover/types'
// import Link from "next/link";



// export default function DiscoverSection() {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);
//   const [cards, setCards] = useState<DiscoverCard[]>([]);
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);
//   const [activeIndex, setActiveIndex] = useState(0);

//   // 🧠 Fetch from Sanity
//   useEffect(() => {
//     async function fetchData() {
//       const data = await client.fetch(discoverCardsQuery);
//       setCards(data);
//     }
//     fetchData();
//   }, []);

//   const checkScroll = () => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       const scrollLeft = container.scrollLeft;
//       const width = container.clientWidth;
//       const totalWidth = container.scrollWidth;
//       setCanScrollLeft(scrollLeft > 0);
//       setCanScrollRight(scrollLeft < totalWidth - width - 10);
//       const index = Math.round(scrollLeft / (width * 0.6));
//       setActiveIndex(index);
//     }
//   };

//   const scroll = (direction: "left" | "right") => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       const scrollAmount = container.clientWidth * 0.6;
//       container.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       });
//       setTimeout(checkScroll, 300);
//     }
//   };

//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (!container) return;
//     container.addEventListener("scroll", checkScroll);
//     return () => container.removeEventListener("scroll", checkScroll);
//   }, []);

//   return (
//     <div className="relative">
//       <section className="px-6 py-16 md:px-12 lg:px-20 overflow-hidden relative">
//         {/* Heading */}
//         <div className="mb-8">
//           <h2 className="text-4xl md:text-5xl font-bold mb-3">Discover</h2>
//           <p className="text-gray-400 text-sm md:text-base max-w-2xl">
//             The Drewl Hall of Fame: Featuring brands from around the world and
//             projects of all shapes and sizes.
//           </p>
//         </div>

//         {/* Scroll Cards */}
//         <div className="relative">
//           <div
//             ref={scrollContainerRef}
//             onScroll={checkScroll}
//             className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
//           >
//             {cards.map((card, index) => (
//               <Link
//                 key={card._id || index}
//                 href={`/blogs/discover/${card.slug}`}
//                 className="group flex-shrink-0 w-[45%] min-w-[45%] bg-zinc-900/50 rounded-3xl overflow-hidden border border-zinc-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] snap-start flex flex-col p-6"
//               >
//                 {/* Image */}
//                 <div className="relative h-64 bg-black rounded-2xl overflow-hidden mb-10">
//                   {card.image ? (
//                     <Image
//                       src={card.image}
//                       alt={card.title}
//                       fill
//                       className="object-cover group-hover:scale-105 transition-transform duration-700"
//                     />
//                   ) : (
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <div className="absolute w-140 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
//                       <div
//                         className="absolute w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"
//                         style={{ animationDelay: "1s" }}
//                       ></div>
//                     </div>
//                   )}
//                 </div>

//                 {/* Content */}
//                 <div className="flex-1 flex flex-col">
//                   <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
//                   <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-1">
//                     {card.subtitle}
//                   </p>
//                   <div className="flex items-center justify-between">
//                     <span className="px-6 py-2.5 bg-white text-black rounded-full text-sm font-medium flex items-center gap-2">
//                       <span className="w-2 h-2 bg-black rounded-full"></span>
//                       {card.buttonText}
//                     </span>
//                     <span className="text-gray-500 text-xs">
//                       {new Date(card.date).toLocaleDateString("en-US", {
//                         year: "numeric",
//                         month: "long",
//                         day: "numeric",
//                       })}
//                     </span>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           {/* Dots Indicator */}
//           <div className="absolute left-0 bottom-4 flex items-center gap-3 pl-4">
//             {cards.map((_, index) => (
//               <div
//                 key={index}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   activeIndex === index ? "bg-white scale-110" : "bg-gray-600"
//                 }`}
//               ></div>
//             ))}
//           </div>

//           {/* Arrows */}
//           <div className="flex justify-end items-center mt-6 gap-3">
//             <button
//               onClick={() => scroll("left")}
//               disabled={!canScrollLeft}
//               className={`w-10 h-10 rounded-full border ${
//                 canScrollLeft
//                   ? "border-white bg-white/10 hover:bg-white/20"
//                   : "border-zinc-800 bg-zinc-900 opacity-50 cursor-not-allowed"
//               } flex items-center justify-center transition-all duration-300`}
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//             <button
//               onClick={() => scroll("right")}
//               disabled={!canScrollRight}
//               className={`w-10 h-10 rounded-full border ${
//                 canScrollRight
//                   ? "border-white bg-white/10 hover:bg-white/20"
//                   : "border-zinc-800 bg-zinc-900 opacity-50 cursor-not-allowed"
//               } flex items-center justify-center transition-all duration-300`}
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { discoverCardsQuery } from "@/sanity/queries";
import { DiscoverCard } from "@/types/blogs/discover/types";
import Link from "next/link";

export default function DiscoverSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [cards, setCards] = useState<DiscoverCard[]>([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // 🧠 Fetch from Sanity
  useEffect(() => {
    async function fetchData() {
      try {
        const data: DiscoverCard[] = await client.fetch(discoverCardsQuery);
         console.log("Fetched cards:", data);
        setCards(data);
      } catch (err) {
        console.error("Error fetching discover cards:", err);
      }
    }
    fetchData();
  }, []);

  // 🔁 Scroll Check
  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollLeft = container.scrollLeft;
      const width = container.clientWidth;
      const totalWidth = container.scrollWidth;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < totalWidth - width - 10);

      // Update active index for indicator dots
      const index = Math.round(scrollLeft / (width * 0.6));
      setActiveIndex(index);
    }
  };

  // ⏩ Scroll Buttons
  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.6;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  // 🧭 Add Scroll Event Listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.addEventListener("scroll", checkScroll);
    return () => container.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div className="relative">
      <section className="px-6 py-16 md:px-12 lg:px-20 overflow-hidden relative">
        {/* 🏷 Heading */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Discover</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl">
            The Drewl Hall of Fame: Featuring brands from around the world and
            projects of all shapes and sizes.
          </p>
        </div>

        {/* 💳 Scrollable Cards */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          >
            {cards.length === 0 ? (
              <p className="text-gray-500 text-sm">Loading cards...</p>
            ) : (
              cards?.filter(Boolean).map((card, index) => (
                <Link
                  key={card._id || index}
                  href={`/blogs/discover/${card.slug}`}
                  className="group flex-shrink-0 w-[45%] min-w-[45%] bg-zinc-900/50 rounded-3xl overflow-hidden border border-zinc-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] snap-start flex flex-col p-6"
                >
                  {/* 🖼 Image */}
                  <div className="relative h-64 bg-black rounded-2xl overflow-hidden mb-10">
                    {card.image ? (
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                        <div
                          className="absolute w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"
                          style={{ animationDelay: "1s" }}
                        ></div>
                      </div>
                    )}
                  </div>

                  {/* 📝 Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-3">
                      {card.title || "Untitled"}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-1">
                      {card.subtitle || "No description available."}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="px-6 py-2.5 bg-white text-black rounded-full text-sm font-medium flex items-center gap-2">
                        <span className="w-2 h-2 bg-black rounded-full"></span>
                        {card.buttonText || "View More"}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {card.date
                          ? new Date(card.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })
                          : "No date"}
                      </span>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

          {/* ⚫ Dots Indicator */}
          <div className="absolute left-0 bottom-4 flex items-center gap-3 pl-4">
            {cards.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-white scale-110" : "bg-gray-600"
                }`}
              ></div>
            ))}
          </div>

          {/* ⬅️➡️ Arrows */}
          <div className="flex justify-end items-center mt-6 gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full border ${
                canScrollLeft
                  ? "border-white bg-white/10 hover:bg-white/20"
                  : "border-zinc-800 bg-zinc-900 opacity-50 cursor-not-allowed"
              } flex items-center justify-center transition-all duration-300`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full border ${
                canScrollRight
                  ? "border-white bg-white/10 hover:bg-white/20"
                  : "border-zinc-800 bg-zinc-900 opacity-50 cursor-not-allowed"
              } flex items-center justify-center transition-all duration-300`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
