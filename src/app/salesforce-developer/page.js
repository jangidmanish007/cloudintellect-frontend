import { getSalesforceDeveloperPageData } from "@/_services/salesforceService";
import { getMetaDataStatic } from "@/_services/seoService";
import SaleForceDeveloperMain from "../../components/sale-force-developer/SaleForceDeveloperMain";

// Enable dynamic rendering for this page
export const dynamic = 'force-dynamic';

// Generate metadata using SEO service
export async function generateMetadata() {
  return await getMetaDataStatic({
    title: "Salesforce Developer Training - CloudIntellect",
    description: "Master Salesforce development with our comprehensive training program. Learn Apex, Lightning, and more.",
    meta_keywords: "salesforce developer, apex programming, lightning web components, salesforce development, developer certification",
    slug: "salesforce-developer",
  });
}

export default async function SalesforceDeveloperPage() {
  let salesforceDeveloperPageData = {
    content: {}
  };

  try {
    // Fetch salesforce-developer page data from API
    const pageRes = await getSalesforceDeveloperPageData();
    if (pageRes?.status) {
      salesforceDeveloperPageData = pageRes.result;
    }
  } catch (error) {
    console.error('Error fetching salesforce-developer page data:', error);
  }

  return (
    <>
      <SaleForceDeveloperMain salesforceDeveloperPageData={salesforceDeveloperPageData} />
    </>
  );
}
