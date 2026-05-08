'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Cloud } from 'lucide-react';

const defaultData = [
  {
    headerColor: '#1a365d',
    icon: '',
    title: 'Cloud Intellect Academy',
    description:
      'Focused on Salesforce training, skill development, and career preparation. Recognized as an official Salesforce Workforce Development Partner.',
    bullets: [
      'Career-oriented training programs',
      'Practical learning on real Salesforce orgs',
      'Certification-aligned preparation',
    ],
  },
  {
    headerColor: '#009fff',
    icon: '',
    title: 'Cloud Intellect Systems',
    description:
      'A Salesforce Ridge Consulting Partner, actively working on real client projects across industries, providing real-world project exposure.',
    bullets: [
      'Salesforce CRM implementation',
      'Marketing automation solutions (SFMC)',
      'Real project workflows & use cases',
    ],
  },
];

export default function CloudIntellectAdvantage({ cloudIntellectAdvantage }) {
  const data = cloudIntellectAdvantage || {};

  const headingLine1 = data.headingLine1 ?? 'The Cloud Intellect';
  const headingBold = data.headingBold ?? 'Advantage';

  const rawCards = Array.isArray(data.cards) && data.cards.length > 0 ? data.cards : defaultData;
  let cards = rawCards.filter((c) => c && (c.title || c.description));
  if (cards.length === 0) cards = defaultData;

  return (
    <section className="w-full bg-white lg:py-[80px] py-[64px] px-[16px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-excon font-light text-[#0F172A] mb-[42px] lg:mb-[64px]"
        >
          {headingLine1} <span className="font-bold">{headingBold}</span>
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[18px] lg:gap-[24px]">
          {cards.map((card, index) => {
            const headerColor = card.headerColor || (index === 0 ? '#0B1C33' : '#009fff');
            const bullets = Array.isArray(card.bullets) ? card.bullets.filter((b) => String(b).trim()) : [];

            return (
              <motion.article
                key={`${card.title}-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white border border-[#0000001A] overflow-hidden rounded-[8px] lg:p-[24px] p-[22px] transition-shadow duration-300"
              >
                {/* Card Header with Icon */}
                <div
                  className="flex items-center lg:p-[18px] p-[16px] rounded-[8px]"
                  style={{ backgroundColor: headerColor }}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-[8px] flex items-center justify-center">
                    {index % 2 === 0 ? (
                      <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    ) : (
                      <Cloud className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="mt-[18px] lg:mt-[24px]">
                  <h3 className="text-[22px] lg:text-[26px] font-excon font-bold text-dark mb-[16px] lg:mb-[24px]">
                    {card.title}
                  </h3>
                  <p className="text-[16px] sm:text-[20px] text-dark leading-relaxed mb-[16px] lg:mb-[24px]">
                    {card.description}
                  </p>

                  {bullets.length > 0 && (
                    <ul className="space-y-2 sm:space-y-1.4">
                      {bullets.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-[14px] sm:text-[16px] text-[#000000BF] font-ranade"
                        >
                          <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#000000BF] rounded-full mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
