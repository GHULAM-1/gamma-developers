import Image from "next/image";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const projects = [
  {
    title: "Luxury Watch Boutiques",
    description:
      "We crafted a bespoke e-commerce platform for a premier luxury watch retailer, integrating immersive 3D product viewers, a personalized clienteling system, and a secure, high-volume transaction engine to elevate the digital shopping experience.",
    tags: ["Design", "Website", "UI/UX"],
    image: "/Home/project-watch.png",
    flag: "/Home/ca-flag.png",
    caseStudyUrl: "/projects/luxury-watch",
  },
  {
    title: "Nova",
    description:
      "Nova is a proprietary data analytics suite designed to transform raw information into actionable business intelligence. We developed its powerful dashboard, predictive modeling capabilities, and real-time reporting to empower data-driven decision-making for our enterprise clients.",
    tags: ["Design", "Website", "UI/UX"],
    image: "/Home/project-nova.png",
    flag: "/Home/ca-flag.png",
    caseStudyUrl: "/projects/nova",
  },
];

const allProjects = [...projects, ...[...projects].reverse()];

export default function OurProjects() {
  return (
    <div className="flex flex-col items-center bg-black px-4 py-20 sm:px-10">
      <div className="flex w-full max-w-7xl flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl font-bold text-white sm:text-6xl">
              Our Projects
            </h2>
            <p className="max-w-md text-base font-normal text-white">
              Discover the stories behind some of our most successful and
              innovative digital experiences.
            </p>
          </div>
          <Link
            href="/projects"
            className="flex-shrink-0 rounded-full border border-white px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
          >
            View All Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {allProjects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col gap-6 rounded-[28px] bg-[#191919] p-6 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-[#222222]"
            >
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={576}
                  height={327}
                  className="h-auto w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-8 px-2">
                <div className="flex flex-col gap-4">
                  <h3 className="text-3xl font-medium text-white">
                    {project.title}
                  </h3>
                  <p className="text-base font-normal text-white">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <div className="flex flex-wrap items-center gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#444444] px-3 py-1 text-sm text-white"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="rounded-full bg-[#444444] px-3 py-1.5">
                      <Image
                        src={project.flag}
                        alt="Canada"
                        width={20}
                        height={15}
                      />
                    </span>
                  </div>
                  <Link href={project.caseStudyUrl} className="outline-none">
                    <InteractiveHoverButton className="border-[var(--border-light)] px-4 py-3 text-xs outline-none focus:outline-none focus:ring-0 sm:px-6 sm:py-2 sm:text-sm lg:px-8">
                      View Case Study
                    </InteractiveHoverButton>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
