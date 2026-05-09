'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FALLBACK_ITEMS = [
  {
    title: 'Practical-First Training',
    description:
      'Every concept is taught with real implementation on Salesforce org. Students learn by doing — not by memorizing.',
    icon: 'images/gallery/advantage-icon-1.svg',
  },
  {
    title: 'Real Industry-Level Exposure',
    description:
      'Training includes live business scenarios and project simulations that build strong hands-on confidence.',
    icon: 'images/gallery/advantage-icon-2.svg',
  },
  {
    title: 'Structured Assignments',
    description:
      'Each topic is followed by practical exercises, quizzes, and real use-case based tasks to track progress.',
    icon: 'images/gallery/advantage-icon-3.svg',
  },
  {
    title: 'Lifetime LMS Recording Access',
    description:
      'All lectures, materials, and case studies remain available anytime for revision and continuous learning.',
    icon: 'images/gallery/advantage-icon-4.svg',
  },
  {
    title: 'Industry-Relevant Curriculum',
    description: 'Course modules are updated regularly to match current Salesforce market demand and platform changes.',
    icon: 'images/gallery/advantage-icon-5.svg',
  },
  {
    title: 'Certified & Experienced Trainers',
    description: 'Sessions are handled by working Salesforce professionals with real project backgrounds.',
    icon: 'images/gallery/advantage-icon-6.svg',
  },
  {
    title: 'Corporate & Alumni Network',
    description:
      'Learners benefit from referrals, guidance, and opportunities shared by our partner companies and alumni.',
    icon: 'images/gallery/advantage-icon-7.svg',
  },
  {
    title: 'Interview & Career Grooming',
    description: 'Focus on professional behaviour, IT work culture, confidence building, and job readiness.',
    icon: 'images/gallery/advantage-icon-8.svg',
  },
];

export default function SfmSfdCloudAdvantage({ advantagesData }) {
  const data = advantagesData || {};
  const items = data.items && data.items.length > 0 ? data.items : FALLBACK_ITEMS;

  return (
    <section className="w-full bg-white py-[40px] sm:py-[56px] md:py-[64px] lg:py-[80px] px-[16px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-excon text-[24px] sm:text-[32px] md:text-[42px] lg:text-[48px] font-light text-[#0B1C33] text-center mb-6 sm:mb-8 md:mb-12"
        >
          Key Advantages of <span className="font-bold">Learning at Cloud Intellect</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[16px] sm:gap-[20px] lg:gap-[24px]">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-[12px] sm:rounded-[14px] p-[16px] sm:p-[20px] lg:p-[22px] border border-[#0000001A] transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-13 sm:h-13 lg:w-14 lg:h-14 rounded-[8px] bg-[#009FFF1A] flex items-center justify-center mb-3 sm:mb-4">
                {item.icon ? (
                  <Image
                    src={process.env.NEXT_PUBLIC_IMG_PATH + item.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="w-7 h-7 sm:w-7.5 sm:h-7.5 lg:w-8 lg:h-8 object-contain"
                  />
                ) : (
                  <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 lg:w-8 lg:h-8 bg-[#0CA4EB]/20 rounded-full" />
                )}
              </div>

              {/* Title */}
              <h3 className="font-excon text-[17px] sm:text-[19px] md:text-[21px] lg:text-[24px] leading-[1.2] font-bold text-dark mb-[10px] sm:mb-[12px]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-ranade text-[13px] sm:text-[14px] text-dark leading-relaxed mb-0">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
