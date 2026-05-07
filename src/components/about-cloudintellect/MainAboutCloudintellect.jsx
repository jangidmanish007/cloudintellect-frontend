import React from 'react';
import AboutCloudintellectHero from './AboutCloudintellectHero';
import CloudIntellectAdvantage from './CloudIntellectAdvantage';
import SaleforceEcosystem from './SaleforceEcosystem';
import TraningPlacementModal from './TraningPlacementModal';
import WhySaleforceMentor from './WhySaleforceMentor';

export default function MainAboutCloudintellect({ aboutCloudIntellectPageData }) {
  const content = aboutCloudIntellectPageData?.content || {};

  return (
    <>
      <AboutCloudintellectHero hero={content.hero} />
      <CloudIntellectAdvantage cloudIntellectAdvantage={content.cloudIntellectAdvantage} />
      <SaleforceEcosystem salesforceEcosystemShowcase={content.salesforceEcosystemShowcase || null} />
      <TraningPlacementModal trainingPlacementModel={content.trainingPlacementModel || null} />
      <WhySaleforceMentor whySalesforceMentors={content.whySalesforceMentors} />
    </>
  );
}
