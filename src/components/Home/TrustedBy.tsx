import Image from "next/image";
import { Fragment } from "react";

const logos = [
  { src: "/Home/wp-engine.svg", alt: "WP Engine" },
  { src: "/Home/google-cloud.svg", alt: "Google Cloud" },
  { src: "/Home/gsv-ventures.svg", alt: "GSV Ventures" },
  { src: "/Home/pepsico.svg", alt: "Pepsico" },
  { src: "/Home/staq.svg", alt: "Staq" },
  { src: "/Home/bank-al-etihad.svg", alt: "Bank al Etihad" },
  //   { src: "/Home/android-authority.svg", alt: "Android Authority" },
  //   { src: "/Home/playhera.svg", alt: "Playhera" },
  //   { src: "/Home/rockwell-automation.svg", alt: "Rockwell Automation" },
  //   { src: "/Home/mozilla.svg", alt: "Mozilla" },
  //   { src: "/Home/barclays.svg", alt: "Barclays" },
  //   { src: "/Home/provineer.svg", alt: "Provineer" },
  //   { src: "/Home/loyalty-lion.svg", alt: "LoyaltyLion" },
  //   { src: "/Home/soundguys.svg", alt: "SoundGuys" },
  //   { src: "/Home/ometria.svg", alt: "Ometria" },
  //   { src: "/Home/looker.svg", alt: "Looker" },
];

export default function TrustedBy() {
  const allLogos = [...logos, ...logos]; 

  return (
    <div className="flex flex-col items-center justify-center gap-8 bg-black pb-20">
      <h2 className="font-inter text-2xl font-medium text-white">TRUSTED BY</h2>
      <div
        className="relative h-[100px] w-full max-w-7xl overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
        }}
      >
        <div className="animate-marquee flex h-full items-center">
          {allLogos.map((logo, index) => (
            <Fragment key={index}>
              <div className="flex-shrink-0 px-[25px]">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160} 
                  height={28}
                  className="h-7 w-auto"
                />
              </div>
              {index < allLogos.length - 1 && (
                <div className="h-10 w-px flex-shrink-0 bg-[#D2D2D2]/50" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
