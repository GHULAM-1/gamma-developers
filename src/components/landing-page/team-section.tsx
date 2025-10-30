// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { FaLinkedin, FaTwitter } from "react-icons/fa";
// import { SiUpwork } from "react-icons/si";
// import { client } from "@/sanity/lib/client";
// import { teamQuery } from "@/sanity/queries";
// import { TeamMember } from "@/types/landing-page/team-section-types";

// export default function TeamSection() {
//   const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const carouselRef = useRef<HTMLDivElement>(null);

//   const cardWidth = 350;
//   const cardGap = 16;
//   const visibleCards = 3;
//   const maxIndex = Math.max(0, teamMembers.length - visibleCards);

//   const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
//   const handleNext = () =>
//     setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

//   // Fetch data
//   useEffect(() => {
//     const fetchTeam = async () => {
//       try {
//         const data = await client.fetch(teamQuery);
//         setTeamMembers(data);
//       } catch (error) {
//         console.error("Error fetching team data:", error);
//       }
//     };
//     fetchTeam();
//   }, []);

//   // Handle scroll sync
//   const handleScroll = () => {
//     if (!carouselRef.current) return;
//     const scrollLeft = carouselRef.current.scrollLeft;
//     const newIndex = Math.round(scrollLeft / (cardWidth + cardGap));
//     setCurrentIndex(newIndex);
//   };

//   useEffect(() => {
//     const carousel = carouselRef.current;
//     if (carousel) {
//       carousel.addEventListener("scroll", handleScroll, { passive: true });
//       return () => carousel.removeEventListener("scroll", handleScroll);
//     }
//   }, []);

//   return (
//     <div className="min-h-screen bg-black text-white px-6 py-16 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-12 text-center md:text-left">
//           <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
//             The Minds Behind
//             <br />
//             the Mission
//           </h1>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto md:mx-0">
//             We are a collective of designers, creators, and engineers united by
//             a passion for building brands that matter.
//           </p>
//         </div>

//         {/* Team Carousel */}
//         <div className="relative mb-12">
//           <div
//             ref={carouselRef}
//             className="flex overflow-x-scroll scrollbar-hide scroll-smooth gap-4"
//             style={{
//               scrollSnapType: "x mandatory",
//               WebkitOverflowScrolling: "touch",
//             }}
//           >
//             {teamMembers.map((member) => (
//               <div
//                 key={member._id}
//                 className="flex-shrink-0 scroll-snap-center"
//                 style={{ width: `${cardWidth}px`, height: "558px" }}
//               >
//                 <div className="bg-gray-900 rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300">
//                   {/* Image */}
//                   <div className="relative w-full h-[350px] overflow-hidden">
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
//                   </div>

//                   {/* Info */}
//                   <div className="p-6 flex flex-col justify-between h-[208px] bg-black">
//                     <div>
//                       <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
//                       <p className="text-white font-medium mb-2">
//                         {member.role}
//                       </p>
//                       <p className="text-gray-400 text-sm">
//                         {member.description}
//                       </p>
//                     </div>

//                     {/* Socials */}
//                     <div className="flex gap-3 mt-4">
//                       {member.social?.linkedin && (
//                         <a
//                           href={member.social.linkedin}
//                           className="text-lime-400 hover:text-lime-300 transition-colors"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <FaLinkedin className="w-5 h-5" />
//                         </a>
//                       )}
//                       {member.social?.upwork && (
//                         <a
//                           href={member.social.upwork}
//                           className="text-lime-400 hover:text-lime-300 transition-colors"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <SiUpwork className="w-5 h-5" />
//                         </a>
//                       )}
//                       {member.social?.twitter && (
//                         <a
//                           href={member.social.twitter}
//                           className="text-lime-400 hover:text-lime-300 transition-colors"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <FaTwitter className="w-5 h-5" />
//                         </a>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Dots indicator */}
//           <div className="absolute bottom-0 left-0 flex gap-2 mt-4 px-4 py-2">
//             {Array.from({ length: Math.ceil(teamMembers.length) }).map(
//               (_, i) => (
//                 <div
//                   key={i}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     i === currentIndex ? "bg-lime-400" : "bg-zinc-700"
//                   }`}
//                 />
//               )
//             )}
//           </div>

