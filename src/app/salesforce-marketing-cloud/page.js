import { getSalesforceMarketingPageData } from "@/_services/salesforceService";
import { getMetaDataStatic } from "@/_services/seoService";
import SalesforceMarketingMain from "../../components/salesforce-marketing-cloud/SalesforceMarketingMain";

// Enable dynamic rendering for this page
export const dynamic = 'force-dynamic';

// Generate metadata using SEO service
export async function generateMetadata() {
  return await getMetaDataStatic({
    title: "Salesforce Marketing Cloud Training - CloudIntellect",
    description: "Become a Salesforce Marketing Cloud expert with our industry-leading training programs.",
    meta_keywords: "salesforce marketing cloud, SFMC training, marketing cloud certification, email marketing, marketing automation",
    slug: "salesforce-marketing-cloud",
  });
}

export default async function SalesforceMarketingCloudPage() {
  let salesforceMarketingCloudPageData = {
    content: {}
  };

  try {
    // Fetch salesforce-marketing-cloud page data from API
    const pageRes = await getSalesforceMarketingPageData();
    if (pageRes?.status) {
      salesforceMarketingCloudPageData = pageRes.result;
    }
  } catch (error) {
    console.error('Error fetching salesforce-marketing-cloud page data:', error);
  }

  return (
    <>
      <SalesforceMarketingMain salesforceMarketingCloudPageData={salesforceMarketingCloudPageData} />
    </>
  );
}
