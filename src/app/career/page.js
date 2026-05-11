import { getCareerPageData } from "@/_services/careerService";
import { getMetaDataStatic } from "@/_services/seoService";
import MainCareer from "@/components/career/MainCareer";

// Enable dynamic rendering for this page
export const dynamic = 'force-dynamic';

// Generate metadata using SEO service
export async function generateMetadata() {
  return await getMetaDataStatic({
    title: "Career - Cloud Intellect",
    description: "Join Cloud Intellect and elevate your career in the Salesforce ecosystem",
    meta_keywords: "salesforce careers, cloud computing jobs, salesforce job opportunities, career development, salesforce ecosystem",
    slug: "career",
  });
}

export default async function CareerPage() {
  let careerPageData = {
    content: {}
  };

  try {
    // Fetch career page data from API
    const pageRes = await getCareerPageData();
    if (pageRes?.status) {
      careerPageData = pageRes.result;
    }
  } catch (error) {
    console.error('Error fetching career page data:', error);
  }

  return (
    <>
      <MainCareer careerPageData={careerPageData} />
    </>
  );
}
