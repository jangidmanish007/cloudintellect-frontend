import { getAboutCloudIntellectPageData } from "@/_services/salesforceService";
import MainAboutCloudintellect from "../../components/about-cloudintellect/MainAboutCloudintellect";

// Enable dynamic rendering for this page
export const dynamic = 'force-dynamic';

export const metadata = {
  title: "About CloudIntellect - CloudIntellect",
  description: "Discover CloudIntellect's journey, expertise, and commitment to delivering world-class Salesforce training and cloud solutions.",
};

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

