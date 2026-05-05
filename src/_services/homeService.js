import { serverFetch } from "@/_utils/ApiBase";
import { clientApi } from "@/_utils/clientApi";

export const getPageBySlug = async (slug) => {
  return serverFetch(`${process.env.GET_PAGE_BY_SLUG}${slug}`);
};

// get header carousel slides (client-side)
export const getHeaderCarousel = async () => {
  try {
    const response = await clientApi(process.env.GET_HEADER_CAROUSEL, {
      method: 'GET',
    });
    return response;
  } catch (err) {
    console.error('[getHeaderCarousel] error:', err);
    return { status: false, result: null, message: err.message };
  }
};

// get success stories (StudentSuccessSection)
export const getSuccessStories = async () => {
  return serverFetch(process.env.GET_SUCCESS_STORIES);
};

// submit hero application form (POST) - client-side
export const submitHeroApplication = async (params) => {
  try {
    const response = await clientApi(process.env.HERO_APPLICATION_SUBMIT, {
      method: 'POST',
      body: params,
    });
    return response;
  } catch (err) {
    console.error('[submitHeroApplication] error:', err);
    return { status: false, result: null, message: err.message };
  }
};
