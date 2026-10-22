import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/app/_pages/shared/components/icons";
import ProductEnquiryCTA from "@/app/_pages/products/components/ProductEnquiryCTA";
import {
  BLOG_POSTS,
  formatPostDate,
  getPostReadTime,
} from "./data/blogs";

/**
 * Blogs listing page — hero plus article cards.
 */
export default function BlogsPage() {
  const [featured, ...rest] = BLOG_POSTS;

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
            <li className="font-medium text-[#0B0B0B]">Blogs</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section aria-label="Blog" className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] py-16 lg:py-24">
          <div className="max-w-[62ch]" data-aos="fade-up">
            <h1 className="max-w-[20ch] text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] font-bold tracking-[-0.02em]">
              Road Safety Insights<span className="text-[#E74725]">.</span>
            </h1>
            <p className="mt-6 max-w-[60ch] text-[15.5px] leading-7 text-[#5f5f5f]">
              Practical guides on road safety products, signage, and traffic
              management — from our Delhi-based team, for roads, institutions,
              and commercial spaces across India.
            </p>
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section aria-label="Featured article" className="w-full bg-[#F5F5F5] text-[#0B0B0B]">
        <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] py-12 lg:py-16">
          <Link
            href={`/blogs/${featured.slug}`}
            data-aos="zoom-in"
            className="group grid overflow-hidden rounded-[4px] border border-black/10 bg-white transition-colors hover:border-[#E74725]/60 focus-visible:outline-2 focus-visible:outline-[#E74725] lg:grid-cols-2"
          >
            <span className="relative block aspect-[16/9] w-full overflow-hidden lg:aspect-auto lg:min-h-[320px]">
              <Image
                src={featured.image.src}
                alt={featured.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </span>
            <span className="flex flex-col justify-center p-6 sm:p-10">
              <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] font-semibold tracking-[0.14em] text-[#E74725] uppercase">
                <span>Featured</span>
                <span aria-hidden="true" className="text-[#A3A3A3]">·</span>
                <span className="text-[#5f5f5f]">{featured.category}</span>
              </span>
              <span className="mt-3 block text-[clamp(1.5rem,2.6vw,2.2rem)] leading-tight font-bold tracking-[-0.02em] transition-colors group-hover:text-[#E74725]">
                {featured.title}
              </span>
              <span className="mt-3 block text-[14.5px] leading-7 text-[#5f5f5f]">
                {featured.excerpt}
              </span>
              <span className="mt-4 block text-[12.5px] text-[#A3A3A3]">
                {formatPostDate(featured.date)} · {getPostReadTime(featured)} min read
              </span>
              <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-[#E74725]">
                Read article
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </span>
          </Link>
        </div>
      </section>

      {/* All posts */}
      <section aria-label="All articles" className="w-full bg-white text-[#0B0B0B]">
        <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] py-12 lg:py-16">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {rest.map((post, i) => (
              <li key={post.slug} data-aos="fade-up" data-aos-delay={(i % 3) * 90}>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[4px] border border-black/10 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-[#E74725]/60 hover:shadow-[0_16px_36px_rgba(0,0,0,0.10)] focus-visible:outline-2 focus-visible:outline-[#E74725]"
                >
                  <span className="relative block aspect-[16/9] w-full overflow-hidden bg-[#F5F5F5]">
                    <Image
                      src={post.image.src}
                      alt={post.image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </span>
                  <span className="flex flex-1 flex-col p-5 sm:p-6">
                    <span className="text-[11px] font-semibold tracking-[0.18em] text-[#E74725] uppercase">
                      {post.category}
                    </span>
                    <span className="mt-2 block text-[16.5px] leading-snug font-bold tracking-tight transition-colors group-hover:text-[#E74725]">
                      {post.title}
                    </span>
                    <span className="mt-2 block text-[13.5px] leading-6 text-[#5f5f5f]">
                      {post.excerpt}
                    </span>
                    <span className="mt-4 block text-[12px] text-[#A3A3A3]">
                      {formatPostDate(post.date)} · {getPostReadTime(post)} min read
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProductEnquiryCTA />
    </main>
  );
}
