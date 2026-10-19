import AboutHero from "./components/AboutHero";
import LeadershipSection from "./components/LeadershipSection";
import MissionVisionSection from "./components/MissionVisionSection";
import ValuesSection from "./components/ValuesSection";
import CompanyStats from "./components/CompanyStats";
import AboutCTA from "./components/AboutCTA";

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col bg-white text-[#0B0B0B]">
      <AboutHero />
      <LeadershipSection />
      <MissionVisionSection />
      <ValuesSection />
      <CompanyStats />
      <AboutCTA />
    </main>
  );
}
