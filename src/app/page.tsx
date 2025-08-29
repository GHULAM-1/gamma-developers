import HeroSection from "@/components/Home/HeroSection";
import OurProjects from "@/components/Home/OurProjects";
import OurServices from "@/components/Home/OurServices";
import TrustedBy from "@/components/Home/TrustedBy";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import FeaturedProducts from "@/components/Home/FeaturedProducts";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <WhyChooseUs />
      <OurProjects />
      <OurServices />
      <FeaturedProducts /> 
    </>
  );
}
