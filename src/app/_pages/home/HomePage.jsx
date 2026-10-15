import HeroSlider from "./components/HeroSlider";
import TrustBar from "./components/TrustBar";
import ProjectSlideshow from "./components/ProjectSlideshow";
import IndustriesSlider from "./components/IndustriesSlider";
import AboutSection from "./components/AboutSection";
import CtaSection from "./components/CtaSection";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col bg-white text-[#0B0B0B]">
      <HeroSlider />
      <ProjectSlideshow />
      <AboutSection />
      <TrustBar />
      <IndustriesSlider />
      <CtaSection />
    </main>
  );
}
