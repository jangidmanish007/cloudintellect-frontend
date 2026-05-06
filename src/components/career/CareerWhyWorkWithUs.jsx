'use client';
import React from 'react';
import { motion } from 'framer-motion';

const DEFAULT_CARDS = [
  {
    title: 'Career Impact',
    description: 'We work on real student outcomes.',
    icon: `images/about-us/cloude-edge-icon-1.svg`,
  },
  {
    title: 'Industry Exposure',
    description: 'Hands-on work in the Salesforce ecosystem.',
    icon: `images/about-us/cloude-edge-icon-1.svg`,
  },
  {
    title: 'Ownership Culture',
    description: 'Ideas > hierarchy. Execution > excuses.',
    icon: `images/about-us/cloude-edge-icon-1.svg`,
  },
];

export default function CareerWhyWorkWithUs({ whyWork }) {
  const data = whyWork || {};
  const headingLine1 = data.headingLine1 ?? 'Why Work With';
  const headingStrong = data.headingStrong ?? 'Cloud Intellect?';
  const cards = Array.isArray(data.cards) && data.cards.length > 0 ? data.cards : DEFAULT_CARDS;

  return (
    <section className="w-full bg-[#F8FAFC] py-[64px] lg:py-[80px]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-excon text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-light text-center mb-8 sm:mb-12 md:mb-16"
        >
          {headingLine1} <span className="font-bold">{headingStrong}</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px] sm:gap-[24px]">
          {cards.map((card, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-gray-200 rounded-[24px]  lg:p-[34px] p-[24px] transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                {card.icon && (
                  <img
                    src={`${process.env.DYNAMIC_IMG_BASE_PATH}${card.icon}`}
                    alt=""
                    width={28}
                    height={28}
                    className="w-14 h-14"
                    aria-hidden="true"
                  />
                )}
              </div>
              <h3 className="font-excon text-[16px] lg:text-[24px] font-bold text-[#0B1C33] mb-3">{card.title}</h3>
              <p className="font-ranade text-[14px] lg:text-[20px] text-gray-600 leading-relaxed">{card.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
