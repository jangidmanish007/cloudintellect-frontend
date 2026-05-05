import { serverFetch } from "@/_utils/ApiBase";

// Get salesforce-developer page data
export const getSalesforceDeveloperPageData = async () => {
  return serverFetch(process.env.GET_SALESFORCE_DEVELOPER_PAGE);
};
