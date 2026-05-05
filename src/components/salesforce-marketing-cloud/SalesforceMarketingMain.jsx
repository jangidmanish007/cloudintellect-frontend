import React from 'react';
import SalesforceMarketingHero from './SalesforceMarketingHero';
import SaleforceMarketingTopics from './SaleforceMarketingTopics';
import SaleforceMarketingCareer from './SaleforceMarketingCareer';

export default function SalesforceMarketingMain({ salesforceMarketingCloudPageData }) {
  const content = salesforceMarketingCloudPageData?.content || {};

  return (
    <>
      <SalesforceMarketingHero hero={content.hero} />
      <SaleforceMarketingTopics sfmcTopics={content.sfmcTopics} />
      <SaleforceMarketingCareer />
    </>
  );
}
