import { getBlogPosts } from '@/_services/blogService';

/**
 * Dynamic Blog Sitemap Generator
 * Generates blog-sitemap.xml with all blog posts
 * Similar to: https://www.wscubetech.com/blog/sitemap_index.xml
 */
export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cloudintellect.com';

  try {
    // Fetch all blog posts
    const blogRes = await getBlogPosts();
    let blogPosts = [];

    // Check if result is directly an array or nested in data
    if (blogRes?.status && blogRes?.result) {
      // If result is an array directly
      if (Array.isArray(blogRes.result)) {
        blogPosts = blogRes.result;
      }
      // If result has data property
      else if (blogRes.result.data && Array.isArray(blogRes.result.data)) {
        blogPosts = blogRes.result.data;
      }
    }

    // Filter only published posts
    const publishedPosts = blogPosts.filter(post => post?.isPublished !== false);

    // Generate XML sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${publishedPosts
        .map((post) => {
          const lastmod = post?.updatedAt || post?.createdAt || post?.publishedAt
            ? new Date(post?.updatedAt || post?.createdAt || post?.publishedAt).toISOString()
            : new Date().toISOString();

          return `  <url>
    <loc>${siteUrl}/blog/${post?.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
        })
        .join('\n')}
</urlset>`;

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate',
      },
    });
  } catch (error) {
    console.error('❌ Error generating blog sitemap:', error);

    // Return empty sitemap on error
    const emptySitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`;

    return new Response(emptySitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }
}
