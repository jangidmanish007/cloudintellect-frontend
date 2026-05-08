import {
  getWebinarsPageData,
  getWebinarBatches,
  getWebinarTopics,
  getWebinarWhoShouldAttend
} from "@/_services/webinarService";
import { getSuccessStories } from "@/_services/homeService";
import MainWebinar from "@/components/webinar/MainWebinar";

// Enable dynamic rendering for this page
export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Webinars - CloudIntellect",
  description: "Join our free webinars and learn from industry experts about Salesforce and cloud technologies.",
};

export default async function WebinarsPage() {
  let webinarsPageData = {
    content: {}
  };
  let batchesData = [];
  let topicsData = [];
  let attendeesData = [];
  let successStoriesData = [];

  try {
    // Fetch webinars page data from API
    const pageRes = await getWebinarsPageData();
    if (pageRes?.status) {
      webinarsPageData = pageRes.result;
    }

    // Fetch batches data
    const batchesRes = await getWebinarBatches();

    if (batchesRes?.status) {
      batchesData = batchesRes.result || [];
    }

    // Fetch topics data
    const topicsRes = await getWebinarTopics();
    if (topicsRes?.status) {
      topicsData = topicsRes.result || [];
    }

    // Fetch who should attend data
    const attendeesRes = await getWebinarWhoShouldAttend();
    if (attendeesRes?.status) {
      attendeesData = attendeesRes.result || [];
    }

    // Fetch success stories data
    const successStoriesRes = await getSuccessStories();
    if (successStoriesRes?.status) {
      successStoriesData = successStoriesRes.result || [];
    }
  } catch (error) {
    console.error('Error fetching webinars page data:', error);
  }

  return (
    <>
      <MainWebinar
        webinarsPageData={webinarsPageData}
        batchesData={batchesData}
        topicsData={topicsData}
        attendeesData={attendeesData}
        successStoriesData={successStoriesData}
      />
    </>
  );
}
