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
    <section className="w-full bg-[#F8FAFC] lg:py-[80px] md:py-[60px] py-[50px]">
      <div className="max-w-[1280px] mx-auto lg:px-6 md:px-6 px-4">
        {/* Title */}
        <motion.h2
          className="text-center lg:mb-14 md:mb-10 mb-8 leading-normal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="text-black font-excon lg:text-5xl md:text-[36px] text-[28px] font-light">
            {headingLight}
          </span>{' '}
          <span className="text-black font-excon lg:text-5xl md:text-[36px] text-[28px] font-bold">{headingBold}</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-6 md:gap-4 gap-4">
          {mergedItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl lg:p-8 md:p-5 p-5 border border-[#0000001A] flex flex-col items-start lg:gap-5 md:gap-4 gap-3"
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
                className="lg:w-14 lg:h-14 md:w-12 md:h-12 w-12 h-12 lg:min-w-[56px] md:min-w-[48px] min-w-[48px] flex items-center justify-center bg-[#e0f2fe] rounded-xl"
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
                  className="lg:w-7 lg:h-7 md:w-6 md:h-6 w-6 h-6 object-contain"
                  aria-hidden="true"
                />
              </motion.div>

              {/* Text */}
              <p className="font-excon lg:text-base md:text-[15px] text-[14px] lg:leading-[1.5] md:leading-[1.5] leading-[1.6] text-black m-0">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
