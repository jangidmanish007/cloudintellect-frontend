'use client';

import ContactForm from './ContactForm';
import ContactHero from './ContactHero';

export default function MainContactUs({ contactPageData }) {
  return (
    <>
      <ContactHero pageData={contactPageData?.pageData} />
      <ContactForm pageData={contactPageData?.pageData} />
    </>
  );
}
