"use client";

import React, { useState, useEffect } from "react";
import { visibleTestimonials } from "../const/const";
import { Testimonial } from "@/types/testimonials/testimonial-types";
import { client } from "@/sanity/lib/client";
import { testimonialsQuery, articlesQuery } from "@/sanity/queries";
import { ArticlesTestimonialsProps } from "@/types/articles/article.types";
import { Article } from "@/types/articles/article.types";
import Link from "next/link";


const SkeletonLoader = ({ type }: { type: "article" | "testimonial" }) => {
  if (type === "article") {
    return (
      <div className="bg-zinc-900 rounded-3xl overflow-hidden flex flex-col md:flex-row gap-6 p-6 animate-pulse">
        <div className="w-full md:w-96 h-60 bg-zinc-800 rounded-2xl"></div>
        <div className="flex-1 flex flex-col justify-center gap-4">
          <div className="flex gap-2">
            <div className="w-16 h-6 bg-zinc-800 rounded-full"></div>
            <div className="w-20 h-6 bg-zinc-800 rounded-full"></div>
          </div>
          <div className="w-3/4 h-8 bg-zinc-800 rounded-md"></div>
          <div className="w-full h-4 bg-zinc-800 rounded-md"></div>
          <div className="w-5/6 h-4 bg-zinc-800 rounded-md"></div>
          <div className="w-40 h-10 bg-zinc-700 rounded-full mt-4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 rounded-3xl p-8 animate-pulse">
      <div className="w-2/3 h-6 bg-zinc-800 rounded-md mb-6"></div>
      <div className="flex gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="w-5 h-5 bg-zinc-800 rounded"></div>
        ))}
      </div>
      <div className="w-full h-4 bg-zinc-800 rounded-md mb-2"></div>
      <div className="w-5/6 h-4 bg-zinc-800 rounded-md mb-2"></div>
      <div className="w-4/6 h-4 bg-zinc-800 rounded-md mb-6"></div>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-zinc-800 rounded-full"></div>
        <div>
          <div className="w-24 h-4 bg-zinc-800 rounded-md mb-2"></div>
          <div className="w-16 h-3 bg-zinc-800 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

