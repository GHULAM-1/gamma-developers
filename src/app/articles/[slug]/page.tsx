"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { ArrowLeft, Linkedin, Share2, Copy } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { Article } from "@/types/articles/article.types";
import { articleBySlugQuery } from "@/sanity/queries";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import RelatedArticles from "@/app/articles/related-articles";
import RelatedContent from "@/app/articles/related-articles";
import GridLayout from "../grid";
import {days, months} from '@/data/blogs/data';

const builder = imageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source);

export default function ArticlePage() {

  const params = useParams<{ slug: string }>();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await client.fetch(articleBySlugQuery, { slug });
        setArticle(data);
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchArticle();
  }, [slug]);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = article?.title || "";
    const shareUrls: Record<string, string> = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    };
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
 
    const dayName = days[date.getDay()];
    const day = date.getDate();
    const suffix =
      day === 1 || day === 21 || day === 31
        ? "st"
        : day === 2 || day === 22
          ? "nd"
          : day === 3 || day === 23
            ? "rd"
            : "th";
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${dayName} ${day}${suffix}, ${month} ${year}`;
  };

  if (loading)
    return (
      <GridLayout/>
    );

  if (!article)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-3xl font-bold mb-4">Article not found</h1>
        <Link
          href="/"
          className="bg-lime-500 hover:bg-lime-400 text-black font-medium px-4 py-2 rounded-lg"
        >
          Go back home
        </Link>
      </div>
    );
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="mt-12" />
      {/* Header */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-lime-400 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span className="text-sm">All Posts</span>
          </Link>

          {/* Tags */}
          {Array.isArray(article.tags) && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags
                .filter((tag) => tag && tag.title)
                .map((tag) => (
                  <span
                    key={tag._id}
                    className="bg-gray-900 border border-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tag.title}
                  </span>
                ))}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-0">
            {article.title}
          </h1>
        </div>
      </div>

      {/* HERO IMAGE (Top) */}
      {article.image && (
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="relative rounded-2xl overflow-hidden ring-1 ring-gray-800 shadow-[0_0_40px_-10px_rgba(132,255,132,0.15)]">
            <img
              src={urlFor(article.image).width(1200).url()}
              alt={article.title}
              className="w-full h-auto object-cover rounded-2xl transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      )}

      {/* DATE + SHARE (Below Main Image) */}
      <div className="max-w-7xl mx-auto px-6 mt-2 flex flex-wrap items-center justify-between border-b border-gray-800 pb-6">
        {/* Date on the left */}
        <span className="text-gray-400 text-sm md:text-base">
          {formatDate(article.publishedAt)}
        </span>

        {/* Share buttons on the right */}
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <button
            onClick={() => handleShare("linkedin")}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <Linkedin size={18} className="text-gray-400" />
          </button>
          <button
            onClick={() => handleShare("twitter")}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <Share2 size={18} className="text-gray-400" />
          </button>
          <button
            onClick={() => navigator.clipboard.writeText(window.location.href)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors text-sm"
          >
            <Copy size={16} className="text-gray-400" />
            <span className="text-gray-300">Copy Link</span>
          </button>
        </div>
      </div>

      {/* CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Introduction
            </h2>
            {article.description && (
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                {article.description}
              </p>
            )}
          </div>

          {/* LEFT-SIDE IMAGE */}
          {article.image && (
            <div className="relative w-full max-w-[776px] h-[441px] mb-10 rounded-2xl overflow-hidden ring-1 ring-gray-800 shadow-[0_0_40px_-10px_rgba(132,255,132,0.15)]">
              <img
                src={urlFor(article.image).width(776).height(441).url()}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* DATE + SHARE */}
          <div className="flex flex-wrap items-center justify-between border-b border-gray-800 pb-4 mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>{formatDate(article.publishedAt)}</span>
              <span className="text-gray-700">•</span>
              <span>5 Min Read</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => handleShare("linkedin")}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <Linkedin size={18} className="text-gray-400" />
              </button>
              <button
                onClick={() => handleShare("twitter")}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <Share2 size={18} className="text-gray-400" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors text-sm">
                <Copy size={16} className="text-gray-400" />
                <span className="text-gray-300">Copy Link</span>
              </button>
            </div>
          </div>

          {/* ARTICLE CONTENT BELOW IMAGE */}
          <div className="prose prose-invert max-w-none">
            <PortableText
              value={article.content}
              components={{
                block: {
                  h2: ({ children }) => (
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-6">
                      {children}
                    </h2>
                  ),
                  normal: ({ children }) => (
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
                      {children}
                    </p>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-lime-500 bg-gray-900/40 pl-6 my-8 italic text-gray-300 rounded-md py-4">
                      {children}
                    </blockquote>
                  ),
                },
                types: {
                  image: ({ value }) => (
                    <div className="my-12">
                      <div className="relative rounded-2xl overflow-hidden ring-1 ring-gray-700">
                        <img
                          src={urlFor(value).width(800).url()}
                          alt={value.alt || "Article image"}
                          className="w-full h-auto object-cover rounded-2xl transform transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      {value.caption && (
                        <p className="text-sm text-gray-500 mt-3 text-center">
                          {value.caption}
                        </p>
                      )}
                    </div>
                  ),
                },
              }}
            />

            {/* ARTICLE CONTENT BELOW IMAGE */}
            <div className="prose prose-invert max-w-none">
              <PortableText
                value={article.content}
                components={{
                  block: {
                    h2: ({ children }) => (
                      <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-6">
                        {children}
                      </h2>
                    ),
                    normal: ({ children }) => (
                      <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
                        {children}
                      </p>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-lime-500 bg-gray-900/40 pl-6 my-8 italic text-gray-300 rounded-md py-4">
                        {children}
                      </blockquote>
                    ),
                  },
                  types: {
                    image: ({ value }) => (
                      <div className="my-12">
                        <div className="relative rounded-2xl overflow-hidden ring-1 ring-gray-700">
                          <img
                            src={urlFor(value).width(800).url()}
                            alt={value.alt || "Article image"}
                            className="w-full h-auto object-cover rounded-2xl"
                          />
                        </div>
                        {value.caption && (
                          <p className="text-sm text-gray-500 mt-3 text-center">
                            {value.caption}
                          </p>
                        )}
                      </div>
                    ),
                  },
                }}
              />
            </div>

            {/* ✅ SHARE THIS POST SECTION */}
            <div className="mt-16 flex flex-col items-center justify-center text-center">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
                Share this post
              </h3>

              <div className="flex items-center justify-center gap-6">
                <button
                  onClick={() => handleShare("linkedin")}
                  className="hover:scale-110 transition-transform"
                >
                  <Linkedin
                    size={28}
                    className="text-lime-400 hover:text-lime-300"
                  />
                </button>

                <button
                  onClick={() => handleShare("twitter")}
                  className="hover:scale-110 transition-transform"
                >
                  <Share2
                    size={28}
                    className="text-lime-400 hover:text-lime-300"
                  />
                </button>

                <button
                  onClick={() =>
                    navigator.clipboard.writeText(window.location.href)
                  }
                  className="hover:scale-110 transition-transform"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="w-7 h-7 text-lime-400 hover:text-lime-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 0c0 4.97 4.03 9 9 9m-9-9c0 4.97-4.03 9-9 9"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-1">
          <div
            className="sticky top-8 rounded-3xl p-8 shadow-2xl overflow-hidden relative bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/heroSection/green-horizon-bg.png')", // ✅ replace with your actual image path
            }}
          >
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

            {/* Glowing bottom effect */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-lime-400/40 via-lime-500/20 to-transparent blur-2xl"></div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                Ready to build something exceptional?
              </h3>

              <p className="text-white/90 text-base leading-relaxed mb-8">
                Let's discuss how our expertise can transform your idea into a
                powerful digital solution. Schedule a free, no-obligation
                consultation with our strategy team today.
              </p>

              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-start gap-3 mb-6">
                  <div className="bg-black rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                    {/* <span className="text-white text-xl font-bold">GD.</span> */}
                    <span className="text-xl font-bold">
                      <span className="text-lime-400">G</span>
                      <span className="text-white">D.</span>
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-medium mb-1">
                      Gamma Developers
                    </p>
                    <p className="text-black text-2xl font-bold">
                      Free Consultation
                    </p>
                  </div>
                </div>

                <div className="text-gray-600 text-sm space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">⏱</span>
                    <span className="font-medium">30 min</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5">💻</span>
                    <span className="font-medium">
                      Web conferencing details provided upon confirmation.
                    </span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl transition-colors duration-200">
                  Book Free Consultation
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <RelatedContent
        currentId={article._id}
        currentTags={article.tags || []}
        type="article"
      />
      <Footer footerOnly />
    </main>
  );
}
