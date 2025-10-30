"use client";

import React, { useRef, useState } from "react";
import { Dot } from "lucide-react";
import { RelatedProject } from "@/types/projects/projects-types";

interface RelatedProjectsSectionProps {
  projects: RelatedProject[];
  loading: boolean;
}

const RelatedProjectsSection: React.FC<RelatedProjectsSectionProps> = ({
  projects,
  loading,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollContainerRef.current)
      scrollContainerRef.current.style.cursor = "grab";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (scrollContainerRef.current)
        scrollContainerRef.current.style.cursor = "grab";
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 800;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const SkeletonCard = () => (
    <div className="relative flex-shrink-0 w-[800px] bg-zinc-900 rounded-[32px] overflow-hidden">
      <div className="relative w-full h-[484px] bg-zinc-800 animate-pulse" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-8">
        <div className="h-8 w-3/4 bg-zinc-700 rounded-lg mb-4 animate-pulse" />
        <div className="h-4 w-full bg-zinc-700 rounded mb-2 animate-pulse" />
        <div className="h-4 w-5/6 bg-zinc-700 rounded mb-6 animate-pulse" />
        <div className="h-12 w-24 bg-zinc-700 rounded-full animate-pulse" />
      </div>
    </div>
  );

  return (
    <section className="bg-black text-white py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Related Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              The Drewl Hall of Fame: Featuring brands from around the world and
              projects of all shapes and sizes.
            </p>
          </div>

          {/* View Products button */}
          <button className="mt-6 md:mt-0 px-8 py-3 rounded-full bg-white text-black font-semibold transition-all duration-300 hover:bg-zinc-200">
            View Products
          </button>
        </div>

        {/* Scrollable gallery */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {loading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            projects.map((project) => (
              <div
                key={project._id}
                className="relative flex-shrink-0 w-[800px] bg-zinc-900 rounded-[32px] overflow-hidden group"
              >
                {/* Image */}
                <div className="relative w-full h-[484px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-[800px] h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                {/* Text + Button layout */}
                <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                  <div className="max-w-[70%]">
                    <h3 className="text-3xl font-bold mb-3 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-2 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <button className="relative flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium overflow-hidden group/btn transition-all duration-300">
                    <Dot className="relative z-10 w-5 h-5 transition-colors duration-300 group-hover/btn:text-white" />
                    <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-white">
                      View
                    </span>
                    <div className="absolute inset-0 bg-black scale-0 group-hover/btn:scale-100 transition-transform duration-300 origin-center rounded-full" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Arrows BELOW the images */}
        <div className="flex justify-end mt-10 gap-4">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default RelatedProjectsSection;
