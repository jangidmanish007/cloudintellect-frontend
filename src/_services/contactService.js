import { serverFetch } from "@/_utils/ApiBase";

// Get all active testimonials (public)
export const getContact = async () => {
  return serverFetch(process.env.GET_CONTACT);
};
