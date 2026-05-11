import Faqs from './Faqs';

export default function MainFaq({ faqPageData }) {
  return (
    <>
      <Faqs pageData={faqPageData?.pageData} />
    </>
  );
}
