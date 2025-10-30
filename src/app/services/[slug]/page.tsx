"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import { client } from "@/sanity/lib/client";
import {
  serviceDetailQuery,
  developmentProcessQuery,
  relatedProjectsByServiceQuery,
} from "@/sanity/queries";
import ImageSectionClient from "./ImageSectionClient";
import { DevelopmentProcess } from "@/types/services/services-types";
import TrustedLogos from "@/components/landing-page/trusted-logos";
import { IconCloudDemo } from "../tech-stack-showcase";
import ExactFooter from "@/components/service-page-footer";
import Footer from "@/components/footer";
import RelatedProjectsSection from "@/components/services-pages/related-projectsSection";
import { RelatedProject } from "@/types/projects/projects-types";

// interface Props {
//   params: { slug: string };
// }

interface Props {
  params: Promise<{ slug: string }>;
}

const DevelopmentProcessSection = ({
  data,
}: {
  data: DevelopmentProcess[];
}) => (
  <section className="bg-black text-white py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Process for
          <br />
          Developing Software
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          We are a collective of strategists, creatives, and engineers united by
          a passion for building brands that matter.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data && data.length > 0 ? (
          data.map((process) => (
            <div
              key={process._id}
              className="bg-zinc-900 rounded-3xl p-8 hover:bg-zinc-800 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-lime-500 text-black rounded-full font-bold text-xl mb-8">
                {process.number}
              </div>
              <h3 className="text-2xl font-bold mb-4">{process.name}</h3>
              <p className="text-gray-400 leading-relaxed">
                {process.shortDescription}
              </p>
            </div>
          ))
        ) : (
          <>
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-zinc-900 rounded-3xl p-8 h-[250px] animate-pulse"
              />
            ))}
          </>
        )}
      </div>
    </div>
  </section>
);

export default function ServiceDetailPage({ params }: Props) {
  const [service, setService] = useState<any>(null);
  const [processData, setProcessData] = useState<DevelopmentProcess[]>([]);
  const [relatedProjects, setRelatedProjects] = useState<RelatedProject[]>([]);
  const [projectsLoading, setProjectsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const { slug } = await params;
        const [serviceRes, processRes, relatedRes] = await Promise.all([
          client.fetch(serviceDetailQuery, { slug }),
          client.fetch(developmentProcessQuery),
          client.fetch(relatedProjectsByServiceQuery, { slug }),
        ]);
        setService(serviceRes);
        setProcessData(processRes);
        setRelatedProjects(Array.isArray(relatedRes) ? relatedRes : []);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setTimeout(() => setProjectsLoading(false), 500);
      }
    };
    fetchAll();
  }, [params]);

  return (
    <div className="bg-black text-white">
      <Navbar />
      {service ? (
        <ImageSectionClient service={service} />
      ) : (
        <div className="min-h-[70vh] bg-zinc-900 flex items-center justify-center">
          <p className="text-gray-500">Loading hero section...</p>
        </div>
      )}
      <DevelopmentProcessSection data={processData} />
      <TrustedLogos />
      <IconCloudDemo />
      <RelatedProjectsSection
        projects={relatedProjects}
        loading={projectsLoading}
      />
      <ExactFooter />
      <Footer footerOnly />
    </div>
  );
}
