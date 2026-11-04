import { notFound } from "next/navigation";
import BlogPostPage from "@/app/_pages/blogs/BlogPostPage";
import { getBlogBySlug, getBlogSlugs } from "@/app/_pages/blogs/data/blogs";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/app/lib/seo";

/**
 * Blog post page — statically generated per post with SEO metadata.
 */
export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `${SITE_URL}/blogs/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `${SITE_URL}/blogs/${slug}`,
      siteName: "K Roadtech Safety Solutions",
      images: [{ url: DEFAULT_OG_IMAGE, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "K Roadtech Safety Solutions",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "K Roadtech Safety Solutions",
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}/blogs/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BlogPostPage post={post} />
    </>
  );
}
