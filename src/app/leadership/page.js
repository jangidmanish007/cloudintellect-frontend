import { getLeadershipPageData } from "@/_services/salesforceService";
import { getMetaDataStatic } from "@/_services/seoService";
import MainLeadership from "@/components/leadership/MainLeadership";

// Enable dynamic rendering for this page
export const dynamic = 'force-dynamic';

// Generate metadata using SEO service
export async function generateMetadata() {
  return await getMetaDataStatic({
    title: "Leadership - CloudIntellect",
    description: "Vision-driven leadership backed by real industry experience at Cloud Intellect.",
    meta_keywords: "cloudintellect leadership, company leaders, industry experts, leadership team, vision",
    slug: "leadership",
  });
}

export default async function LeadershipPage() {
  let leadershipPageData = {
    content: {}
  };

  try {
    // Fetch leadership page data from API
    const pageRes = await getLeadershipPageData();
    if (pageRes?.status) {
      leadershipPageData = pageRes.result;
    }
  } catch (error) {
    console.error('Error fetching leadership page data:', error);
  }

  return (
    <>
      <MainLeadership leadershipPageData={leadershipPageData} />
    </>
  );
}
