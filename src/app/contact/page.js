import { getPageBySlug } from "@/_services/homeService";
import MainContactUs from "@/components/contact-us/MainContactUs";

export const metadata = {
  title: "Contact Us - CloudIntellect",
  description:
    "Get in touch with our team of cloud experts. We're here to help you transform your business with intelligent cloud solutions.",
};

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
