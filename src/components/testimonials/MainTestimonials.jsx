'use client';
import TestimonialsGrid from './TestimonialsGrid';
import TestimonialsHero from './TestimonialsHero';
import MoreSuccessStories from './MoreSuccessStories';
import BeNextSuccessStory from './BeNextSuccessStory';

export default function MainTestimonials({ testimonialsPageData }) {
  return (
    <>
      <TestimonialsHero pageData={testimonialsPageData?.pageData} />
      <TestimonialsGrid
        testimonials={testimonialsPageData?.testimonials || []}
        pageData={testimonialsPageData?.pageData}
      />
      <MoreSuccessStories
        pageData={testimonialsPageData?.pageData}
        successStories={testimonialsPageData?.successtoriesData}
      />
      <BeNextSuccessStory pageData={testimonialsPageData?.pageData} />
    </>
  );
}
