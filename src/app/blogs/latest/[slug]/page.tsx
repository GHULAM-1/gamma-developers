"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { ArrowLeft, Linkedin, Share2, Copy } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { latestCardQuery } from "@/sanity/queries";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import RelatedContent from "@/app/articles/related-articles";
const builder = imageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source);
import GridLayout from "@/app/articles/grid";
import { days, months } from "@/data/blogs/data";


export default function LatestCardPage() {

  const params = useParams<{ slug: string }>();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const [card, setCard] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchCard = async () => {
      try {
        const data = await client.fetch(latestCardQuery(slug));
        console.log("Fetched card data:", data); // Debug log
        console.log("Card tags:", data?.cards?.tags); // Debug tags specifically
        setCard(data?.cards || null);
      } catch (err) {
        console.error("Error fetching card:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCard();
  }, [slug]);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = card?.title || "";
    const shareUrls: Record<string, string> = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    };
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
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

  if (!card)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-3xl font-bold mb-4">Card not found</h1>
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
            <span className="text-sm">All Cards</span>
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-0">
            {card.title}
          </h1>
        </div>
      </div>

      {/* HERO IMAGE */}
      {card.image && (
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="relative rounded-2xl overflow-hidden ring-1 ring-gray-800 shadow-[0_0_40px_-10px_rgba(132,255,132,0.15)]">
            <img
              src={urlFor(card.image).width(1200).url()}
              alt={card.title}
              className="w-full h-auto object-cover rounded-2xl transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      )}

      {/* DATE + SHARE */}
      <div className="max-w-7xl mx-auto px-6 mt-2 flex flex-wrap items-center justify-between border-b border-gray-800 pb-6">
        <span className="text-gray-400 text-sm md:text-base">
          {formatDate(card.date)}
        </span>
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
            {card.description && (
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                {card.description}
              </p>
            )}
          </div>

          {/* PORTABLE TEXT CONTENT */}
          {card.content && (
            <div className="prose prose-invert max-w-none">
              <PortableText
                value={card.content}
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
                            alt={value.alt || "Card image"}
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
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div
            className="sticky top-8 rounded-3xl p-8 shadow-2xl overflow-hidden relative bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/heroSection/green-horizon-bg.png')",
            }}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-lime-400/40 via-lime-500/20 to-transparent blur-2xl"></div>
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
        currentId={card._key || card._id}
        currentTags={card.tags || []}
        type="latestCard"
        showArticlesForCard={true}
      />

      <Footer footerOnly />
    </main>
  );
}