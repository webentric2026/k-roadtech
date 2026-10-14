const PARAGRAPHS = [
  "K Roadtech Safety Solutions provides a comprehensive range of road safety equipment, traffic management products, and signage solutions designed to support safer and more organized infrastructure. From road studs, traffic cones, and reflective safety wear to highway signboards and illuminated safety signs, our product portfolio addresses diverse road safety and infrastructure requirements.",
  "We understand the importance of visibility, clear communication, and reliable safety products in modern transportation environments. Our focus is on providing practical solutions that help businesses, contractors, and infrastructure projects meet their road safety needs.",
  "With products spanning road signage, traffic control equipment, pedestrian safety, and specialized safety solutions, K Roadtech Safety Solutions aims to serve a wide range of applications across transportation and infrastructure.",
  "Our commitment is simple: to contribute to safer journeys and better infrastructure through effective road safety solutions.",
];

const HIGHLIGHTS = [
  {
    title: "Comprehensive Product Range",
    desc: "Road signage, traffic safety equipment, reflective products, and more.",
  },
  {
    title: "Solutions for Diverse Applications",
    desc: "Products for highways, urban roads, construction sites, and infrastructure facilities.",
  },
  {
    title: "Quality-Focused Approach",
    desc: "Products selected to address different safety, visibility, and traffic management requirements.",
  },
  {
    title: "Project & Bulk Enquiries",
    desc: "Assistance for customers sourcing products for individual requirements and larger infrastructure projects.",
  },
];

import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/assets/images";
import { ArrowRight } from "@/app/_pages/shared/components/icons";

/**
 * About section — company story plus key highlights.
 */
export default function AboutSection() {
  return (
    <section aria-label="About K Roadtech" className="w-full bg-white text-[#0B0B0B]">
      <div className="mx-auto grid w-full max-w-[1600px] gap-12 px-[clamp(20px,5vw,80px)] py-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:py-24">
        <div>
          <h2 className="text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.05] font-bold tracking-[-0.02em]">
            Who We Are<span className="text-[#E74725]">.</span>
          </h2>
          <p className="mt-4 text-[clamp(1.15rem,1.8vw,1.45rem)] leading-snug font-semibold tracking-tight text-[#E74725]">
            Building Safer Roads Through Reliable Safety Solutions.
          </p>
          <figure className="mt-8 max-w-[440px] overflow-hidden rounded-[4px] border border-black/10">
            <Image
              src={IMAGES.aboutImage}
              alt="Road safety product range — signage, cones, barriers, studs and safety wear on a highway"
              className="h-auto w-full"
            />
          </figure>
          <Link
            href="/about"
            className="group mt-7 inline-flex h-[48px] items-center gap-2 rounded-[3px] bg-[#0B0B0B] px-[28px] text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-[#E74725] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E74725]"
          >
            Know more about us
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <div>
          <div className="flex flex-col gap-4">
            {PARAGRAPHS.map((p, i) => (
              <p
                key={i}
                className={`leading-7 ${i === 0
                  ? "text-[16px] text-[#333333]"
                  : "text-[15px] text-[#5f5f5f]"
                  }`}
              >
                {p}
              </p>
            ))}
          </div>

          <h3 className="mt-10 text-[19px] font-bold tracking-tight">
            Key Highlights
          </h3>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {HIGHLIGHTS.map((h, i) => (
              <li
                key={h.title}
                className="rounded-[4px] border border-black/10 bg-[#F5F5F5] p-5"
              >
                <p className="mt-2 text-[15px] font-bold tracking-tight">
                  {h.title}
                </p>
                <p className="mt-1.5 text-[14px] leading-6 text-[#5f5f5f]">
                  {h.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
