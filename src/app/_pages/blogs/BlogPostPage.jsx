import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/app/_pages/shared/components/icons";
import ProductEnquiryCTA from "@/app/_pages/products/components/ProductEnquiryCTA";
import { getCategoryById } from "@/app/_pages/products/data/products";
import {
  formatPostDate,
  getPostReadTime,
  getRelatedPosts,
} from "./data/blogs";

/**
 * Blog post detail page — article with SEO-friendly structure,
 * related products, and related posts.
 */
export default function BlogPostPage({ post }) {
  const categories = (post.relatedCategories ?? [])
    .map((id) => getCategoryById(id))
    .filter(Boolean);
  const related = getRelatedPosts(post.slug, 3);

  return (
    <main className="flex flex-1 flex-col bg-white text-[#0B0B0B]">
      <article>
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
              <li>
                <Link
                  href="/blogs"
                  className="transition-colors hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
                >
                  Blogs
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#A3A3A3]">
                /
              </li>
              <li className="max-w-[40ch] truncate font-medium text-[#0B0B0B]">
                {post.title}
              </li>
            </ol>
          </div>
        </nav>

        {/* Header */}
        <header className="w-full bg-white">
          <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] pt-10 pb-8 lg:pt-14 lg:pb-10">
          <div className="max-w-[68ch]" data-aos="fade-up">
              <h1 className="text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.1] font-bold tracking-[-0.02em]">
                {post.title}
              </h1>
              <p className="mt-4 text-[15.5px] leading-7 text-[#5f5f5f]">
                {post.excerpt}
              </p>
              <p className="mt-4 text-[13px] text-[#A3A3A3]">
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                {" · "}
                {getPostReadTime(post)} min read
              </p>
            </div>
            <figure data-aos="zoom-in" className="mt-8 overflow-hidden rounded-[4px] border border-black/10 shadow-[0_20px_40px_rgba(0,0,0,0.10)]">
              <Image
                src={post.image.src}
                alt={post.image.alt}
                fill={false}
                className="block h-auto w-full"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
            </figure>
          </div>
        </header>

        {/* Body */}
        <div className="w-full bg-white">
          <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] pb-12 lg:pb-16">
            <div className="max-w-[68ch]">
              <p className="text-[16px] leading-8 text-[#333333]">{post.intro}</p>
              {post.sections.map((section) => (
                <section key={section.heading} className="mt-10">
                  <h2 className="text-[clamp(1.35rem,2.2vw,1.8rem)] leading-tight font-bold tracking-[-0.02em]">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((para, i) => (
                    <p key={i} className="mt-4 text-[15.5px] leading-7 text-[#5f5f5f]">
                      {para}
                    </p>
                  ))}
                </section>
              ))}
              <p className="mt-10 border-l-[3px] border-[#E74725] bg-[#F5F5F5] px-5 py-4 text-[15.5px] leading-7 text-[#0B0B0B]">
                {post.conclusion}
              </p>
            </div>

            {/* Related products */}
            {categories.length > 0 && (
              <div className="mt-12">
                <p className="text-[11px] font-semibold tracking-[0.2em] text-[#5f5f5f] uppercase">
                  Products mentioned in this article
                </p>
                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <Link
                        href={`/products?category=${cat.id}`}
                        className="inline-flex h-[42px] items-center gap-2 rounded-[3px] border border-black/15 px-[20px] text-[14px] font-medium text-[#0B0B0B] transition-colors duration-150 hover:border-[#E74725] hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
                      >
                        {cat.name}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section aria-label="Related articles" className="w-full bg-[#F5F5F5] text-[#0B0B0B]">
          <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] py-12 lg:py-16">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="max-w-[20ch] text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.1] font-bold tracking-[-0.02em]">
                Keep reading<span className="text-[#E74725]">.</span>
              </h2>
              <Link
                href="/blogs"
                className="group inline-flex items-center gap-2 rounded-sm text-[14px] font-semibold text-[#E74725] transition-colors hover:text-[#c93a1c] focus-visible:outline-2 focus-visible:outline-[#E74725]"
              >
                All articles
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-5">
              {related.map((item, i) => (
                <li key={item.slug} data-aos="fade-up" data-aos-delay={i * 90}>
                  <Link
                    href={`/blogs/${item.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-[4px] border border-black/10 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-[#E74725]/60 hover:shadow-[0_16px_36px_rgba(0,0,0,0.10)] focus-visible:outline-2 focus-visible:outline-[#E74725]"
                  >
                    <span className="relative block aspect-[16/9] w-full overflow-hidden bg-white">
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </span>
                    <span className="flex flex-1 flex-col p-5 sm:p-6">
                      <span className="text-[11px] font-semibold tracking-[0.18em] text-[#E74725] uppercase">
                        {item.category}
                      </span>
                      <span className="mt-2 block text-[16px] leading-snug font-bold tracking-tight transition-colors group-hover:text-[#E74725]">
                        {item.title}
                      </span>
                      <span className="mt-4 block text-[12px] text-[#A3A3A3]">
                        {formatPostDate(item.date)} · {getPostReadTime(item)} min read
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <ProductEnquiryCTA />
    </main>
  );
}