//           {/* Navigation Buttons */}
//           <div className="flex gap-4 justify-end mt-6">
//             <button
//               onClick={handlePrev}
//               disabled={currentIndex === 0}
//               className="bg-zinc-900 hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M15 19l-7-7 7-7"
//                 />
//               </svg>
//             </button>
//             <button
//               onClick={handleNext}
//               disabled={currentIndex >= maxIndex}
//               className="bg-zinc-900 hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { client } from "@/sanity/lib/client";
import { teamQuery } from "@/sanity/queries";
import { TeamMember } from "@/types/landing-page/team-section-types";

export default function TeamSection() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const cardWidth = 350;
  const cardGap = 16;
  const visibleCards = 3;

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const data = await client.fetch(teamQuery);
        setTeamMembers(data);
      } catch (error) {
        console.error("Error fetching team data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const newIndex = Math.round(scrollLeft / (cardWidth + cardGap));
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll, { passive: true });
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            The Minds Behind
            <br />
            the Mission
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto md:mx-0">
            We are a collective of designers, creators, and engineers united by
            a passion for building brands that matter.
          </p>
        </div>

        {/* Team Carousel */}
        <div className="relative mb-12">
          <div
            ref={carouselRef}
            className="flex overflow-x-scroll scrollbar-hide scroll-smooth gap-4"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {loading
              ? // 🟩 Skeleton layout (same structure)
                Array(6)
                  .fill(null)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 scroll-snap-center"
                      style={{ width: `${cardWidth}px`, height: "558px" }}
                    >
                      <div className="bg-zinc-900 rounded-3xl overflow-hidden animate-pulse">
                        {/* Image Placeholder */}
                        <div className="relative w-full h-[350px] bg-zinc-800" />

                        {/* Info Placeholder */}
                        <div className="p-6 flex flex-col justify-between h-[208px] bg-black">
                          <div>
                            <div className="h-6 w-3/4 bg-zinc-700 rounded mb-2"></div>
                            <div className="h-5 w-1/2 bg-zinc-700 rounded mb-3"></div>
                            <div className="h-4 w-full bg-zinc-700 rounded mb-2"></div>
                            <div className="h-4 w-5/6 bg-zinc-700 rounded"></div>
                          </div>

                          {/* Social Icons Placeholder */}
                          <div className="flex gap-3 mt-4">
                            <div className="w-5 h-5 bg-zinc-700 rounded-full"></div>
                            <div className="w-5 h-5 bg-zinc-700 rounded-full"></div>
                            <div className="w-5 h-5 bg-zinc-700 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
              : // 🟩 Actual Data Cards
                teamMembers.map((member) => (
                  <div
                    key={member._id}
                    className="flex-shrink-0 scroll-snap-center"
                    style={{ width: `${cardWidth}px`, height: "558px" }}
                  >
                    <div className="bg-gray-900 rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300">
                      {/* Image */}
                      <div className="relative w-full h-[350px] overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
                      </div>

                      {/* Info */}
                      <div className="p-6 flex flex-col justify-between h-[208px] bg-black">
                        <div>
                          <h3 className="text-2xl font-bold mb-1">
                            {member.name}
                          </h3>
                          <p className="text-white font-medium mb-2">
                            {member.role}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {member.description}
                          </p>
                        </div>

                        {/* Socials */}
                        <div className="flex gap-3 mt-4">
                          {member.social?.linkedin && (
                            <a
                              href={member.social.linkedin}
                              className="text-lime-400 hover:text-lime-300 transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaLinkedin className="w-5 h-5" />
                            </a>
                          )}
                          {member.social?.upwork && (
                            <a
                              href={member.social.upwork}
                              className="text-lime-400 hover:text-lime-300 transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <SiUpwork className="w-5 h-5" />
                            </a>
                          )}
                          {member.social?.twitter && (
                            <a
                              href={member.social.twitter}
                              className="text-lime-400 hover:text-lime-300 transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaTwitter className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>

          {/* Dots indicator */}
          {!loading && (
            <div className="absolute bottom-0 left-0 flex gap-2 mt-4 px-4 py-2">
              {Array.from({ length: Math.ceil(teamMembers.length) }).map(
                (_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === currentIndex ? "bg-lime-400" : "bg-zinc-700"
                    }`}
                  />
                )
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          {!loading && (
            <div className="flex gap-4 justify-end mt-6">
              <button
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="bg-zinc-900 hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() =>
                  setCurrentIndex((prev) =>
                    Math.min(
                      Math.max(0, teamMembers.length - visibleCards),
                      prev + 1
                    )
                  )
                }
                disabled={
                  currentIndex >= Math.max(0, teamMembers.length - visibleCards)
                }
                className="bg-zinc-900 hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
