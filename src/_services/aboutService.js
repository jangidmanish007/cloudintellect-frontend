import { serverFetch } from "@/_utils/ApiBase";

// Get about page data
export const getAboutPageData = async () => {
  return serverFetch(process.env.GET_ABOUT_PAGE);
};

// Get why-choose-us page data
export const getWhyChooseUsPageData = async () => {
  return serverFetch(process.env.GET_WHY_CHOOSE_US_PAGE);
};