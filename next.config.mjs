/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: '/cloudintellect-react',
  // assetPrefix: '/cloudintellect-react',
  // trailingSlash: false,

  // API Proxy Configuration - Solves CORS issues
  async rewrites() {
    return [
      {
        source: '/api-proxy/:path*',
        destination: 'https://cloudintellect.in/api/:path*',
      },
    ];
  },

  // Add headers for CORS support
  async headers() {
    return [
      {
        source: '/api-proxy/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization' },
        ],
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "deen3evddmddt.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "cloudintellect.in",
      },
    ],
    qualities: [100, 75],
  },

  env: {
    VERSION: "1.0.0",
    APP_NAME: "CloudIntellect",
    NEXT_PUBLIC_IMG_PATH: "/",

    // ─── Local URLs ───────────────────────────────────────────────
    PUBLIC_SITE_URL: "http://localhost:3000/",
    NEXT_PUBLIC_SITE_URL: "http://localhost:3000",
    BASE_URL_PATH: "https://deen3evddmddt.cloudfront.net/staging/",
    // Use proxy route to avoid CORS issues
    API_BASE_URL: "/api-proxy/",
    DYNAMIC_IMG_BASE_PATH: "https://cloudintellect.in",

    // ─── Production URLs (uncomment when deploying to production) ─
    // PUBLIC_SITE_URL: "https://www.cloudintellect.com/",
    // NEXT_PUBLIC_SITE_URL: "https://www.cloudintellect.com",
    // BASE_URL_PATH: "https://deen3evddmddt.cloudfront.net/production/",
    // API_BASE_URL: "/api-proxy/",
    // DYNAMIC_IMG_BASE_PATH: "https://cloudintellect.in",

    // ─── Pages / Hero ─────────────────────────────────────────────
    GET_PAGE_BY_SLUG: "pages/slug/",
    HERO_APPLICATION_SUBMIT: "hero-application/submit",
    GET_HEADER_CAROUSEL: "header-carousel",
    GET_SUCCESS_STORIES: "success-stories",
    GET_TESTIMONIALS: "testimonials",
    GET_FAQ: "faq",
    GET_ALUMNI: "alumni-success",
    GET_ALUMNI_PROFILE: "alumni",
    GET_CONTACT: "contact",

    GET_ABOUT_PAGE: "pages/slug/about",
    GET_WHY_CHOOSE_US_PAGE: "pages/slug/why-choose-us",
    GET_SALESFORCE_DEVELOPER_PAGE: "pages/slug/salesforce-developer",
    GET_SALESFORCE_MARKETING_CLOUD_PAGE: "pages/slug/salesforce-marketing-cloud",
    GET_SFMC_SFDC_PAGE: "pages/slug/sfmc-sfdc",
    GET_SFMC_SFDC_BATCHES: "batches",
    GET_LEADERSHIP_PAGE: "pages/slug/leadership",
    GET_ABOUT_CLOUDINTELLECT_PAGE: "pages/slug/about-cloudintellect",

    // ─── Webinars ─────────────────────────────────────────────────
    GET_WEBINARS_PAGE: "pages/slug/webinars",
    GET_WEBINAR_BATCHES: "batches",
    GET_WEBINAR_TOPICS: "webinars/topics",
    GET_WEBINAR_WHO_SHOULD_ATTEND: "webinars/who-should-attend",

    // ─── Form Submissions ─────────────────────────────────────────
    CONTACT_FORM_SUBMIT: "contact/submit",

    // ─── Placements ───────────────────────────────────────────────
    GET_PLACEMENTS_PAGE: "pages/slug/placements",
    GET_PLACEMENTS: "placements",

    // ─── Gallery ──────────────────────────────────────────────────
    GET_GALLERY_PAGE: "pages/slug/gallery",
    GET_GALLERY_CATEGORIES: "gallery/categories",
    GET_GALLERY_IMAGES: "gallery/images",

    // ─── Career ───────────────────────────────────────────────────
    GET_CAREER_PAGE: "pages/slug/career",
    CAREER_LEADS_SUBMIT: "career-leads/submit",

    // ─── Blog ─────────────────────────────────────────────────────
    GET_BLOG_PAGE: "pages/slug/blog",
    GET_BLOG_POSTS: "blog-posts",
    GET_BLOG_CATEGORIES: "blog-posts/meta/categories",
    GET_BLOG_POST_BY_SLUG: "blog-posts/slug/",

    // ─── Auth ─────────────────────────────────────────────────────
    ADMIN_LOGIN: "auth/login",
  },
};

export default nextConfig;
