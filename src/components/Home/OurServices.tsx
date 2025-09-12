import {
  CodeXml,
  MessageCircle,
  BrainCircuit,
  Smartphone,
  Monitor,
  PenTool,
  GitMerge,
  LucideProps,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Service = {
  title: string;
  description: string;
  icon: React.ComponentType<LucideProps>;
  imageUrl: string;
  gridClass: string;
  href: string;
  cta: string;
};

const services: Service[] = [
  {
    title: "Software Development",
    description:
      "Architecting robust, scalable, and secure software solutions tailored to your unique business challenges.",
    icon: CodeXml,
    imageUrl: "/Home/service-software.png",
    gridClass: "lg:col-span-2",
    href: "/services/software-development",
    cta: "Learn More",
  },
  {
    title: "Chat Bot Development",
    description:
      "Creating intelligent, conversational AI chatbots that enhance customer engagement, automate support, and drive sales 24/7.",
    icon: MessageCircle,
    imageUrl: "/Home/service-chatbot.png",
    gridClass: "",
    href: "/services/chatbot-development",
    cta: "Learn More",
  },
  {
    title: "AI Dev",
    description:
      "Leveraging the power of Artificial Intelligence and Machine Learning to unlock predictive insights, automate complex processes.",
    icon: BrainCircuit,
    imageUrl: "/Home/service-ai.png",
    gridClass: "",
    href: "/services/ai-development",
    cta: "Learn More",
  },
  {
    title: "Mobile App Development",
    description:
      "Building beautiful, high-performance native and cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
    imageUrl: "/Home/service-mobile.png",
    gridClass: "",
    href: "/services/mobile-app-development",
    cta: "Learn More",
  },
  {
    title: "DevOps",
    description:
      "Streamlining your development lifecycle with our DevOps expertise, ensuring rapid, reliable, and continuous delivery of your software.",
    icon: GitMerge,
    imageUrl: "/Home/service-devops.png",
    gridClass: "lg:row-span-2 lg:h-[772px]",
    href: "/services/devops",
    cta: "Learn More",
  },
  {
    title: "Web Dev",
    description:
      "Developing responsive, fast, and feature-rich web applications and websites that serve as the digital cornerstone of your brand.",
    icon: Monitor,
    imageUrl: "/Home/service-web.png",
    gridClass: "",
    href: "/services/web-development",
    cta: "Learn More",
  },
  {
    title: "UI/UX Design",
    description:
      "Crafting intuitive and visually stunning user interfaces and experiences that prioritize usability and drive engagement.",
    icon: PenTool,
    imageUrl: "/Home/service-uiux.png",
    gridClass: "",
    href: "/services/ui-ux-design",
    cta: "Learn More",
  },
];

export default function OurServices() {
  return (
    <div className="flex flex-col items-center bg-black px-4 py-20 sm:px-10">
      <div className="flex w-full max-w-7xl flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl font-bold text-white sm:text-6xl">
              Our Services
            </h2>
            <p className="max-w-xl text-base font-normal text-white">
              From foundational strategy to flawless execution, this is how we
              engineer excellence.
            </p>
          </div>
          <Link
            href="/services"
            className="flex-shrink-0 rounded-full border border-white px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
          >
            View Services
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={cn(
                  "group relative flex flex-col justify-end overflow-hidden rounded-3xl p-8 md:h-[370px]",
                  service.gridClass
                )}
              >
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#191919] via-[#191919]/70 to-transparent" />
                <div className="pointer-events-none absolute inset-0 z-10 transform-gpu transition-all duration-300 group-hover:bg-black/20" />

                <div className="relative z-20 flex transform-gpu flex-col gap-4 text-white transition-all duration-300 group-hover:-translate-y-12">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#273B00]">
                    <Icon className="h-6 w-6 text-[var(--accent-green)]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-medium">{service.title}</h3>
                    <p className="text-base font-normal">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="pointer-events-none absolute bottom-8 left-8 z-20 flex w-full translate-y-10 transform-gpu flex-row items-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Link
                    href={service.href}
                    className="pointer-events-auto flex items-center gap-2 rounded-md bg-[var(--accent-green)] px-4 py-2 text-sm font-medium text-black outline-none focus:outline-none focus:ring-0"
                  >
                    {service.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
