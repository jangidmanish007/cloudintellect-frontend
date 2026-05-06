import React from 'react';
import OurPlacement from './OurPlacement';
import PlacementHero from './PlacementHero';
import PlacementNetwork from '../home/PlacementNetwork';

export default function PlacementMain({ placementsData }) {
  const { pageData, placements } = placementsData || {};
  const hero = pageData?.content?.hero || {};
  const placementNetwork = placementsData?.placementNetwork || {};

  return (
    <>
      <PlacementHero hero={hero} />
      <OurPlacement placements={placements} />
      <PlacementNetwork placementData={placementNetwork} />
    </>
  );
}
