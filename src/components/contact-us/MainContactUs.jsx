"use client";

import ContactFormSection from "./ContactFormSection";
import ContactHeroSection from "./ContactHeroSection";

export default function MainContactUs({ contactPageData }) {
    console.log("contactPageData", contactPageData)
    return (
        <>
            <ContactHeroSection pageData={contactPageData?.pageData} />
            <ContactFormSection pageData={contactPageData?.pageData} />
        </>
    );
}
