'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import trustRecognitionData from './static-data/trustRecognition.json';

export default function TrustRecognition({ trustRecognition }) {
  // Use dynamic content if available, otherwise fallback to static JSON
  const data = trustRecognition || trustRecognitionData;
  const headingLight = data.headingLight || trustRecognitionData.headingLight;
  const headingBold = data.headingBold || trustRecognitionData.headingBold;
  const items = Array.isArray(data.items) && data.items.length > 0 ? data.items : trustRecognitionData.items;

  // Merge dynamic text with static icons - always use static icons from JSON
  const mergedItems = items.map((item, index) => {
    // Always prioritize static icon from trustRecognitionData
    const staticIcon = trustRecognitionData.items[index]?.icon;
    return {
      text: item.text,
      icon: staticIcon || item.icon, // Use static icon if available
    };
  });

  return (
    <section className="w-full bg-[#F8FAFC] py-20 lg:py-20 md:py-16 sm:py-14">
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
          <span className="text-black font-excon text-5xl lg:text-5xl md:text-4xl sm:text-[32px] font-bold">
            {headingBold}
          </span>
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 md:gap-5 sm:gap-5">
          {mergedItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 md:p-6 sm:p-6 border border-[#0000001A] flex flex-col items-start gap-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
            >
              {/* Icon Wrapper */}
              <motion.div
                className="w-14 h-14 min-w-[56px] flex items-center justify-center bg-[#e0f2fe] rounded-xl"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
              >
                <Image
                  src={process.env.NEXT_PUBLIC_IMG_PATH + item.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="w-7 h-7 object-contain"
                  aria-hidden="true"
                />
              </motion.div>

              {/* Text */}
              <p className="font-excon text-base md:text-base sm:text-[15px] leading-[1.5] text-black m-0">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
