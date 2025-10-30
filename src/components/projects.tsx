"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { projectsQuery } from "@/sanity/queries";
import { client } from "@/sanity/lib/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Project } from "@/types/projects/projects-types";
import { Dot } from "lucide-react";

interface ProjectsShowcaseProps {
  isProjectPage?: boolean;
}

export default function ProjectsShowcase({
  isProjectPage = false,
}: ProjectsShowcaseProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data: Project[] = await client.fetch(projectsQuery);
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const displayedProjects = isProjectPage
    ? projects.slice(0, 6)
    : projects.slice(0, 4);

  // Skeleton cards for loading state
  const skeletonArray = isProjectPage
    ? Array(6).fill(null)
    : Array(4).fill(null);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Our Projects
            </h1>
            <p className="text-gray-400 text-lg max-w-xl">
              Discover the stories behind some of our most successful and
              innovative digital experiences.
            </p>
          </div>

          {!isProjectPage && (
            <Button
              variant="ghost"
              className="rounded-full px-6 py-3 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              View All Projects
            </Button>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {loading
            ? skeletonArray.map((_, i) => (
                <div
                  key={i}
                  className="bg-zinc-900 rounded-3xl overflow-hidden animate-pulse"
                >
                  <div className="h-80 bg-zinc-800" />
                  <div className="p-8">
                    <div className="h-6 bg-zinc-800 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-zinc-800 rounded w-full mb-2"></div>
                    <div className="h-4 bg-zinc-800 rounded w-5/6 mb-6"></div>
                    <div className="flex gap-2">
                      <div className="h-6 w-16 bg-zinc-800 rounded-full"></div>
                      <div className="h-6 w-20 bg-zinc-800 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))
            : displayedProjects.map((project) => (
                <Link
                  key={project._id}
                  href={`/projects/${project.slug.current}`}
                  className="block"
                >
                  <Card className="bg-zinc-900 border-none shadow-none rounded-3xl overflow-hidden group transition-all duration-500">
                    <div className="px-4 pb-4 pt-0">
                      <div className="relative h-80 overflow-hidden rounded-2xl">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110"
                        />
                      </div>
                    </div>

                    <CardContent className="p-8 pt-4">
                      <h3 className="text-3xl font-bold mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="flex justify-between items-center flex-wrap gap-4">
                        <div className="flex gap-2 flex-wrap">
                          {project.tags?.map((tag, index) => (
                            <span
                              key={`${project._id}-${index}`}
                              className="bg-zinc-800 px-3 py-1 rounded-full text-sm"
                            >
                              {tag.title || "Tag"}
                            </span>
                          ))}
                        </div>

                        <Button className="bg-white text-black rounded-full px-6 py-2 font-medium transition-all duration-300 transform hover:scale-105 hover:bg-black hover:text-white flex items-center gap-2 whitespace-nowrap">
                          <span className="text-xl">
                            <Dot />
                          </span>
                          View Case Study
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
}
