import { getPageBySlug } from "@/_services/homeService";
import MainContactUs from "@/components/contact-us/MainContactUs";
import { getMetaDataStatic } from "@/_services/seoService";

// Enable dynamic rendering for this page
export const dynamic = 'force-dynamic';

// Generate metadata using SEO service
export async function generateMetadata() {
  return await getMetaDataStatic({
    title: "Contact Us - Cloud Intellect",
    description: "Get in touch with our team of cloud experts. We're here to help you transform your business with intelligent cloud solutions.",
    meta_keywords: "contact cloud intellect, salesforce training contact, get in touch, cloud computing support",
    slug: "contact",
  });
}

export default async function ContactUsPage() {
  let contactPageData = {
    pageData: null,
  };

  try {
    const pageRes = await getPageBySlug("contact");
    if (pageRes?.status) {
      contactPageData.pageData = pageRes.result;
    }
  } catch (error) {
    console.error("Error fetching testimonials page data:", error);
  }

  return <MainContactUs contactPageData={contactPageData} />;
}
