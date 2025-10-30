"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { productsQuery } from "@/sanity/queries";
import { Product } from "@/types/products/featured-product-types";

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await client.fetch(productsQuery);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Skeleton placeholders (6 items for grid look)
  const skeletonArray = Array(6).fill(null);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Featured Products
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            rutilia odio ut eros elementum rhoncus.
          </p>
        </div>

        {/* Product Grid */}
        <div className="space-y-10">
          {loading
            ? // 🟩 Skeleton layout — same as product display
              skeletonArray.map((_, i) => (
                <div
                  key={i}
                  className="relative rounded-3xl overflow-hidden bg-zinc-900 animate-pulse"
                >
                  {/* Simulated product image */}
                  <div className="w-full h-[500px] bg-zinc-800" />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Simulated text content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-16">
                    <div className="h-10 w-2/3 bg-zinc-700 rounded mb-4"></div>

                    <div className="flex gap-3 mb-4 flex-wrap">
                      <div className="h-8 w-20 bg-zinc-700 rounded-full"></div>
                      <div className="h-8 w-16 bg-zinc-700 rounded-full"></div>
                      <div className="h-8 w-24 bg-zinc-700 rounded-full"></div>
                    </div>

                    <div className="h-5 w-full bg-zinc-700 rounded mb-2"></div>
                    <div className="h-5 w-5/6 bg-zinc-700 rounded mb-4"></div>

                    <div className="h-12 w-36 bg-zinc-700 rounded-full"></div>
                  </div>
                </div>
              ))
            : // 🟩 Real data when loaded
              products.map((product) => (
                <div
                  key={product._id}
                  className="relative rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all duration-500"
                >
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={1200}
                      height={500}
                      className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-16 text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 z-10">
                      {product.title}
                    </h2>

                    <div className="flex gap-3 mb-4 flex-wrap z-10">
                      {product.tags?.map((tag) => (
                        <span
                          key={tag._id}
                          className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm"
                        >
                          {tag.title}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-200 leading-relaxed mb-6 max-w-2xl z-10">
                      {product.description}
                    </p>

                    <button className="bg-lime-400 text-black font-semibold px-8 py-3 rounded-full hover:bg-lime-300 transition-colors duration-300 flex items-center gap-2 w-fit z-10">
                      <span>▶</span> Learn More
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
