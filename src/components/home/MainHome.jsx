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
      <EcosystemSection ecosystem={homePageData?.pageData?.content?.ecosystem} />
      <CoursesSection courses={homePageData?.pageData?.content?.courses} />
      <LegacySection legacy={homePageData?.pageData?.content?.legacy} />
      <RecognitionSection />
      <PlacementOverview overview={homePageData?.pageData?.content?.placementsOverview} />
      <PlacementNetwork placementData={homePageData?.pageData?.content?.placementNetwork} />
      <IndustryExperience industryExperience={homePageData?.pageData?.content?.industryExperience} />
      <CommunityImage />
      <WhyChooseUs whyChoose={homePageData?.pageData?.content?.whyChoose} />
      <StudentSuccess
        successStories={homePageData?.successStories}
        sectionContent={homePageData?.pageData?.content?.studentSuccess}
      />
      <StudentReviews />
      <AchievementHighlights />
      <NewsAndEvents newsAndEventsData={homePageData?.pageData?.content?.newsAndEvents} />
    </>
  );
}
