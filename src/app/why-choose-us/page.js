import { getWhyChooseUsPageData } from "@/_services/aboutService";
import { getMetaDataStatic } from "@/_services/seoService";
import MainWhyChooseUs from "@/components/why-choose-us/MainWhyChooseUs";

// Generate metadata using SEO service
export async function generateMetadata() {
  return await getMetaDataStatic({
    title: "Why Choose Us - CloudIntellect",
    description: "Learn why CloudIntellect is the preferred choice for Salesforce training and certification programs.",
    meta_keywords: "why choose cloudintellect, best salesforce training, salesforce certification programs, training benefits",
    slug: "why-choose-us",
  });
}

export default async function WhyChooseUsPage() {
  let pageData = null;

  try {
    const response = await getWhyChooseUsPageData();
    if (response?.status) {
      pageData = response.result;
    }
  } catch (error) {
    console.error("Error fetching why-choose-us page data:", error);
  }


  return (
    <>
      <MainWhyChooseUs pageData={pageData} />
    </>
  );
}
