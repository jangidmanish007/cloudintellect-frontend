'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

// Static fallback data
const STATIC_DATA = {
  tag: 'SALESFORCE WORKFORCE PARTNER',
  heading: 'Building Industry-Ready',
  headingAccent: 'Salesforce Professionals',
  description: 'We combine Salesforce education with placement support to ensure you are job-ready.',
  descriptionEmphasis: '',
  primaryButtonText: 'Explore Programs',
  primaryButtonHref: '/salesforce-developer',
  secondaryButtonText: 'Download Brochure',
  secondaryButtonHref: '#brochure',
};

export default function AboutCloudintellectHero({ hero }) {
  // Use dynamic data if available, otherwise use static data
  const heroData = hero || STATIC_DATA;
  const bgImageUrl = `${process.env.NEXT_PUBLIC_IMG_PATH}images/gallery/about-us-cloudintellect-bg.webp`;

  return (
    <motion.section className="w-full bg-[#061A33] overflow-hidden">
      <motion.div
        className="relative px-[16px] pt-[180px] xl:pt-[280px] md:pt-[230px] pb-[64px] xl:pb-[100px]"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Background Image with Opacity */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover lg:bg-position-[72%_center] bg-position-[70%_top] lg:opacity-75 opacity-50"
          style={{ backgroundImage: `url('${bgImageUrl}')` }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-10">
            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="flex flex-col gap-4 sm:gap-5 md:gap-6 max-w-full lg:max-w-[747px]"
            >
              {/* Tag */}
              {heroData.tag && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-flex items-center gap-2 bg-[#FFF] backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 w-fit"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#0CA4EB] rounded-full" aria-hidden="true" />
                  <span className="text-dark text-[9px] sm:text-[10px] font-medium tracking-wider uppercase">
                    {heroData.tag}
                  </span>
                </motion.div>
              )}

              {/* Heading */}
              {(heroData.heading || heroData.headingAccent) && (
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="font-excon text-[32px] sm:text-[42px] md:text-[48px] lg:text-[58px] leading-[1.1] sm:leading-[1.15] font-bold text-white"
                >
                  {heroData.heading && (
                    <>
                      {heroData.heading}
                      <br />
                    </>
                  )}
                  {heroData.headingAccent && <span className="text-[#0CA4EB]">{heroData.headingAccent}</span>}
                </motion.h1>
              )}

              {/* Description */}
              {heroData.description && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="font-ranade text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white/90"
                >
                  {heroData.description}{' '}
                  {heroData.descriptionEmphasis && (
                    <span className="font-medium text-white">{heroData.descriptionEmphasis}</span>
                  )}
                </motion.p>
              )}

              {/* Buttons */}
              {(heroData.primaryButtonText || heroData.secondaryButtonText) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2"
                >
                  {heroData.primaryButtonText && (
                    <Link
                      href={heroData.primaryButtonHref || '/salesforce-developer'}
                      className="btn-primary inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium no-underline"
                    >
                      {heroData.primaryButtonText}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                  {heroData.secondaryButtonText && (
                    <Link
                      href={heroData.secondaryButtonHref || '#brochure'}
                      className="btn-outline inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium no-underline"
                    >
                      {heroData.secondaryButtonText}
                      <Download className="w-4 h-4" />
                    </Link>
                  )}
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
