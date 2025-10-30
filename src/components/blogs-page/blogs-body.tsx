// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { client } from "@/sanity/lib/client";
// import { latestSectionQuery } from "@/sanity/queries";
// import { LatestSection } from "@/types/blogs/latest/types";
// import DiscoverSection from "./discover-section";

// export default function LatestSectionComponent() {
//   const [sections, setSections] = useState<LatestSection[]>([]);

//   useEffect(() => {
//     async function fetchData() {
//       const data = await client.fetch(latestSectionQuery);
//       setSections(data);
//     }
//     fetchData();
//   }, []);

//   if (!sections.length) {
//     return (
//       <section className="bg-black text-white py-20 text-center">
//         <p className="text-gray-400">Loading latest updates...</p>
//       </section>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-black text-white overflow-x-hidden">
//       <style>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }

//         @keyframes pulse-glow {
//           0%, 100% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.5;
//           }
//         }

//         .animate-pulse-custom {
//           animation: pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//         }
//       `}</style>

//       {sections.map((section, index) => (
//         <section
//           key={index}
//           className="px-6 py-16 md:px-12 lg:px-20 scroll-smooth"
//         >
//           <div className="mb-10">
//             <h1 className="text-4xl md:text-5xl font-bold mb-3">
//               {section.title}
//               <span className="text-gray-500">
//                 {section.subtitle ? `, ${section.subtitle}` : ""}
//               </span>
//             </h1>
//             {section.subtitle && (
//               <p className="text-gray-500 text-sm md:text-base max-w-2xl">
//                 {section.subtitle}
//               </p>
//             )}
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {section.cards.map((card, i) => (
//               <Link
//                 key={card._key || i}
//                 href={`/pages/blogs/${card.slug.current}`}
//                 className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] block"
//               >
//                 <div className="relative h-64 bg-black overflow-hidden">
//                   {card.image ? (
//                     <Image
//                       src={card.image}
//                       alt={card.title}
//                       fill
//                       className="object-cover group-hover:scale-105 transition-transform duration-700"
//                     />
//                   ) : (
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <div className="absolute w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
//                       <div
//                         className="absolute w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"
//                         style={{ animationDelay: "1s" }}
//                       ></div>

//                       <div className="relative z-10 group-hover:scale-110 transition-transform duration-700">
//                         <svg
//                           width="180"
//                           height="180"
//                           viewBox="0 0 180 180"
//                           className="drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]"
//                         >
//                           <defs>
//                             <linearGradient
//                               id={`grad${i}`}
//                               x1="0%"
//                               y1="0%"
//                               x2="100%"
//                               y2="100%"
//                             >
//                               <stop
//                                 offset="0%"
//                                 style={{
//                                   stopColor: "#06b6d4",
//                                   stopOpacity: 1,
//                                 }}
//                               />
//                               <stop
//                                 offset="100%"
//                                 style={{
//                                   stopColor: "#10b981",
//                                   stopOpacity: 1,
//                                 }}
//                               />
//                             </linearGradient>
//                           </defs>
//                           <polygon
//                             points="90,30 150,70 150,130 90,170 30,130 30,70"
//                             fill="none"
//                             stroke={`url(#grad${i})`}
//                             strokeWidth="2"
//                             className="animate-pulse-custom"
//                           />
//                         </svg>
//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <div className="text-white font-bold text-3xl tracking-wider">
//                             NEXT<span className="text-2xl">.JS</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
//                   <p className="text-gray-400 text-sm mb-4 leading-relaxed">
//                     {card.description}
//                   </p>
//                   <div className="flex items-center justify-between">
//                     <button className="px-5 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300 hover:shadow-lg">
//                       {card.buttonText}
//                     </button>
//                     {card.date && (
//                       <span className="text-gray-500 text-xs md:text-sm">
//                         {new Date(card.date).toLocaleDateString("en-US", {
//                           year: "numeric",
//                           month: "long",
//                           day: "numeric",
//                         })}
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </section>
//       ))}

//       <DiscoverSection />
//     </div>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { latestSectionQuery } from "@/sanity/queries";
import { LatestSection } from "@/types/blogs/latest/types";
import DiscoverSection from "./discover-section";

export default function LatestSectionComponent() {
  const [sections, setSections] = useState<LatestSection[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setError(null);

        const data = await client.fetch(latestSectionQuery);
        console.log("Fetched sections:", data); // Debug log

        if (!data || data.length === 0) {
          setError("No sections found in Sanity");
        } else {
          setSections(data);
        }
      } catch (err) {
        console.error("Error fetching sections:", err);
        setError(err instanceof Error ? err.message : "Failed to fetch data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <section className="bg-black text-white py-20 text-center min-h-screen flex items-center justify-center">
        <div>
          <div className="inline-block w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-400">Loading latest updates...</p>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="bg-black text-white py-20 text-center min-h-screen flex items-center justify-center">
        <div className="max-w-md">
          <p className="text-red-400 mb-4">⚠️ Error loading content</p>
          <p className="text-gray-500 text-sm">{error}</p>
          <p className="text-gray-600 text-xs mt-4">
            Make sure you have published "Latest Section" documents in Sanity
            Studio
          </p>
        </div>
      </section>
    );
  }

  // Empty state
  if (!sections.length) {
    return (
      <section className="bg-black text-white py-20 text-center min-h-screen flex items-center justify-center">
        <div className="max-w-md">
          <p className="text-gray-400 mb-2">No content available</p>
          <p className="text-gray-600 text-sm">
            Please add and publish "Latest Section" content in Sanity Studio
          </p>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse-custom {
          animation: pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      {sections.map((section, index) => (
        <section
          key={index}
          className="px-6 py-16 md:px-12 lg:px-20 scroll-smooth"
        >
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              {section.title}
              {section.subtitle && (
                <span className="text-gray-500">, {section.subtitle}</span>
              )}
            </h1>
            {section.subtitle && (
              <p className="text-gray-500 text-sm md:text-base max-w-2xl">
                {section.subtitle}
              </p>
            )}
          </div>

          {!section.cards || section.cards.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400">
                No cards available in this section
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.cards.map((card, i) => (
                <Link
                  key={card._key || i}
                  href={`/blogs/latest/${card.slug.current}`}
                  className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] block"
                >
                  <div className="relative h-64 bg-black overflow-hidden">
                    {card.image ? (
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                        <div
                          className="absolute w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"
                          style={{ animationDelay: "1s" }}
                        ></div>

                        <div className="relative z-10 group-hover:scale-110 transition-transform duration-700">
                          <svg
                            width="180"
                            height="180"
                            viewBox="0 0 180 180"
                            className="drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]"
                          >
                            <defs>
                              <linearGradient
                                id={`grad${i}`}
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                              >
                                <stop
                                  offset="0%"
                                  style={{
                                    stopColor: "#06b6d4",
                                    stopOpacity: 1,
                                  }}
                                />
                                <stop
                                  offset="100%"
                                  style={{
                                    stopColor: "#10b981",
                                    stopOpacity: 1,
                                  }}
                                />
                              </linearGradient>
                            </defs>
                            <polygon
                              points="90,30 150,70 150,130 90,170 30,130 30,70"
                              fill="none"
                              stroke={`url(#grad${i})`}
                              strokeWidth="2"
                              className="animate-pulse-custom"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white font-bold text-3xl tracking-wider">
                              NEXT<span className="text-2xl">.JS</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {card.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <button className="px-5 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300 hover:shadow-lg">
                        {card.buttonText}
                      </button>
                      {card.date && (
                        <span className="text-gray-500 text-xs md:text-sm">
                          {new Date(card.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      ))}

      <DiscoverSection />
    </div>
  );
}