import MainTestimonals from "@/components/testimonials/MainTestimonials";
import { getPageBySlug, getSuccessStories } from "@/_services/homeService";
import { getTestimonials } from "@/_services/testimonialsService";
import { getMetaDataStatic } from "@/_services/seoService";

// Enable dynamic rendering for this page
export const dynamic = "force-dynamic";

// Generate metadata using SEO service
export async function generateMetadata() {
  return await getMetaDataStatic({
    title: "Testimonials - CloudIntellect",
    description: "Read what our students say about their experience with CloudIntellect's Salesforce training programs.",
    meta_keywords: "student testimonials, salesforce training reviews, student success, training feedback, cloudintellect reviews",
    slug: "testimonials",
  });
}

export default async function TestimonalsPage() {
  let testimonialsPageData = {
    pageData: null,
    testimonials: [],
    successtoriesData: [],
  };

  try {
    const pageRes = await getPageBySlug("testimonials");
    if (pageRes?.status) {
      testimonialsPageData.pageData = pageRes.result;
    }

    const testimonialsRes = await getTestimonials();
    if (testimonialsRes?.status) {
      testimonialsPageData.testimonials = testimonialsRes.result || [];
    }

    const successStoriesRes = await getSuccessStories();
    if (successStoriesRes?.status) {
      testimonialsPageData.successtoriesData = successStoriesRes.result || [];
    }
  } catch (error) {
    console.error("Error fetching testimonials page data:", error);
  }

  return (
    <>
      <MainTestimonals testimonialsPageData={testimonialsPageData} />
    </>
  );
}
