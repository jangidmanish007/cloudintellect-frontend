import { serverFetch } from "@/_utils/ApiBase";

// Get career page data
export const getCareerPageData = async () => {
  return serverFetch(process.env.GET_CAREER_PAGE);
};
