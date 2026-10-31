import { notFound } from "next/navigation";
import BlogPostPage from "@/app/_pages/blogs/BlogPostPage";
import { getBlogBySlug, getBlogSlugs } from "@/app/_pages/blogs/data/blogs";

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
    title: `${post.title} | K Roadtech Delhi`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `/blogs/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      siteName: "K Roadtech Safety Solutions",
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  return <BlogPostPage post={post} />;
}
