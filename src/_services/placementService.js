import { serverFetch } from "@/_utils/ApiBase";
import { clientApi } from "@/_utils/clientApi";

// Get placements page content by slug (server-side)
export const getPlacementsPage = async () => {
  return serverFetch(process.env.GET_PLACEMENTS_PAGE);
};

// Get all placements (server-side)
export const getPlacements = async () => {
  return serverFetch(process.env.GET_PLACEMENTS);
};

// Get all placements (client-side)
export const getPlacementsClient = async () => {
  try {
    const response = await clientApi(process.env.GET_PLACEMENTS, {
      method: 'GET',
    });
    return response;
  } catch (err) {
    console.error('[getPlacementsClient] error:', err);
    return { status: false, result: null, message: err.message };
  }
};
