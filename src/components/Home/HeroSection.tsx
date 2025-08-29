import Link from "next/link";
import Image from "next/image";
import { Particles } from "@/components/magicui/particles";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export default function HeroSection() {
  return (
    <div className="relative flex h-screen min-h-[700px] w-full flex-col items-center justify-end overflow-hidden px-4 pb-40 pt-32 md:pb-52 lg:pb-[200px] lg:pt-[80px]">
      <Image
        src="/Home/bg.png"
        alt="Hero Background"
        fill
        className="z-0 object-cover"
        quality={100}
      />

      <Particles
        className="absolute inset-0 z-10"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />

      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 80.32%, #000000 100%)",
        }}
      />

      <div className="relative z-30 flex w-full max-w-[752px] flex-col items-center gap-8 text-center text-white">
        <div className="flex w-full flex-col items-center gap-8">
          <h1 className="w-full text-4xl font-medium leading-tight sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[87px]">
            Building the Future of Digital Experiences
          </h1>
          <p className="w-full max-w-md text-base font-normal leading-6 text-white md:max-w-2xl">
            We partner with visionary brands to architect, build, and scale
            world-class software solutions. From complex enterprise platforms to
            captivating mobile apps, we turn ambitious ideas into market-leading
            realities.
          </p>
        </div>

        <div className="flex flex-row flex-nowrap items-start justify-center gap-3 sm:gap-4 lg:gap-[22px]">
          <Link href="/contact" className="outline-none ">
            <InteractiveHoverButton className="outline-none focus:outline-none focus:ring-0 border-none bg-[var(--accent-green)] px-3 py-2 text-xs text-black sm:px-6 sm:py-3 sm:text-sm lg:px-8">
              Start a Project
            </InteractiveHoverButton>
          </Link>

          <Link href="/services" className="outline-none ">
            <InteractiveHoverButton className="outline-none focus:outline-none focus:ring-0 border-[var(--border-light)] px-2 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm lg:px-8 text-black">
              Explore Our Services
            </InteractiveHoverButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
