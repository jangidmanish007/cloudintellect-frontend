import { getAboutCloudIntellectPageData } from "@/_services/salesforceService";
import { getMetaDataStatic } from "@/_services/seoService";
import MainAboutCloudintellect from "../../components/about-cloudintellect/MainAboutCloudintellect";

// Enable dynamic rendering for this page
export const dynamic = 'force-dynamic';

// Generate metadata using SEO service
export async function generateMetadata() {
  return await getMetaDataStatic({
    title: "About CloudIntellect - CloudIntellect",
    description: "Discover CloudIntellect's journey, expertise, and commitment to delivering world-class Salesforce training and cloud solutions.",
    meta_keywords: "about cloudintellect, company overview, salesforce training expertise, cloud solutions, company mission",
    slug: "about-cloudintellect",
  });
}

export default async function AboutCloudIntellect() {
  let aboutCloudIntellectPageData = {
    content: {}
  };

  try {
    // Fetch about-cloudintellect page data from API
    const pageRes = await getAboutCloudIntellectPageData();
    if (pageRes?.status) {
      aboutCloudIntellectPageData = pageRes.result;
    }
  } catch (error) {
    console.error('Error fetching about-cloudintellect page data:', error);
  }

  return (
    <>
      <MainAboutCloudintellect aboutCloudIntellectPageData={aboutCloudIntellectPageData} />
    </>
  );
}

