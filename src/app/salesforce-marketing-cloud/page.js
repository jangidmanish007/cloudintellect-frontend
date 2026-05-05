import { getSalesforceMarketingPageData } from "@/_services/salesforceService";
import SalesforceMarketingMain from "../../components/salesforce-marketing-cloud/SalesforceMarketingMain";

// Enable dynamic rendering for this page
export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Salesforce Marketing Cloud Training - CloudIntellect",
  description: "Become a Salesforce Marketing Cloud expert with our industry-leading training programs.",
};

export default async function SalesforceMarketingCloud() {
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
