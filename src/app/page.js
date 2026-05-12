import MainHome from "@/components/home/MainHome";
import { getPageBySlug, getSuccessStories } from "@/_services/homeService";
import { getMetaDataStatic } from "@/_services/seoService";

// Enable dynamic rendering for this page
export const dynamic = 'force-dynamic';

// Generate metadata for home page
export async function generateMetadata() {
  return await getMetaDataStatic({
    title: "Cloud Intellect - Premier Salesforce Training & Certification Partner",
    description: "Transform your career with Cloud Intellect's industry-leading Salesforce training programs. Get certified and job-ready with hands-on experience.",
    meta_keywords: "salesforce training, salesforce certification, cloud computing, workforce development, salesforce courses, salesforce developer training",
    slug: "", // Empty slug for home page
  });
}

export default async function Home() {
  let homePageData = {
    pageData: null,
    successStories: [],
    testimonials: []
  };

  try {
    // why choose, achievements, news & events — all come from this single call)
    const pageRes = await getPageBySlug('home');
    if (pageRes?.status) {
      homePageData.pageData = pageRes.result;
    }

    // student success stories
    const successStoriesRes = await getSuccessStories();
    if (successStoriesRes?.status) {
      homePageData.successStories = successStoriesRes.result || [];
      // Use the same API data for testimonials/reviews
      homePageData.testimonials = successStoriesRes.result || [];
    }

  } catch (error) {
    console.error('Error fetching home page data:', error);
  }

  return (
    <>
      <MainHome homePageData={homePageData} />
    </>
  );
}
