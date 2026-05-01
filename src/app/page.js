import MainHome from "@/components/home/MainHome";
import { getPageBySlug, getSuccessStories } from "@/_services/homeService";

// Enable dynamic rendering for this page
export const dynamic = 'force-dynamic';

export default async function Home() {
  let homePageData = {
    pageData: null,
    successStories: []
  };

  try {
    // why choose, achievements, news & events — all come from this single call)
    const pageRes = await getPageBySlug('home');
    if (pageRes?.status) {
      homePageData.pageData = pageRes.result;
    }

    // student success stories
    const successStoriesRes = await getSuccessStories();
    if (successStoriesRes?.status) {
      homePageData.successStories = successStoriesRes.result || [];
    }
  } catch (error) {
    console.error('Error fetching home page data:', error);
  }

  return (
    <>
      <MainHome homePageData={homePageData} />
    </>
  );
}
