'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { getGalleryImagesClient } from '@/_services/galleryService';
import GallerySkeleton from './GallerySkeleton';
import GalleryModal from '@/components/modals/GalleryModal';
import { motion } from 'framer-motion';

const OurGallery = ({ categories = [], initialImages = [] }) => {
  const [images, setImages] = useState(initialImages);
  const [activeTab, setActiveTab] = useState('all');
  const [loading, setLoading] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tabsContainerRef = useRef(null);
  const activeTabRef = useRef(null);

  // Fetch images when tab changes
  const fetchImages = async (categoryId) => {
    try {
      setLoading(true);
      const response = await getGalleryImagesClient(categoryId);
      if (response?.status) {
        setImages(response.result || []);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTabChange = (categoryId) => {
    setActiveTab(categoryId);
    fetchImages(categoryId);
  };

  // Scroll active tab into center view
  useEffect(() => {
    if (activeTabRef.current && tabsContainerRef.current) {
      const container = tabsContainerRef.current;
      const activeTab = activeTabRef.current;

      const containerWidth = container.offsetWidth;
      const tabLeft = activeTab.offsetLeft;
      const tabWidth = activeTab.offsetWidth;

      const scrollPosition = tabLeft - containerWidth / 2 + tabWidth / 2;

      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [activeTab]);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  const handleNavigate = (newIndex) => {
    setSelectedImageIndex(newIndex);
  };

  // Create tabs: "All Photos" + categories
  const tabs = [{ id: 'all', name: 'All Photos' }, ...categories.map((cat) => ({ id: cat._id, name: cat.name }))];

  return (
    <section className="w-full bg-white py-[80px] lg:py-[64px] px-[16px]">
      <div className="max-w-[1280px] mx-auto">
        {/* Tabs Section */}
        <div className="flex justify-center lg:mb-[52px] mb-[30px]">
          <div
            ref={tabsContainerRef}
            className="flex overflow-x-auto scroll-smooth
                       [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                       bg-white rounded-[8px] border border-[#0000001A] p-[5px] gap-[4px]
                       max-w-full"
            role="tablist"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                ref={activeTab === tab.id ? activeTabRef : null}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => handleTabChange(tab.id)}
                disabled={loading}
                className={[
                  'excon-font relative text-[14px] sm:text-[18px] font-medium rounded-[8px]',
                  'px-[16px] lg:px-[22px] py-[10px] lg:py-[14px]',
                  'whitespace-nowrap cursor-pointer transition-colors duration shrink-0',
                  activeTab === tab.id ? 'text-white' : 'bg-white text-[#0f172a] hover:text-[#009FFF]',
                  loading ? 'opacity-90 cursor-not-allowed' : '',
                ].join(' ')}
              >
                {/* Animated active background pill */}
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="activeGalleryTabPill"
                    className="absolute inset-0 bg-[#009FFF] rounded-[10px] z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        {loading ? (
          <GallerySkeleton />
        ) : images.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="text-center">
              <svg
                className="mx-auto h-16 w-16 text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No images found</h3>
              <p className="text-gray-600">There are no images in this category yet.</p>
            </div>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {images.map((image, index) => (
              <motion.div
                key={image._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-4/3 bg-gray-100"
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={`${process.env.DYNAMIC_IMG_BASE_PATH}${image.image}`}
                  alt={image.title || 'Gallery image'}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Center Badge - Shows on Hover */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-[#0CA4EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Gallery Modal */}
      <GalleryModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        images={images}
        currentIndex={selectedImageIndex || 0}
        onNavigate={handleNavigate}
      />
    </section>
  );
};

OurGallery.displayName = 'OurGallery';

export default OurGallery;
