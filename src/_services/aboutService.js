import { serverFetch } from "@/_utils/ApiBase";

// Get about page data
export const getAboutPageData = async () => {
  return serverFetch(process.env.GET_ABOUT_PAGE);
};
