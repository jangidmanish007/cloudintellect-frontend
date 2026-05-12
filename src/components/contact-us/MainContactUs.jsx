'use client';

import ContactForm from './ContactForm';
import ContactHero from './ContactHero';

export default function MainContactUs({ contactPageData }) {
  return (
    <>
      <ContactHero pageData={contactPageData?.pageData} />
      <ContactForm
        contactInfo={contactPageData?.pageData?.content?.contactInfo}
        location={contactPageData?.pageData?.content?.locations?.locations}
      />
    </>
  );
}
