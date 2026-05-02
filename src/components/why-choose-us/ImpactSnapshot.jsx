'use client';

import React from 'react';
import { motion } from 'framer-motion';
import impactSnapshotData from './static-data/impactSnapshot.json';
import { ArrowRight } from 'lucide-react';

export default function ImpactSnapshot({ impactSnapshot }) {
  // Use dynamic content if available, otherwise fallback to static JSON
  const data = impactSnapshot || impactSnapshotData;
  const headingLight = data.headingLight || impactSnapshotData.headingLight;
  const headingBold = data.headingBold || impactSnapshotData.headingBold;
  const metrics = Array.isArray(data.metrics) && data.metrics.length > 0 ? data.metrics : impactSnapshotData.metrics;
  const tagline = data.tagline || impactSnapshotData.tagline;
  const ctaHeading = data.ctaHeading || impactSnapshotData.ctaHeading;
  const ctaDescription = data.ctaDescription || impactSnapshotData.ctaDescription;
  const ctaText = data.ctaText || impactSnapshotData.ctaText;
  const ctaHref = data.ctaHref || impactSnapshotData.ctaHref;

  return (
    <section className="w-full bg-white py-[40px] lg:py-20 md:py-16 sm:py-14">
      <div className="max-w-[1280px] mx-auto px-6 md:px-5 sm:px-4">
        {/* Title */}
        <motion.h2
          className="text-center mb-10 lg:mb-14 md:mb-12 sm:mb-10 leading-normal
           text-black font-excon text-[32px] lg:text-5xl md:text-4xl sm:text-[32px] font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {headingLight}
          <span className="ml-1 font-bold">{headingBold}</span>
        </motion.h2>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 md:gap-y-14 md:gap-x-0 sm:gap-y-8 mb-20 lg:mb-20 md:mb-16 sm:mb-12 items-center">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
            >
              <div className="flex flex-col items-center gap-3 md:gap-2 sm:gap-2 text-center px-4 md:px-8 sm:px-6 w-full">
                <motion.span
                  className="font-excon text-[32px] lg:text-[60px] md:text-[52px] sm:text-[48px] font-bold text-[#009FFF] leading-[1.1]"
                  whileHover={{
                    scale: 1.04,
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                >
                  {metric.value}
                </motion.span>
                <span className="font-ranade text-xs md:text-xs sm:text-sm font-semibold text-black tracking-[0.08em] uppercase leading-[1.4]">
                  {metric.label}
                </span>
              </div>
              {/* Vertical Divider - Only show on desktop between items */}
              {/* {index !== metrics.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[60%] w-px bg-[#000000] lg:block md:hidden sm:hidden" />
              )} */}
              {/* Tablet divider - only show between items in the same row (odd index items) */}
              {index % 2 === 0 && index !== metrics.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[60%] w-px bg-[#000000]  md:block sm:hidden hidden" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          className="bg-[#FAF7F0] rounded-3xl border border-[#0000001A] md:rounded-2xl sm:rounded-xl px-[18px] py-[30px] lg:px-14 lg:py-12 md:px-10 md:py-10 sm:px-5 sm:py-7 text-center max-w-full mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Tagline */}
          <motion.div
            className="inline-flex items-center gap-2 mb-6 md:mb-5 sm:mb-4 font-excon text-[10px] md:text-[9px] sm:text-[9px] font-medium text-black tracking-wider bg-white uppercase px-3 py-[5px] md:px-3 md:py-1 sm:px-2.5 sm:py-1 rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span
              className="w-2 h-2 md:w-1.5 md:h-1.5 sm:w-1.5 sm:h-1.5 rounded-full bg-[#009FFF] shrink-0"
              aria-hidden="true"
            />
            <span>{tagline}</span>
          </motion.div>

          {/* CTA Heading */}
          <motion.h3
            className="font-excon text-[34px] lg:text-[34px] md:text-[28px] sm:text-2xl font-bold text-black mb-5 md:mb-4 sm:mb-4 leading-[1.3] md:leading-[1.35] sm:leading-[1.4] w-full lg:w-1/2 md:w-[85%] sm:w-full mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {ctaHeading}
          </motion.h3>

          {/* CTA Description */}
          <motion.p
            className="font-ranade text-lg md:text-base sm:text-[15px] leading-[1.6] md:leading-[1.65] sm:leading-[1.7] text-black mb-8 md:mb-7 sm:mb-6 max-w-[753px] md:max-w-[90%] sm:max-w-full mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {ctaDescription}
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href={ctaHref}
            className="inline-flex items-center gap-2 px-8 py-[14px] md:px-7 md:py-3 sm:px-6 sm:py-3 bg-[#009FFF] text-white rounded md:rounded sm:rounded font-excon text-sm md:text-sm sm:text-[13px] font-medium no-underline transition-all duration-200 hover:bg-[#008ae6] hover:-translate-y-0.5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            {ctaText}
            <ArrowRight width={16} height={16} className="md:w-[15px] md:h-[15px] sm:w-[14px] sm:h-[14px]" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
