import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/assets/images";
import { LEADERSHIP } from "../data/leadership";

/**
 * From the Leadership — Kishanshu Mehra.
 * Two-column layout on desktop (portrait left, message right), stacked on mobile.
 */
export default function LeadershipSection() {
  return (
    <section
      aria-label="From the leadership"
      className="w-full bg-white text-[#0B0B0B]"
    >
      <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] py-10 lg:py-12">
        <div className="max-w-[56ch]" data-aos="fade-up">
          <h2 className="mt-2 max-w-[22ch] text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.05] font-bold tracking-[-0.02em]">
            {LEADERSHIP.heading}<span className="text-[#E74725]">.</span>
          </h2>
          <p className="mt-4 text-[clamp(1.15rem,1.8vw,1.45rem)] leading-snug font-semibold tracking-tight text-[#E74725]">
            {LEADERSHIP.intro}
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:mt-10 lg:gap-10 lg:grid-cols-2 items-start">
          {/* Left: portrait */}
          <div className="flex justify-center items-start lg:justify-start" data-aos="zoom-in">
            <figure
              className="max-w-[400px] w-full overflow-hidden rounded-[4px] border border-black/10 shadow-[0_20px_40px_rgba(0,0,0,0.10)]"
            >
              <Image
                src={IMAGES.leadershipImage}
                alt="Portrait of Kishanshu Mehra, Leadership at K Roadtech Safety Solutions"
                className="h-auto w-full block"
                fill={false}
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </figure>
          </div>

          {/* Right: message */}
          <div className="space-y-6" data-aos="fade-up" data-aos-delay="120">
            <blockquote className="space-y-4">
              {LEADERSHIP.message.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-[16px] leading-7 text-[#333333] italic"
                >
                  {para}
                </p>
              ))}
              <span aria-hidden="true" className="ml-1 text-[#E74725]/40">
                &ldquo;
              </span>
            </blockquote>
            <div className="space-y-1">
              <p className="text-[17px] font-bold tracking-tight text-[#0B0B0B]">
                {LEADERSHIP.name}
              </p>
              <p className="text-[13.5px] font-medium text-[#5f5f5f]">
                {LEADERSHIP.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
