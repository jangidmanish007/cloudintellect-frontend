'use client';
import React from 'react';
import AboutUsHero from './AboutUsHero';
import AboutBridging from './AboutBridging';
import CloudEdge from './CloudEdge';
import LeaderShipEdge from './LeaderShipEdge';
import AboutCoreValues from './AboutCoreValues';

export default function MainAbout({ aboutPageData }) {
  const content = aboutPageData?.content || {};

  console.log('content', content);

  return (
    <>
      <AboutUsHero hero={content.hero} />
      <AboutBridging bridgingData={content?.bridging} />
      <CloudEdge />
      <LeaderShipEdge />
      <AboutCoreValues />
    </>
  );
}
