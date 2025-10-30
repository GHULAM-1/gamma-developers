"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { servicesQuery } from "@/sanity/queries";
import { Service } from "@/types/services/services-types";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source).url();
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      try {
        const data = await client.fetch(servicesQuery);
        setServices(data);
      } catch (err) {
        console.error("Error fetching services:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);

  const skeletonArray = Array(6).fill(null);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-gray-400 text-base max-w-2xl">
              From foundational strategy to flawless execution, this is how we
              <br className="hidden md:block" />
              engineer excellence.
            </p>
          </div>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full px-8 py-2.5 text-sm"
          >
            View Services
          </Button>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-4">
          {loading
            ? skeletonArray.map((_, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-2xl bg-zinc-900 animate-pulse ${
                    i === 0 ? "md:col-span-2" : i === 4 ? "md:row-span-2" : ""
                  }`}
                />
              ))
            : services.map((service, index) => {
                const gridStyles =
                  index === 0
                    ? "md:col-span-2 md:row-span-1"
                    : index === 4
                      ? "md:row-span-2 md:col-start-3 md:row-start-2"
                      : "";

                return (
                  <Link
                    key={service._id || index}
                    href={`/services/${service.slug?.current}`}
                    className={`group block ${gridStyles}`}
                  >
                    <Card className="relative overflow-hidden rounded-2xl hover:scale-[1.02] transition-all duration-300 bg-zinc-900 border-none shadow-none cursor-pointer h-full">
                      <div className="absolute inset-0">
                        {service.image && (
                          <Image
                            src={
                              typeof service.image === "string"
                                ? service.image
                                : urlFor(service.image)
                            }
                            alt={service.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                      </div>

                      <CardContent className="absolute bottom-0 left-0 right-0 p-6 z-10">
                        {/* ✅ Fixed Icon Rendering */}
                        {service.iconImage && (
                          <div className="mb-4 inline-flex p-2.5 rounded-lg">
                            <Image
                              src={
                                typeof service.iconImage === "string"
                                  ? service.iconImage
                                  : urlFor(service.iconImage)
                              }
                              alt={`${service.title} icon`}
                              width={40}
                              height={40}
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                        )}

                        <h3 className="text-xl font-semibold mb-2 text-white">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
        </div>
      </div>
    </div>
  );
}
