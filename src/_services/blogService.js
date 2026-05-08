import { serverFetch } from "@/_utils/ApiBase";

// Get blog page data
export const getBlogPageData = async () => {
  return serverFetch(process.env.GET_BLOG_PAGE);
};

// Get all blog posts
export const getBlogPosts = async () => {
  return serverFetch(process.env.GET_BLOG_POSTS);
};

// Get blog post by slug
export const getBlogPostBySlug = async (slug) => {
  return serverFetch(`${process.env.GET_BLOG_POST_BY_SLUG}${slug}`);
};
