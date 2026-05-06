import React from 'react';
import CareerHero from './CareerHero';
import CareerWhyWorkWithUs from './CareerWhyWorkWithUs';
import GrowsTogether from './GrowsTogether';
import CurrentOpening from './CurrentOpening';

export default function MainCareer({ careerPageData }) {
  const content = careerPageData?.content || {};

  return (
    <>
      <CareerHero hero={content.hero} />
      <CareerWhyWorkWithUs whyWork={content.whyWork} />
      <GrowsTogether culture={content.culture} />
      <CurrentOpening openings={content.openings} />
    </>
  );
}
