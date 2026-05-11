import { getSfmcSfdcPageData, getSfmcSfdcBatches } from "@/_services/salesforceService";
import { getMetaDataStatic } from "@/_services/seoService";
import MainSfmSfdCloud from "@/components/sfmc-sfdc-course/MainSfmSfdCloud";

// Enable dynamic rendering for this page
export const dynamic = 'force-dynamic';

// Generate metadata using SEO service
export async function generateMetadata() {
  return await getMetaDataStatic({
    title: "SFMC + SFDC Integration - CloudIntellect",
    description: "Learn to integrate Salesforce Marketing Cloud with Salesforce CRM for powerful marketing automation.",
    meta_keywords: "SFMC SFDC integration, marketing cloud integration, salesforce CRM, marketing automation, cloud integration",
    slug: "sfmc-sfdc",
  });
}

export default async function SFMCSFDCPage() {
  let pageData = {
    content: {}
  };
  let batchesData = [];

  try {
    // Fetch SFMC SFDC page data from API
    const pageRes = await getSfmcSfdcPageData();

    if (pageRes?.status) {
      pageData = pageRes.result;
    }

    // Fetch batches data
    const batchesRes = await getSfmcSfdcBatches();
    if (batchesRes?.status) {
      batchesData = batchesRes.result || [];
    }
  } catch (error) {
    console.error('Error fetching SFMC SFDC page data:', error);
  }

  return (
    <>
      <MainSfmSfdCloud pageData={pageData} batchesData={batchesData} />
    </>
  );
}
