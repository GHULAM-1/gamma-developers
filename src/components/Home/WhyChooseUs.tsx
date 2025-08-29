import { NumberTicker } from "@/components/magicui/number-ticker";

const stats = [
  {
    value: 17,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    value: 97,
    suffix: "+",
    label: "Products Launched",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

export default function WhyChooseUs() {
  return (
    <div className=" flex flex-col items-center justify-center gap-8 bg-black py-20 px-[var(--landing-page-padding)]">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-4xl font-bold text-white">Why Choose Us</h2>
        <p className="max-w-lg text-base font-normal text-white">
          Discover the stories behind some of our most successful and innovative
          digital experiences.
        </p>
      </div>

      <div className="w-full max-w-7xl rounded-[28px] bg-[#191919] p-8 sm:p-12 lg:p-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative flex h-[250px] flex-col items-center justify-center gap-4 overflow-hidden rounded-[28px] bg-[#2D2D2D]/50 p-8 text-center backdrop-blur-sm"
            >
              <div className="z-10 flex flex-col items-center gap-4">
                <div className="flex items-baseline">
                  <p className="text-6xl font-semibold">
                    <NumberTicker value={stat.value} />
                  </p>
                  <span className="text-6xl font-semibold">{stat.suffix}</span>
                </div>
                <p className="text-base font-semibold text-white">
                  {stat.label}
                </p>
              </div>
              <div className="absolute -bottom-20 left-0 h-24 w-full bg-[var(--accent-green)] opacity-50 blur-[75px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
