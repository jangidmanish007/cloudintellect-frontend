'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FALLBACK_ITEMS = [
  {
    title: 'Practical-First Training',
    description:
      'Every concept is taught with real implementation on Salesforce org. Students learn by doing — not by memorizing.',
    icon: '/images/Key_Advantages/productivity.svg',
  },
  {
    title: 'Real Industry-Level Exposure',
    description:
      'Training includes live business scenarios and project simulations that build strong hands-on confidence.',
    icon: '/images/Key_Advantages/home_work.svg',
  },
  {
    title: 'Structured Assignments',
    description:
      'Each topic is followed by practical exercises, quizzes, and real use-case based tasks to track progress.',
    icon: '/images/Key_Advantages/order_approve.svg',
  },
  {
    title: 'Lifetime LMS Recording Access',
    description:
      'All lectures, materials, and case studies remain available anytime for revision and continuous learning.',
    icon: '/images/Key_Advantages/exit_to_app.svg',
  },
  {
    title: 'Industry-Relevant Curriculum',
    description: 'Course modules are updated regularly to match current Salesforce market demand and platform changes.',
    icon: '/images/Key_Advantages/library_books.svg',
  },
  {
    title: 'Certified & Experienced Trainers',
    description: 'Sessions are handled by working Salesforce professionals with real project backgrounds.',
    icon: '/images/Key_Advantages/diversity_2.svg',
  },
  {
    title: 'Corporate & Alumni Network',
    description:
      'Learners benefit from referrals, guidance, and opportunities shared by our partner companies and alumni.',
    icon: '/images/Key_Advantages/book.svg',
  },
  {
    title: 'Interview & Career Grooming',
    description: 'Focus on professional behaviour, IT work culture, confidence building, and job readiness.',
    icon: '/images/Key_Advantages/record_voice_over.svg',
  },
];

export default function SfmSfdCloudAdvantage({ advantagesData }) {
  const data = advantagesData || {};
  const items = data.items && data.items.length > 0 ? data.items : FALLBACK_ITEMS;

  return (
    <section className="w-full bg-white lg:py-[80px] py-[64px] px-[16px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-excon text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-light text-[#0B1C33] text-center mb-8 md:mb-12"
        >
          Key Advantages of <span className="font-bold">Learning at Cloud Intellect</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-[8px] p-[24px] border border-[#0000001A] transition-all duration-300 hover:shadow-md hover:border-[#0CA4EB]/20"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0CA4EB]/10 to-[#0CA4EB]/5 flex items-center justify-center mb-4">
                {item.icon ? (
                  <Image
                    src={process.env.NEXT_PUBLIC_IMG_PATH + item.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                ) : (
                  <div className="w-8 h-8 bg-[#0CA4EB]/20 rounded-full" />
                )}
              </div>

              {/* Title */}
              <h3 className="font-excon text-lg md:text-xl font-bold text-dark mb-3">{item.title}</h3>

              {/* Description */}
              <p className="font-ranade text-[15px] text-dark/70 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
