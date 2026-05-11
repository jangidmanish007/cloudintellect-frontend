import { getMetaDataStatic } from "@/_services/seoService";
import PrivacyPolicyPage from "@/components/cms-pages/PrivacyPolicyPage";

// Enable dynamic rendering for this page
export const dynamic = 'force-dynamic';

// Generate metadata using SEO service
export async function generateMetadata() {
  return await getMetaDataStatic({
    title: "Privacy Policy - CloudIntellect",
    description: "Learn about how CloudIntellect collects, uses, and protects your personal information.",
    meta_keywords: "privacy policy, data protection, personal information, cloudintellect privacy",
    slug: "privacy-policy",
  });
}

export default function PrivacyPolicy() {
  return <PrivacyPolicyPage />;
}