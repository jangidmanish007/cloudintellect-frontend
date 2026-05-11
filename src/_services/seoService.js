export const getMetaDataStatic = async (data) => {
  if (data) {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cloudintellect.com';
    const appName = process.env.APP_NAME || 'Cloud Intellect';

    // Construct the canonical URL
    const canonicalUrl = data.slug
      ? `${siteUrl}/${data.slug}`.replace(/\/+$/, '') // Remove trailing slashes
      : siteUrl;


    // Default image for social media
    const defaultImage = `${siteUrl}/images/cloud-logo-2.png`;
    const socialImage = data.image || defaultImage;

    const metadata = {
      title: data.title,
      description: data.description,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: data.title,
        description: data.description,
        siteName: appName,
        url: canonicalUrl,
        type: 'website',
        images: [
          {
            url: socialImage,
            width: 1200,
            height: 630,
            alt: data.title,
          }
        ],
      },
      twitter: {
        card: 'summary_large_image',
        site: '@cloudintellect',
        title: data.title,
        description: data.description,
        images: [socialImage],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    };

    // Add keywords if provided
    if (data.meta_keywords) {
      metadata.keywords = data.meta_keywords;
    }

    return metadata;
  }

  // Return default metadata if no data provided
  return {
    title: 'Cloud Intellect - Salesforce Training & Certification',
    description: 'Premier Salesforce Workforce Development Partner bridging education and industry.',
  };
};

export const getMetaDataDynamic = async (data, pathPrefix = '') => {
  if (data) {
    const slug = pathPrefix ? `${pathPrefix}/${data.slug}` : data.slug;
    return getMetaDataStatic({ ...data, slug });
  }
  return getMetaDataStatic(null);
};

export const generateStructuredData = (data) => {
  return {
    '@context': 'https://schema.org',
    ...data,
  };
};

export const generateBreadcrumbStructuredData = (breadcrumbs) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cloudintellect.com';

  return generateStructuredData({
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  });
};

export const generateOrganizationStructuredData = () => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cloudintellect.com';

  return generateStructuredData({
    '@type': 'Organization',
    name: 'Cloud Intellect',
    url: siteUrl,
    logo: `${siteUrl}/images/cloud-logo-2.png`,
    description: 'Premier Salesforce Workforce Development Partner bridging education and industry.',
    sameAs: [
      'https://twitter.com/cloudintellect',
      'https://www.linkedin.com/company/cloudintellect',
      'https://www.facebook.com/cloudintellect',
    ],
  });
};