const ArticlesTestimonials: React.FC<ArticlesTestimonialsProps> = ({
  showArticles = true,
  showTestimonials = true,
}) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [testimonialIndex, setTestimonialIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [hideArticles, setHideArticles] = useState<boolean>(false);
  const [loadingArticles, setLoadingArticles] = useState(true);
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);

  const maxTestimonialIndex = Math.max(
    0,
    testimonials.length - visibleTestimonials
  );

  // ✅ Fetch Articles
  useEffect(() => {
    async function fetchArticles() {
      try {
        const data = await client.fetch(articlesQuery);
        setArticles(data);
      } catch (err) {
        console.error("Error fetching articles:", err);
      } finally {
        setLoadingArticles(false);
      }
    }
    fetchArticles();
  }, []);

  // ✅ Fetch Testimonials
  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const data = await client.fetch(testimonialsQuery);
        const mapped: Testimonial[] = data.map((t: any, index: number) => ({
          id: index,
          company: t.company,
          logo: t.logo || "",
          rating: t.rating || 5,
          text: t.text,
          author: t.author,
          position: t.position || "",
          avatar: t.avatar || "",
        }));
        setTestimonials(mapped);
      } catch (err) {
        console.error("Failed to fetch testimonials:", err);
      } finally {
        setLoadingTestimonials(false);
      }
    }
    fetchTestimonials();
  }, []);

  // ✅ Responsive behavior
  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setHideArticles(width <= 440);
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const handlePrevTestimonial = () =>
    setTestimonialIndex((prev) => Math.max(0, prev - 1));

  const handleNextTestimonial = () =>
    setTestimonialIndex((prev) => Math.min(maxTestimonialIndex, prev + 1));

  return (
    <section className="w-full bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* ==================== ARTICLES ==================== */}
        {showArticles && !hideArticles && (
          <div className="mb-24 transition-opacity duration-500 ease-in-out">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-12">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                  Popular Articles
                </h1>
                <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
                  From great strategies to intelligent bravest, our work is
                  defined by a commitment to innovation and tangible results.
                </p>
              </div>
              <button className="border border-white rounded-full px-6 py-3 hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap">
                View All Posts
              </button>
            </div>

            {/* ✅ Articles grid / skeleton */}
            <div className="space-y-6">
              {loadingArticles
                ? Array.from({ length: 3 }).map((_, i) => (
                    <SkeletonLoader key={i} type="article" />
                  ))
                :articles.map((article) => (
  <Link
    key={article._id}
    href={
      article.slug?.current
        ? `/articles/${article.slug.current}`
        : "#"
    }
    className="block bg-zinc-900 rounded-3xl overflow-hidden flex flex-col md:flex-row gap-6 p-6 hover:bg-zinc-800 transition-all duration-300 group"
  >
    <div className="w-full md:w-96 h-60 flex-shrink-0 rounded-2xl overflow-hidden bg-gradient-to-br from-lime-500/40 to-lime-700/20">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="flex-1 flex flex-col justify-center">
      <div className="flex gap-2 mb-4 flex-wrap">
        {article.tags?.map((tag) => (
          <span
            key={tag._id}
            className="bg-lime-500/20 text-lime-400 border border-lime-500/30 px-3 py-1 rounded-full text-sm"
          >
            {tag.title}
          </span>
        ))}
      </div>
      <h3 className="text-2xl md:text-3xl font-bold mb-3">
        {article.title}
      </h3>
      <p className="text-gray-400 mb-6">{article.description}</p>
      <span className="bg-white text-black font-medium px-6 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300 flex items-center gap-2 w-fit">
        <span>📖</span> Read More
      </span>
    </div>
  </Link>
))
}
            </div>
          </div>
        )}

        {/* ==================== TESTIMONIALS ==================== */}
        {showTestimonials && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                Testimonials
              </h2>
              <p className="text-gray-400 text-base sm:text-lg">
                We are a collective of designers, creatives, and engineers
                united for building brands that matter.
              </p>
            </div>

            {/* ✅ Testimonials section */}
            {loadingTestimonials ? (
              <div
                className={`${
                  isMobile
                    ? "flex flex-col gap-6"
                    : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                }`}
              >
                {Array.from({ length: 3 }).map((_, i) => (
                  <SkeletonLoader key={i} type="testimonial" />
                ))}
              </div>
            ) : (
              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className={`transition-transform duration-500 ease-out ${
                      isMobile ? "flex flex-col gap-6" : "flex gap-6"
                    }`}
                    style={{
                      transform: isMobile
                        ? "none"
                        : `translateX(-${
                            testimonialIndex * (100 / visibleTestimonials)
                          }%)`,
                    }}
                  >
                    {testimonials.map((t) => (
                      <div
                        key={t.id}
                        className={`flex-shrink-0 ${
                          isMobile
                            ? "w-full"
                            : "w-full md:w-[calc(33.333%-16px)]"
                        }`}
                      >
                        <div className="bg-zinc-900 rounded-3xl p-8 hover:bg-zinc-800 transition-all duration-300">
                          <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                            {t.company}
                          </h3>
                          <div className="flex gap-1 mb-6">
                            {Array.from({ length: t.rating }).map((_, i) => (
                              <svg
                                key={i}
                                className="w-5 h-5 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <p className="text-gray-300 mb-6 leading-relaxed">
                            {t.text}
                          </p>
                          <div className="flex items-center gap-4">
                            {t.avatar && (
                              <img
                                src={t.avatar}
                                alt={t.author}
                                className="w-12 h-12 rounded-full object-cover"
                              />
                            )}
                            <div>
                              <h4 className="font-semibold">{t.author}</h4>
                              <p className="text-sm text-gray-400">
                                {t.position}
                              </p>
                            </div>
                          </div>
                          <button className="mt-6 ml-0 border border-white rounded-full px-6 py-2 hover:bg-white hover:text-black transition-all duration-300 w-35 text-left">
                            Read More
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {!isMobile && (
                  <div className="flex gap-4 justify-end mt-8">
                    <button
                      onClick={handlePrevTestimonial}
                      disabled={testimonialIndex === 0}
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
                      onClick={handleNextTestimonial}
                      disabled={testimonialIndex >= maxTestimonialIndex}
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

                <div className="flex gap-2 justify-center mt-6">
                  {Array.from({ length: testimonials.length }).map(
                    (_, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          setTestimonialIndex(
                            Math.min(index, maxTestimonialIndex)
                          )
                        }
                        className={
                          index >= testimonialIndex &&
                          index < testimonialIndex + visibleTestimonials
                            ? "h-2 rounded-full transition-all duration-300 bg-lime-400 w-8"
                            : "h-2 rounded-full transition-all duration-300 bg-zinc-700 w-2"
                        }
                      />
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticlesTestimonials;
