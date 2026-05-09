import React from 'react';
import BlogPostContent from './BlogPostContent';
import BlogPostHero from './BlogPostHero';

export default function MainBlogPost({ blogPost }) {
  // Transform blog post data to hero format
  const heroData = blogPost
    ? {
        tag: blogPost.category || 'BLOG POST',
        heading: blogPost.title || '',
        date: blogPost.publishedAt || '',
      }
    : null;

  return (
    <>
      <BlogPostHero hero={heroData} />
      <BlogPostContent blogPost={blogPost} />
    </>
  );
}
