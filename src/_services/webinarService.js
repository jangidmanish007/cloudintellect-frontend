import { serverFetch } from "@/_utils/ApiBase";

// Get webinars page data
export const getWebinarsPageData = async () => {
  return serverFetch(process.env.GET_WEBINARS_PAGE);
};

// Get webinar batches
export const getWebinarBatches = async () => {
  return serverFetch(process.env.GET_WEBINAR_BATCHES);
};

// Get webinar topics
export const getWebinarTopics = async () => {
  return serverFetch(process.env.GET_WEBINAR_TOPICS);
};

// Get who should attend
export const getWebinarWhoShouldAttend = async () => {
  return serverFetch(process.env.GET_WEBINAR_WHO_SHOULD_ATTEND);
};
