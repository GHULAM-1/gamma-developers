import {
  CodeXml,
  MessageCircle,
  BrainCircuit,
  Smartphone,
  Monitor,
  PenTool,
  GitMerge,
  LucideProps,
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
};

const services: Service[] = [
  {
    title: "Software Development",
    description:
      "Architecting robust, scalable, and secure software solutions tailored to your unique business challenges.",
    icon: CodeXml,
    imageUrl: "/Home/service-software.png",
    gridClass: "lg:col-span-2",
  },
  {
    title: "Chat Bot Development",
    description:
      "Creating intelligent, conversational AI chatbots that enhance customer engagement, automate support, and drive sales 24/7.",
    icon: MessageCircle,
    imageUrl: "/Home/service-chatbot.png",
    gridClass: "",
  },
  {
    title: "AI Dev",
    description:
      "Leveraging the power of Artificial Intelligence and Machine Learning to unlock predictive insights, automate complex processes.",
    icon: BrainCircuit,
    imageUrl: "/Home/service-ai.png",
    gridClass: "",
  },
  {
    title: "Mobile App Development",
    description:
      "Building beautiful, high-performance native and cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
    imageUrl: "/Home/service-mobile.png",
    gridClass: "",
  },
  {
    title: "DevOps",
    description:
      "Streamlining your development lifecycle with our DevOps expertise, ensuring rapid, reliable, and continuous delivery of your software.",
    icon: GitMerge,
    imageUrl: "/Home/service-devops.png",
    gridClass: "lg:row-span-2 lg:h-[772px]",
  },
  {
    title: "Web Dev",
    description:
      "Developing responsive, fast, and feature-rich web applications and websites that serve as the digital cornerstone of your brand.",
    icon: Monitor,
    imageUrl: "/Home/service-web.png",
    gridClass: "",
  },
  {
    title: "UI/UX Design",
    description:
      "Crafting intuitive and visually stunning user interfaces and experiences that prioritize usability and drive engagement.",
    icon: PenTool,
    imageUrl: "/Home/service-uiux.png",
    gridClass: "",
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
                  "relative flex flex-col justify-end overflow-hidden rounded-3xl p-8 md:h-[370px]",
                  service.gridClass
                )}
              >
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#191919] via-[#191919]/70 to-transparent" />

                <div className="relative z-20 flex flex-col gap-4 text-white">
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
