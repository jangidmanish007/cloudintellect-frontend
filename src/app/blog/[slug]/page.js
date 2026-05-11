import { notFound } from 'next/navigation';
import { getBlogPostBySlug } from "@/_services/blogService";
import { getMetaDataStatic } from "@/_services/seoService";
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

  // Generate SEO metadata with keywords and canonical URL
  return await getMetaDataStatic({
    title: `${blogPost.title} - CloudIntellect Blog`,
    description: blogPost.excerpt || blogPost.meta_description || "Read our latest blog post about Salesforce and cloud technologies.",
    meta_keywords: blogPost.meta_keywords || "salesforce, cloud computing, technology blog, salesforce tips",
    slug: `blog/${slug}`,
    image: blogPost.featured_image || undefined,
  });
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
