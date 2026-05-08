import React from 'react';
import WebinarHero from './WebinarHero';
import UpcomingBatches from './UpcomingBatches';
import WebinarCover from './WebinarCover';
import WhoShouldAttend from './WhoShouldAttend';
import WebinarSuccessStory from './WebinarSuccessStory';
import InformedDecision from './InformedDecision';

export default function MainWebinar({ webinarsPageData, batchesData, topicsData, attendeesData, successStoriesData }) {
  const content = webinarsPageData?.content || {};

  return (
    <>
      <WebinarHero hero={content.hero} />
      <UpcomingBatches batchesData={batchesData} />
      <WebinarCover topicsData={topicsData} />
      <WhoShouldAttend attendeesData={attendeesData} />
      <WebinarSuccessStory successStoriesData={successStoriesData} />
      <InformedDecision makeInformedDecision={content.makeInformedDecision} />
    </>
  );
}
