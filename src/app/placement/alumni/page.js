import { getAlumniProfile } from "@/_services/alumniService";
import { getPageBySlug, getSuccessStories } from "@/_services/homeService";
import MainAlumni from "@/components/alumni/MainAlumni";

// Enable dynamic rendering for this page
export const dynamic = 'force-dynamic';

export default async function AlumniPage() {
  let alumniPageData = {
    pageData: null,
    successtoriesData: [],
    alumniProfileData: []
  };

  try {
    // Page content (hero, section headings, etc.) from CMS
    const pageRes = await getPageBySlug("alumni-success");
    if (pageRes?.status) {
      alumniPageData.pageData = pageRes.result;
    }

    const successStoriesRes = await getSuccessStories("success-stories");
    if (successStoriesRes?.status) {
      alumniPageData.successtoriesData = successStoriesRes.result || [];
    }

    const alumniProfileRes = await getAlumniProfile("alumni");
    if (alumniProfileRes?.status) {
      alumniPageData.alumniProfileData = alumniProfileRes.result || [];
    }
  } catch (error) {
    console.error('Error fetching alumni page data:', error);
  }

  return (
    <>
      <MainAlumni alumniPageData={alumniPageData} />
    </>
  );
}
