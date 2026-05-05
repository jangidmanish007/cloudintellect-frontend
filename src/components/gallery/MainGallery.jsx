import React from 'react';
import GalleryBanner from './GalleryBanner';
import OurGallery from './OurGallery';

export default function MainGallery({ galleryPageData, categories, initialImages }) {
  return (
    <>
      <GalleryBanner galleryPageData={galleryPageData} />
      <OurGallery categories={categories} initialImages={initialImages} />
    </>
  );
}
