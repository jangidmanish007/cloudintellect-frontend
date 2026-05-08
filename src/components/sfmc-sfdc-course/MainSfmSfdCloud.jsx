import React from 'react';
import SfmSfdHero from './SfmSfdHero';
import SelectPath from './SelectPath';
import WhoCanApply from './WhoCanApply';
import SfmSfdCloudAdvantage from './SfmSfdCloudAdvantage';
import CompleteSupportEcoSystem from './CompleteSupportEcoSystem';
import BecomeJobReady from './BecomeJobReady';

export default function MainSfmSfdCloud({ pageData }) {
  const content = pageData?.content || {};

  console.log('content', pageData);
  return (
    <>
      <SfmSfdHero hero={content.hero} />
      <SelectPath pathsData={content.selectPath?.paths} />
      <WhoCanApply whoCanApplyData={content.whoCanApply} />
      <SfmSfdCloudAdvantage advantagesData={content.keyAdvantages} />
      <CompleteSupportEcoSystem ecosystemData={content.completeSupportEcosystem} />
      <BecomeJobReady jobReadyData={content.becomeJobReady} />
    </>
  );
}
