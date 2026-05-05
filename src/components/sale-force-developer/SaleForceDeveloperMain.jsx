import React from 'react';
import SaleForceDeveloperHero from './SaleForceDeveloperHero';
import SaleForceDeveloperTopic from './SaleForceDeveloperTopic';
import SaleForceCareerOpportunities from './SaleForceCareerOpportunities';

export default function SaleForceDeveloperMain({ salesforceDeveloperPageData }) {
  const content = salesforceDeveloperPageData?.content || {};

  console.log('content', content);

  return (
    <>
      <SaleForceDeveloperHero hero={content.hero} />
      <SaleForceDeveloperTopic sfdcTopics={content.sfdcTopics} />
      <SaleForceCareerOpportunities sfdcCareerOpportunities={content.sfdcCareerOpportunities} />
    </>
  );
}
