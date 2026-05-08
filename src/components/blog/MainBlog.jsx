import React from 'react';
import BlogHero from './BlogHero';
import BlogListing from './BlogListing';

export default function MainBlog({ blogPageData, blogPosts, blogCategories }) {
  // Extract hero data from page content

  return (
    <>
      <BlogHero hero={blogPageData?.content?.hero} />
      <BlogListing posts={blogPosts} categories={blogCategories} />
    </>
  );
}
