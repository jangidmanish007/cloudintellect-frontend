import React from 'react';
import HomeBanner from './HomeBanner';
import PromoCarousel from './PromoCarousel';
import EcosystemSection from './EcosystemSection';
import CoursesSection from './CoursesSection';
import LegacySection from './LegacySection';
import RecognitionSection from './RecognitionSection';
import AchievementHighlights from './AchievementHighlights';
import PlacementOverview from './PlacementOverview';
import PlacementNetwork from './PlacementNetwork';
import IndustryExperience from './IndustryExperience';
import CommunityImage from './CommunityImage';
import WhyChooseUs from './WhyChooseUs';
import StudentSuccess from './StudentSuccess';
import StudentReviews from './StudentReviews';
import NewsAndEvents from './NewsAndEvents';

export default function MainHome({ homePageData }) {
  return (
    <>
      <HomeBanner pageData={homePageData?.pageData} />
      <PromoCarousel />
      <div id="ecosystem">
        <EcosystemSection ecosystem={homePageData?.pageData?.content?.ecosystem} />
      </div>
      <div id="course">
        <CoursesSection courses={homePageData?.pageData?.content?.courses} />
      </div>
      <LegacySection legacy={homePageData?.pageData?.content?.legacy} />
      <RecognitionSection />
      <div id="placement">
        <PlacementOverview overview={homePageData?.pageData?.content?.placementsOverview} />
        <PlacementNetwork placementData={homePageData?.pageData?.content?.placementNetwork} />
        <IndustryExperience industryExperience={homePageData?.pageData?.content?.industryExperience} />
      </div>
      <CommunityImage />
      <WhyChooseUs whyChoose={homePageData?.pageData?.content?.whyChoose} />
      <div id="success-stories">
        <StudentSuccess
          successStories={homePageData?.successStories}
          sectionContent={homePageData?.pageData?.content?.studentSuccess}
        />
      </div>
      <div id="reviews">
        <StudentReviews />
      </div>
      <AchievementHighlights />
      <div id="news">
        <NewsAndEvents newsAndEventsData={homePageData?.pageData?.content?.newsAndEvents} />
      </div>
    </>
  );
}
