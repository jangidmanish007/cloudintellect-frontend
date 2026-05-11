'use client';
import MoreSuccessStoriesSection from '../testimonials/MoreSuccessStories';
import AlumniHero from './AlumniHero';
import AlumniProfiles from './AlumniProfiles';
import YourJourney from './YourJourney';

export default function MainAlumni({ alumniPageData }) {
  return (
    <>
      <AlumniHero pageData={alumniPageData?.pageData} />
      <AlumniProfiles pageData={alumniPageData?.pageData} alumniProfile={alumniPageData?.alumniProfileData} />
      <MoreSuccessStoriesSection
        pageData={alumniPageData?.pageData}
        successStories={alumniPageData?.successtoriesData}
      />
      <YourJourney />
    </>
  );
}
