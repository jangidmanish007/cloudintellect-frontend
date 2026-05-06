import { getGalleryPageData, getGalleryCategories, getGalleryImages } from "@/_services/galleryService";
import MainGallery from "@/components/gallery/MainGallery";

// Enable dynamic rendering for this page
export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Gallery - CloudIntellect",
  description: "Browse through our gallery to see moments from our training sessions, events, and celebrations.",
};

export default async function GalleryPage() {
  let galleryPageData = {
    content: {}
  };
  let categoriesData = [];
  let imagesData = [];

  try {
    // Fetch gallery page data (hero section)
    const pageRes = await getGalleryPageData();
    if (pageRes?.status) {
      galleryPageData = pageRes.result;
    }
  } catch (error) {
    console.error('Error fetching gallery page data:', error);
  }

  try {
    // Fetch gallery categories
    const categoriesRes = await getGalleryCategories();
    if (categoriesRes?.status) {
      categoriesData = categoriesRes.result || [];
    }
  } catch (error) {
    console.error('Error fetching gallery categories:', error);
  }

  try {
    // Fetch all gallery images
    const imagesRes = await getGalleryImages();
    if (imagesRes?.status) {
      imagesData = imagesRes.result || [];
    }
  } catch (error) {
    console.error('Error fetching gallery images:', error);
  }

  return (
    <>
      <MainGallery
        galleryPageData={galleryPageData}
        categories={categoriesData}
        initialImages={imagesData}
      />
    </>
  );
}
