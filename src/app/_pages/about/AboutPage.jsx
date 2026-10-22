import Link from "next/link";
import AboutHero from "./components/AboutHero";
import LeadershipSection from "./components/LeadershipSection";
import MissionVisionSection from "./components/MissionVisionSection";
import ValuesSection from "./components/ValuesSection";
import CompanyStats from "./components/CompanyStats";
import AboutCTA from "./components/AboutCTA";

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col bg-white text-[#0B0B0B]">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="w-full bg-white text-[#0B0B0B]">
        <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] py-4 lg:py-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-[12.5px] text-[#5f5f5f]">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#A3A3A3]">
              /
            </li>
            <li className="font-medium text-[#0B0B0B]">About Us</li>
          </ol>
        </div>
      </nav>
      <AboutHero />
      <LeadershipSection />
      <MissionVisionSection />
      <ValuesSection />
      <CompanyStats />
      <AboutCTA />
    </main>
  );
}
