import { client } from "@/sanity/lib/client";
import { Project } from "@/types/projects/projects-types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ArticlesTestimonials from "@/components/articles";
import Stats from "@/components/stats";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } =await  params;

  const query = `*[_type == "projects" && slug.current == $slug][0]{
    _id,
    title,
    description,
    "image": image.asset->url,
    order,
    slug { current },
    tags[]->{_id, title}
  }`;

  const project: Project | null = await client.fetch(query, { slug });

  if (!project) return <div>Project not found</div>;

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <Link href="/projects" className="text-gray-400 mb-8 inline-block">
          &larr; Back to Projects
        </Link>

        <Card className="bg-zinc-900 border-none shadow-none rounded-3xl overflow-hidden">
          <div className="relative h-96 overflow-hidden rounded-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <CardContent className="p-8">
            <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-gray-400 mb-6">{project.description}</p>

            <div className="flex gap-2 flex-wrap mb-6">
              {project.tags?.map((tag) => (
                <span
                  key={tag._id}
                  className="bg-zinc-800 px-3 py-1 rounded-full text-sm"
                >
                  {tag.title}
                </span>
              ))}
            </div>

            <Button className="bg-white text-black rounded-full px-6 py-2 font-medium hover:bg-gray-200">
              View Case Study
            </Button>
          </CardContent>
        </Card>
      </div>
       <Stats />
      <ArticlesTestimonials showTestimonials={false} />
      <Footer />
    </div>
  );
}
