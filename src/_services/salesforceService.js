import { serverFetch } from "@/_utils/ApiBase";

// Get salesforce-developer page data
export const getSalesforceDeveloperPageData = async () => {
  return serverFetch(process.env.GET_SALESFORCE_DEVELOPER_PAGE);
};


// Get salesforce-marketing-cloud page data
export const getSalesforceMarketingPageData = async () => {
  return serverFetch(process.env.GET_SALESFORCE_MARKETING_CLOUD_PAGE);
};


// Get leadership page data
export const getLeadershipPageData = async () => {
  return serverFetch(process.env.GET_LEADERSHIP_PAGE);
};

