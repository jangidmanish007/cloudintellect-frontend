import PlacementMain from "@/components/placement/PlacementMain";
import { getPlacementsPage, getPlacements } from "@/_services/placementService";
import { getPageBySlug } from "@/_services/homeService";

// Enable dynamic rendering for this page
export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Placements - CloudIntellect',
  description: 'Our Students Work at Top Companies. Meet our recent students now working in real Salesforce roles at leading companies.',
};

export default async function PlacementsPage() {
  let placementsData = {
    pageData: null,
    placements: [],
    placementNetwork: null,
  };

  try {
    // Get placements page content
    const pageRes = await getPlacementsPage();
    if (pageRes?.status) {
      placementsData.pageData = pageRes.result;
    }

    // Get all placements
    const placementsRes = await getPlacements();
    if (placementsRes?.status) {
      placementsData.placements = placementsRes.result || [];
    }

    const netwrokref = await getPageBySlug('home');
    if (netwrokref?.status) {
      placementsData.placementNetwork = netwrokref.result?.content?.placementNetwork;
    }
  } catch (error) {
    console.error('Error fetching placements page data:', error);
  }

  return (
    <>
      <PlacementMain placementsData={placementsData} />
    </>
  );
}
