import { getBlogPageData, getBlogPosts } from "@/_services/blogService";
import MainBlog from "@/components/blog/MainBlog";

// Enable dynamic rendering for this page
export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Blog - CloudIntellect",
  description: "Stay updated with the latest insights, tips, and trends in Salesforce and cloud technologies.",
};

// Hardcoded categories matching the API response
const BLOG_CATEGORIES = [
  "Admin & Reports",
  "Development (Apex/LWC)",
  "Training & Career"
];

export default async function BlogListingPage() {
  let blogPageData = {
    content: {}
  };
  let blogPosts = [];

  try {
    // Fetch blog page data from API
    const pageRes = await getBlogPageData();
    if (pageRes?.status) {
      blogPageData = pageRes.result;
    }
  } catch (error) {
    console.error('Error fetching blog page data:', error);
  }

  try {
    // Fetch blog posts from API (all posts initially)
    const postsRes = await getBlogPosts();
    if (postsRes?.status) {
      blogPosts = postsRes.result;
    }
  } catch (error) {
    console.error('Error fetching blog posts:', error);
  }

  return (
    <>
      <MainBlog
        blogPageData={blogPageData}
        blogPosts={blogPosts}
        blogCategories={BLOG_CATEGORIES}
      />
    </>
  );
}
