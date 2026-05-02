'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const DEFAULT_STATS = [
  { value: '5000+', label: 'LEARNERS TRAINED' },
  { value: '1400+', label: 'PLACED' },
  { value: '90%', label: 'SATISFACTION' },
  { value: '100%', label: 'COMPLIANCE' },
];

function AboutUsHero({ hero }) {
  const heroData = hero || {};
  const stats = heroData.stats && Array.isArray(heroData.stats) ? heroData.stats : DEFAULT_STATS;

  const bgImageUrl = `${process.env.NEXT_PUBLIC_IMG_PATH}images/about-us/about-us-map-bg.webp`;

  return (
    <section className="w-full bg-[#0b1c33] overflow-hidden px-[16px]">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-[1280px] mx-auto bg-no-repeat bg-bottom bg-contain pt-[180px] xl:pt-[280px] md:pt-[230px] md:pb-[80px] pb-[40px] xl:pb-[100px]"
        style={{ backgroundImage: `url('${bgImageUrl}')` }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-col gap-4 sm:gap-5 md:gap-6"
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
                className="font-excon text-[32px] sm:text-[42px] md:text-[48px] lg:text-6xl leading-[1.1] sm:leading-[1.15] font-bold text-white"
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
                className="font-ranade text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white/90 max-w-full lg:max-w-[540px]"
              >
                {heroData.description}
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
                    href={heroData.primaryButtonHref || '#programs'}
                    className="btn-primary inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium no-underline"
                  >
                    {heroData.primaryButtonText}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
                {heroData.secondaryButtonText && (
                  <Link
                    href={heroData.secondaryButtonHref || '#placements'}
                    className="btn-outline inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium no-underline"
                  >
                    {heroData.secondaryButtonText}
                  </Link>
                )}
              </motion.div>
            )}
          </motion.div>

          {/* Right Section - Stats */}
          {stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="flex justify-center lg:justify-center items-center"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-full sm:max-w-[480px] w-full">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-[#0000001A] rounded-[14px] p-4 sm:p-5 md:p-6 flex flex-col gap-1.5 sm:gap-2 border border-white/5 transition-all duration-300 hover:bg-[rgba(0,0,0,0.15)] hover:border-white/10"
                  >
                    <span className="font-excon text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#009FFF] leading-none">
                      {stat.value}
                    </span>
                    <span className="font-ranade text-[10px] sm:text-xs font-medium text-white/70 tracking-wider uppercase">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default AboutUsHero;
