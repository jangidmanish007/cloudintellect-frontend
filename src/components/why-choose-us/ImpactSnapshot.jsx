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
    <section className="w-full bg-white py-20 lg:py-20 md:py-16 sm:py-14">
      <div className="max-w-[1280px] mx-auto px-6 md:px-5 sm:px-4">
        {/* Title */}
        <motion.h2
          className="text-center mb-14 lg:mb-14 md:mb-12 sm:mb-10 leading-normal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="text-black font-excon text-5xl lg:text-5xl md:text-4xl sm:text-[32px] font-light">
            {headingLight}
          </span>{' '}
          <span className="ml-1 text-black font-excon text-5xl lg:text-5xl md:text-4xl sm:text-[32px] font-bold">
            {headingBold}
          </span>
        </motion.h2>

        {/* Metrics Grid */}
        <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-0 md:gap-8 sm:gap-8 mb-20 lg:mb-20 md:mb-16 sm:mb-12 items-center">
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
              <div className="flex flex-col items-center gap-2 text-center">
                <motion.span
                  className="font-excon text-[60px] lg:text-[60px] md:text-5xl sm:text-4xl font-bold text-[#009FFF] leading-[1.2]"
                  whileHover={{
                    scale: 1.04,
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                >
                  {metric.value}
                </motion.span>
                <span className="font-ranade text-xs sm:text-[11px] font-semibold text-black tracking-[0.08em] uppercase">
                  {metric.label}
                </span>
              </div>
              {/* Vertical Divider - Only show on desktop between items */}
              {index !== metrics.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[60%] w-px bg-[#000000] md:block sm:hidden" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          className="bg-[#FAF7F0] rounded-3xl border border-[#0000001A] md:rounded-2xl sm:rounded-2xl px-14 py-12 lg:px-14 lg:py-12 md:px-8 md:py-10 sm:px-6 sm:py-8 text-center max-w-full mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Tagline */}
          <motion.div
            className="inline-flex items-center gap-2 mb-6 font-excon text-[10px] sm:text-[7px] font-medium text-black tracking-wider bg-white uppercase px-3 py-[5px] rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-[#009FFF] flex-shrink-0" aria-hidden="true" />
            <span>{tagline}</span>
          </motion.div>

          {/* CTA Heading */}
          <motion.h3
            className="font-excon text-[34px] lg:text-[34px] md:text-3xl sm:text-[28px] font-bold text-black mb-5 sm:mb-4 leading-[1.2] w-full lg:w-1/2 md:w-full sm:w-full mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {ctaHeading}
          </motion.h3>

          {/* CTA Description */}
          <motion.p
            className="font-ranade text-lg md:text-lg sm:text-base leading-[1.6] text-black mb-8 sm:mb-6 max-w-[753px] mx-auto"
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
            className="inline-flex items-center gap-2 px-8 py-[14px] sm:px-6 sm:py-3 bg-[#009FFF] text-white rounded font-excon text-sm font-medium no-underline transition-all duration-200 hover:bg-[#008ae6] hover:-translate-y-0.5"
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
            <ArrowRight width={16} height={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
