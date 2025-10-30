"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import {
  relatedArticlesByTagsQuery,
  relatedLatestCardsQuery,
  fallbackLatestCardsQuery,
  relatedArticlesForLatestCardQuery,
  fallbackArticlesQuery,
} from "@/sanity/queries";

import {RelatedContentProps,Item  } from '@/types/articles/article.types'
import { Dot } from "lucide-react";

const SkeletonLoader = () => (
  <div className="rounded-3xl overflow-hidden flex flex-col md:flex-row gap-6 p-6 animate-pulse bg-[#191919]">
    <div className="w-full md:w-96 h-60 rounded-2xl bg-[#242424]" />
    <div className="flex-1 flex flex-col justify-center gap-4">
      <div className="flex gap-2 mb-4 flex-wrap">
        <div className="w-16 h-6 rounded-full bg-[#242424]" />
        <div className="w-20 h-6 rounded-full bg-[#242424]" />
      </div>
      <div className="w-3/4 h-8 rounded-md bg-[#242424]" />
      <div className="w-full h-4 rounded-md bg-[#242424]" />
      <div className="w-5/6 h-4 rounded-md bg-[#242424]" />
      <div className="w-40 h-10 rounded-full mt-4 bg-[#242424]" />
    </div>
  </div>
);

export default function RelatedContent({
  currentId,
  currentTags,
  type,
  showArticlesForCard = false,
}: RelatedContentProps) {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelated = async () => {
      try {
        let data: Item[] = [];

        if (type === "latestCard" && showArticlesForCard) {
          const tagIds = currentTags?.map((t) => t._id) || [];

          console.log("Fetching articles for tags:", tagIds);

          if (tagIds.length > 0) {
            data = await client.fetch(relatedArticlesForLatestCardQuery, {
              currentTags: tagIds,
            });
            console.log("Found articles with matching tags:", data.length); 
          }

          if (!data || data.length === 0) {
            console.log("No matching articles found, fetching recent articles"); 
            data = await client.fetch(fallbackArticlesQuery);
          }
        } else if (type === "article") {
          data = await client.fetch(relatedArticlesByTagsQuery, {
            currentId,
            currentTags: currentTags?.map((t) => t._id) || [],
          });

          if (!data || data.length === 0) {
            const fallbackQuery = `*[_type == "articles" && _id != $currentId] | order(publishedAt desc)[0...3]{
              _id, title, description, "image": image.asset->url, slug, tags[]->{_id, title}
            }`;
            data = await client.fetch(fallbackQuery, { currentId });
          }
        } else {
         
          data = await client.fetch(relatedLatestCardsQuery, {
            currentKey: currentId, 
            currentTags: currentTags?.map((t) => t._id) || [],
          });
          if (!data || data.length === 0) {
            data = await client.fetch(fallbackLatestCardsQuery, {
              currentKey: currentId,
            });
          }
        }
        setItems(data || []);
      } catch (error) {
        console.error("Error fetching related content:", error);
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRelated();
  }, [currentId, currentTags, type, showArticlesForCard]);
  if (loading) {
    return (
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <SkeletonLoader key={i} />
          ))}
        </div>
      </section>
    );
  }
  if (items.length === 0) return null;
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-white">
            {showArticlesForCard
              ? "Related Articles"
              : type === "article"
                ? "Related Articles"
                : "More Latest Updates"}
          </h2>
          <Link
            href={showArticlesForCard || type === "article" ? "/blog" : "/"}
            className="text-white border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            style={{
              width: "143px",
              height: "44px",
              backgroundColor: "transparent",
            }}
          >
            {showArticlesForCard || type === "article"
              ? "View All Blogs"
              : "View All"}
          </Link>
        </div>

        <div className="space-y-6">
          {items.map((item) => {
            const slugValue =
              typeof item.slug === "object" ? item.slug.current : item.slug;
            const linkHref =
              showArticlesForCard || type === "article"
                ? `/articles/${slugValue}`
                : `/blogs/latest/${slugValue}`;

            return (
              <Link
                key={item._id}
                href={linkHref}
                className="block rounded-3xl overflow-hidden flex flex-col md:flex-row gap-6 p-6 hover:bg-gray-800 transition-all duration-300 group bg-[#191919]"
              >
                <div className="w-full md:w-96 h-60 flex-shrink-0 rounded-2xl overflow-hidden bg-[#0a0a0a]">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex gap-2 mb-4 flex-wrap">
                      {item.tags.map((tag) => (
                        <span
                          key={tag._id}
                          className="bg-lime-500/20 text-lime-400 border border-lime-500/30 px-3 py-1 rounded-full text-sm"
                        >
                          {tag.title}
                        </span>
                      ))}
                    </div>
                  )}
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-lime-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-6 line-clamp-2">
                    {item.description}
                  </p>
                  <span className="bg-white text-black font-medium px-6 py-2 rounded-full hover:bg-lime-400 transition-colors duration-300 flex items-center gap-2 w-fit">
                    <span><Dot/></span> Read More
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}