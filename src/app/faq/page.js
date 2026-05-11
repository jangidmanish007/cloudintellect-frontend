import MainFaq from "@/components/faq/MainFaq";
import { getPageBySlug } from "@/_services/homeService";
import { getMetaDataStatic } from "@/_services/seoService";

// Enable dynamic rendering for this page
export const dynamic = 'force-dynamic';

// Generate metadata using SEO service
export async function generateMetadata() {
  return await getMetaDataStatic({
    title: "FAQ - CloudIntellect",
    description: "Find answers to frequently asked questions about CloudIntellect's Salesforce training programs and services.",
    meta_keywords: "faq, frequently asked questions, salesforce training questions, course information, training support",
    slug: "faq",
  });
}

export default async function FaqPage() {
  let faqPageData = {
    pageData: null
  };

  try {
    const pageRes = await getPageBySlug("faq");
    if (pageRes?.status) {
      faqPageData.pageData = pageRes.result;
    }
  } catch (error) {
    console.error('Error fetching FAQ page data:', error);
  }

  return (
    <>
      <MainFaq faqPageData={faqPageData} />
    </>
  );
}
