import MainAbout from "@/components/about/MainAbout";
import { getAboutPageData } from "@/_services/aboutService";
import { getMetaDataStatic } from "@/_services/seoService";

// Enable dynamic rendering for this page
export const dynamic = 'force-dynamic';

// Generate metadata using the SEO service
export async function generateMetadata() {
  return await getMetaDataStatic({
    title: "About Us - Cloud Intellect",
    description: "Learn about Cloud Intellect, a premier Salesforce Workforce Development Partner bridging education and industry.",
    meta_keywords: "cloud intellect, salesforce training, workforce development, salesforce certification, about us",
    slug: "about",
  });
}

export default async function AboutPage() {
  let aboutPageData = {
    content: {}
  };

  try {
    // Fetch about page data from API
    const pageRes = await getAboutPageData('home');
    if (pageRes?.status) {
      aboutPageData = pageRes.result;
    }
  } catch (error) {
    console.error('Error fetching about page data:', error);
  }

  return (
    <>
      <MainAbout aboutPageData={aboutPageData} />
    </>
  );
}
