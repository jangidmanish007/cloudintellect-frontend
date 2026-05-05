import SaleForceDeveloperMain from "../../components/sale-force-developer/SaleForceDeveloperMain";
import { getSalesforceDeveloperPageData } from "@/_services/salesforceDeveloperService";

// Enable dynamic rendering for this page
export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Salesforce Developer Training - CloudIntellect",
  description: "Master Salesforce development with our comprehensive training program. Learn Apex, Lightning, and more.",
};

export default async function SalesforceDeveloper() {
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
