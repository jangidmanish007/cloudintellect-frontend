'use client';
import React from 'react';
import AboutUsHero from './AboutUsHero';
import AboutBridging from './AboutBridging';
import CloudIntellectEdge from './CloudIntellectEdge';
import LeaderShipEdge from './LeaderShipEdge';
import AboutCoreValues from './AboutCoreValues';

export default function MainAbout({ aboutPageData }) {
  const content = aboutPageData?.content || {};

  return (
    <>
      <AboutUsHero hero={content.hero} />
      <AboutBridging bridgingData={content?.bridging} />
      <CloudIntellectEdge edgeData={content?.cloudIntellectEdge} />
      <LeaderShipEdge leadershipData={content?.leadershipEdge} />
      <AboutCoreValues />
    </>
  );
}
