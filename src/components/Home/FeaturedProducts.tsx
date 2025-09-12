import Image from "next/image";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

type Product = {
  title: string;
  tags: string[];
  description: string;
  imageUrl: string;
  learnMoreUrl: string;
  logoUrl?: string;
};

const products: Product[] = [
  {
    title: "Hiretics",
    tags: ["Design", "Website", "UI/UX"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    imageUrl: "/Home/featured-hiretics.png",
    learnMoreUrl: "/projects/hiretics",
  },
  {
    title: "Taash Royale",
    tags: ["React native", "Game Dev", "UI/UX"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    imageUrl: "/Home/featured-taash.png",
    learnMoreUrl: "/projects/taash-royale",
    logoUrl: "/Home/featured-taash-logo.png",
  },
];

export default function FeaturedProducts() {
  return (
    <div className="flex flex-col items-center bg-[var(--fp-bg)] px-4 py-16 sm:px-10 sm:py-20">
      <div className="flex w-full max-w-7xl flex-col gap-8">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-4xl font-bold text-[var(--fp-heading-color)] sm:text-5xl lg:text-6xl">
            Featured Products
          </h2>
          <p className="max-w-xl text-base font-normal text-[var(--fp-text-color)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="group relative flex min-h-[500px] w-full flex-col justify-end overflow-hidden rounded-3xl"
            >
              <Image
                src={product.imageUrl}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[var(--fp-card-bg)] via-[var(--fp-card-bg)]/80 to-transparent md:bg-gradient-to-r md:from-[var(--fp-card-bg)]/90 md:via-[var(--fp-card-bg)]/70 md:to-transparent" />

              {product.logoUrl && (
                <div className="absolute right-6 top-6 z-20 h-auto w-[90px] sm:w-[115px]">
                  <Image
                    src={product.logoUrl}
                    alt={`${product.title} Logo`}
                    width={115}
                    height={79}
                    className="h-auto w-full"
                  />
                </div>
              )}

              <div className="relative z-20 flex w-full flex-col justify-end gap-8 p-6 sm:p-8 md:h-full md:w-2/3 lg:w-1/2 md:justify-center md:p-12">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-4xl font-bold text-white">
                      {product.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-[#191919] px-3 py-1 text-sm font-medium text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-base font-normal text-white">
                    {product.description}
                  </p>
                </div>
                <Link href={product.learnMoreUrl} className="outline-none ">
                  <InteractiveHoverButton className="outline-none focus:outline-none focus:ring-0 border-none bg-[var(--accent-green)] px-3 py-2 text-xs text-black sm:px-6 sm:py-3 sm:text-sm lg:px-8">
                    Start a Project
                  </InteractiveHoverButton>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
