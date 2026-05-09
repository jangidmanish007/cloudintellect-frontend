import { notFound } from 'next/navigation';
import { getBlogPostBySlug } from "@/_services/blogService";
import MainBlogPost from "@/components/blog/blog-post/MainBlogPost";

// Enable dynamic rendering for this page
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const { slug } = await params;

  let blogPost = null;

  try {
    const res = await getBlogPostBySlug(slug);
    if (res?.status) {
      blogPost = res.result;
    }
  } catch (error) {
    console.error('Error fetching blog post for metadata:', error);
  }

  // If no blog post found, return default 404 metadata
  if (!blogPost) {
    return {
      title: 'Blog Post Not Found - CloudIntellect Blog',
      description: 'The blog post you are looking for could not be found.',
    };
  }

  return {
    title: `${blogPost.title} - CloudIntellect Blog`,
    description: blogPost.excerpt || "Read our latest blog post about Salesforce and cloud technologies.",
  };
}

export default async function BlogPostDetailPage({ params }) {
  const { slug } = await params;

  let blogPost = null;

  try {
    // Fetch blog post data from API
    const res = await getBlogPostBySlug(slug);

    if (res?.status) {
      blogPost = res.result;
    }
  } catch (error) {
    console.error('Error fetching blog post:', error);
  }

  // If no blog post found, trigger Next.js 404 page
  if (!blogPost) {
    notFound();
  }

  return (
    <>
      <MainBlogPost blogPost={blogPost} />
    </>
  );
}
