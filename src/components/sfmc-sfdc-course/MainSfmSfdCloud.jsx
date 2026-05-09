import React from 'react';
import SfmSfdHero from './SfmSfdHero';
import SelectPath from './SelectPath';
import WhoCanApply from './WhoCanApply';
import SfmSfdCloudAdvantage from './SfmSfdCloudAdvantage';
import CompleteSupportEcoSystem from './CompleteSupportEcoSystem';
import BecomeJobReady from './BecomeJobReady';

export default function MainSfmSfdCloud({ pageData, batchesData }) {
  const content = pageData || {};

  return (
    <>
      <SfmSfdHero hero={content.hero} />
      <SelectPath batchesData={batchesData} />
      <WhoCanApply whoCanApplyData={content.whoCanApply} />
      <SfmSfdCloudAdvantage advantagesData={content.keyAdvantages} />
      <CompleteSupportEcoSystem ecosystemData={content.completeSupportEcosystem} />
      <BecomeJobReady jobReadyData={content.becomeJobReady} />
    </>
  );
}
