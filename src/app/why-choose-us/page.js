import { getWhyChooseUsPageData } from "@/_services/aboutService";
import MainWhyChooseUs from "@/components/why-choose-us/MainWhyChooseUs";

export const metadata = {
  title: "Why Choose Us - CloudIntellect",
  description: "Learn why CloudIntellect is the preferred choice for Salesforce training and certification programs.",
};

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
