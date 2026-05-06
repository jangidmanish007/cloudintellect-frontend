import { getCareerPageData } from "@/_services/careerService";
import MainCareer from "@/components/career/MainCareer";

// Enable dynamic rendering for this page
export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Career - Cloud Intellect",
  description: "Join Cloud Intellect and elevate your career in the Salesforce ecosystem",
};

export default async function CareerPage() {
  let careerPageData = {
    content: {}
  };

  try {
    // Fetch career page data from API
    const pageRes = await getCareerPageData();
    if (pageRes?.status) {
      careerPageData = pageRes.result;
    }
  } catch (error) {
    console.error('Error fetching career page data:', error);
  }

  return (
    <>
      <MainCareer careerPageData={careerPageData} />
    </>
  );
}
