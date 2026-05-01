import MainFaq from "@/components/faq/MainFaq";
import { getPageBySlug } from "@/_services/homeService";

// Enable dynamic rendering for this page
export const dynamic = 'force-dynamic';

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
