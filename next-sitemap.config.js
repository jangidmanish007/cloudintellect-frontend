/** @type {import('next-sitemap').IConfig} */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cloudintellect.com';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: true, // Generate sitemap index for multiple sitemaps
  sitemapSize: 5000, // Split sitemap if more than 5000 URLs

  // Exclude these paths from main sitemap
  exclude: [
    '/404',
    '/api/*',
    '/api-proxy/*',
    '/admin/*',
    '/_next/*',
    '/blog-sitemap.xml', // Exclude blog sitemap from main sitemap
  ],

  // Robots.txt configuration
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: [
          '/api/',
          '/api-proxy/',
          '/_next/',
          '/admin/',
          '/404',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/api-proxy/', '/admin/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/api-proxy/', '/admin/'],
      },
    ],
    // Additional sitemaps will be added here
    additionalSitemaps: [
      `${siteUrl}/blog-sitemap.xml`, // Blog posts sitemap
    ],
  },

  // Transform function to customize each URL
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    let priority = 0.7;
    let changefreq = 'weekly';

    // Homepage
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    }
    // Courses pages (high priority)
    else if (
      path.includes('/salesforce-developer') ||
      path.includes('/salesforce-marketing-cloud') ||
      path.includes('/sfmc-sfdc') ||
      path.includes('/webinars')
    ) {
      priority = 0.9;
      changefreq = 'weekly';
    }
    // About and important pages
    else if (
      path.includes('/about') ||
      path.includes('/why-choose-us') ||
      path.includes('/placements')
    ) {
      priority = 0.8;
      changefreq = 'monthly';
    }
    // Blog index
    else if (path === '/blog') {
      priority = 0.8;
      changefreq = 'daily';
    }
    // Regular pages
    else if (
      path.includes('/alumni-success') ||
      path.includes('/testimonials') ||
      path.includes('/career') ||
      path.includes('/leadership')
    ) {
      priority = 0.7;
      changefreq = 'weekly';
    }
    // Contact and gallery
    else if (path.includes('/contact') || path.includes('/gallery')) {
      priority = 0.6;
      changefreq = 'monthly';
    }
    // FAQ
    else if (path.includes('/faq')) {
      priority = 0.5;
      changefreq = 'monthly';
    }
    // Privacy policy
    else if (path.includes('/privacy-policy')) {
      priority = 0.3;
      changefreq = 'yearly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },

  // Additional paths to include (static pages)
  additionalPaths: async (config) => {
    const result = [];

    // Add static pages explicitly
    const staticPages = [
      { path: '/', priority: 1.0, changefreq: 'daily' },
      { path: '/about', priority: 0.8, changefreq: 'monthly' },
      { path: '/about-cloudintellect', priority: 0.8, changefreq: 'monthly' },
      { path: '/why-choose-us', priority: 0.8, changefreq: 'monthly' },
      { path: '/leadership', priority: 0.7, changefreq: 'monthly' },
      { path: '/salesforce-developer', priority: 0.9, changefreq: 'weekly' },
      { path: '/salesforce-marketing-cloud', priority: 0.9, changefreq: 'weekly' },
      { path: '/sfmc-sfdc', priority: 0.9, changefreq: 'weekly' },
      { path: '/webinars', priority: 0.9, changefreq: 'weekly' },
      { path: '/placements', priority: 0.8, changefreq: 'weekly' },
      { path: '/alumni-success', priority: 0.7, changefreq: 'weekly' },
      { path: '/testimonials', priority: 0.7, changefreq: 'weekly' },
      { path: '/gallery', priority: 0.6, changefreq: 'weekly' },
      { path: '/blog', priority: 0.8, changefreq: 'daily' },
      { path: '/career', priority: 0.7, changefreq: 'weekly' },
      { path: '/contact', priority: 0.6, changefreq: 'monthly' },
      { path: '/faq', priority: 0.5, changefreq: 'monthly' },
      { path: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
    ];

    staticPages.forEach((page) => {
      result.push({
        loc: page.path,
        changefreq: page.changefreq,
        priority: page.priority,
        lastmod: new Date().toISOString(),
      });
    });

    return result;
  },
};
