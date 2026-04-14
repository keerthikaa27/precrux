import type { Metadata } from "next";
import BlogPostClient from "./BlogPostClient";
import { posts } from "@/lib/posts";
import type { Post } from "@/lib/posts";

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    return {
      title: "Blog | Precrux",
      description: "Precrux blog",
    };
  }

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || "Read this growth breakdown from Precrux.",
    keywords: post.keywords || [],

    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || "Read this growth breakdown from Precrux.",
      images: [`https://precrux.com${post.img}`],
      url: `https://precrux.com/blog/${post.slug}`,
      type: "article",
    },

    alternates: {
      canonical: `https://precrux.com/blog/${post.slug}`,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  return <BlogPostClient slug={params.slug} />;
}