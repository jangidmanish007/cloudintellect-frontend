'use client';
import React from 'react';
import CoreAdvantages from './CoreAdvantages';
import PlacementAssistance from './PlacementAssistance';
import TrustRecognition from './TrustRecognition';
import ImpactSnapshot from './ImpactSnapshot';
import WhyChooseUsHero from './WhyChooseUsHero';

export default function MainWhyChooseUs({ pageData }) {
  const content = pageData?.content || {};

  return (
    <>
      <WhyChooseUsHero hero={content.hero} />
      <CoreAdvantages coreAdvantages={content.coreAdvantages} />
      <PlacementAssistance placementAssistance={content.placementAssistance} />
      <TrustRecognition trustRecognition={content.trustRecognition} />
      <ImpactSnapshot impactSnapshot={content.impactSnapshot} />
    </>
  );
}
