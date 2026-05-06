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
  },

  env: {
    VERSION: "1.0.0",
    APP_NAME: "CloudIntellect",
    NEXT_PUBLIC_IMG_PATH: "/",

    // ─── Local URLs ───────────────────────────────────────────────
    PUBLIC_SITE_URL: "http://localhost:3000/",
    NEXT_PUBLIC_SITE_URL: "http://localhost:3000",
    BASE_URL_PATH: "https://deen3evddmddt.cloudfront.net/staging/",
    API_BASE_URL: "https://cloudintellect.in/api/",
    DYNAMIC_IMG_BASE_PATH: "https://cloudintellect.in",

    // ─── Production URLs (uncomment when deploying to production) ─
    // PUBLIC_SITE_URL: "https://www.cloudintellect.com/",
    // NEXT_PUBLIC_SITE_URL: "https://www.cloudintellect.com",
    // BASE_URL_PATH: "https://deen3evddmddt.cloudfront.net/production/",
    // API_BASE_URL: "https://www.cloudintellect.com/api/",
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
    GET_LEADERSHIP_PAGE: "pages/slug/leadership",

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

    // ─── Auth ─────────────────────────────────────────────────────
    ADMIN_LOGIN: "auth/login",
  },
};

export default nextConfig;
