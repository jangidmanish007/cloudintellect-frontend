import MainTestimonals from "@/components/testimonials/MainTestimonials";
import { getPageBySlug, getSuccessStories } from "@/_services/homeService";
import { getTestimonials } from "@/_services/testimonialsService";

// Enable dynamic rendering for this page
export const dynamic = 'force-dynamic';

export default async function TestimonalsPage() {
  let testimonialsPageData = {
    pageData: null,
    testimonials: [],
    successtoriesData: []
  };

  try {
    // Page content (hero, section headings, etc.) from CMS
    const pageRes = await getPageBySlug("testimonials");
    if (pageRes?.status) {
      testimonialsPageData.pageData = pageRes.result;
    }

    // Testimonials list
    const testimonialsRes = await getTestimonials();
    if (testimonialsRes?.status) {
      testimonialsPageData.testimonials = testimonialsRes.result || [];
    }

    const successStoriesRes = await getSuccessStories();
    if (successStoriesRes?.status) {
      testimonialsPageData.successtoriesData = successStoriesRes.result || [];
    }
  } catch (error) {
    console.error('Error fetching testimonials page data:', error);
  }

  return (
    <>
      <MainTestimonals testimonialsPageData={testimonialsPageData} />
    </>
  );
}
