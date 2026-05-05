import { serverFetch } from "@/_utils/ApiBase";
import { clientApi } from "@/_utils/clientApi";

// Get gallery page data (hero section, etc.)
export const getGalleryPageData = async () => {
  return serverFetch(process.env.GET_GALLERY_PAGE);
};

// Get gallery categories
export const getGalleryCategories = async () => {
  return serverFetch(process.env.GET_GALLERY_CATEGORIES);
};

// Get gallery images (optionally filtered by category)
export const getGalleryImages = async (categoryId = null) => {
  const endpoint = categoryId && categoryId !== 'all'
    ? `${process.env.GET_GALLERY_IMAGES}?category=${categoryId}`
    : process.env.GET_GALLERY_IMAGES;
  return serverFetch(endpoint);
};

// Client-side API calls (for interactive filtering)
export const getGalleryImagesClient = async (categoryId = null) => {
  const endpoint = categoryId && categoryId !== 'all'
    ? `${process.env.GET_GALLERY_IMAGES}?category=${categoryId}`
    : process.env.GET_GALLERY_IMAGES;
  return clientApi(endpoint, { method: 'GET' });
};
