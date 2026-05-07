'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Cloud } from 'lucide-react';

const DEFAULT_LEFT_BULLETS = [
  'Multiple career paths (Admin, Developer, Consultant, SFMC)',
  'Long-term career growth and stability',
  'Strong demand in India & international markets',
];

const DEFAULT_RIGHT_BULLETS = [
  'Actively working on real projects',
  'Strong market understanding',
  'Deep knowledge of best practices',
];

export default function WhySaleforceMentor({ whySalesforceMentors }) {
  const data = whySalesforceMentors || {};

  const left = data.leftCard || {};
  const right = data.rightCard || {};
  const leftBullets = Array.isArray(left?.bullets) && left?.bullets.length > 0 ? left?.bullets : DEFAULT_LEFT_BULLETS;
  const rightBullets =
    Array.isArray(right?.bullets) && right?.bullets.length > 0 ? right?.bullets : DEFAULT_RIGHT_BULLETS;

  return (
    <section className="w-full bg-[#FFFBF2] lg:py-[80px] md:py-[64px] py-[40px] px-[16px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-[20px] md:gap-[24px]">
          {/* Left Card - Why Salesforce */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white w-full lg:max-w-[732px] border border-[#0000001A] rounded-[14px] p-[20px] sm:p-[24px] md:p-[32px] lg:p-[24px] transition-shadow duration-300"
          >
            {/* Icon */}

            <div className="flex items-center gap-[12px] md:gap-[16px] mb-[20px] md:mb-[24px]">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#E6F6FF] rounded-[8px] flex items-center justify-center shrink-0">
                <Cloud className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#0CA4EB]" />
              </div>
              {/* Title */}
              <h3 className="text-[20px] sm:text-[22px] md:text-[26px] font-excon font-bold text-[#0F172A] mb-0 leading-tight">
                {left?.title || 'Why Salesforce?'}
              </h3>
            </div>

            {/* Description */}
            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-dark leading-relaxed mb-[16px] md:mb-[18px] lg:mb-[24px]">
              {left?.description ||
                "Salesforce is the world's leading CRM platform with strong global demand. We focus exclusively on Salesforce because it offers:"}
            </p>

            {/* Bullets */}
            <ul className="space-y-2.5 sm:space-y-3 md:space-y-4 mb-4 sm:mb-5 md:mb-6">
              {leftBullets
                .filter((x) => String(x).trim())
                .map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 md:gap-3">
                    <span className="shrink-0 w-1.5 h-1.5 bg-[#000000BF] rounded-full mt-2" />
                    <span className="text-[14px] sm:text-[15px] md:text-[16px] text-[#000000BF] leading-relaxed font-ranade">
                      {item}
                    </span>
                  </li>
                ))}
            </ul>

            {/* Note */}
            <p className="text-[13px] sm:text-[14px] md:text-[16px] text-dark font-ranade font-medium italic pl-2.5 md:pl-3 border-l-3 border-[#009FFF]">
              {left?.note ||
                'Our training is aligned strictly with real Salesforce job roles, not generic IT learning.'}
            </p>
          </motion.article>

          {/* Right Card - Industry-Experienced Mentors */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0B1C33] w-full lg:max-w-[534px] border border-[#0000001A] rounded-[14px] p-[20px] sm:p-[24px] md:p-[32px] lg:p-[24px] transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#FFFFFF1A] rounded-[8px] flex items-center justify-center mb-4 sm:mb-5 md:mb-6 shrink-0">
              <Cloud className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#0CA4EB]" />
            </div>

            {/* Title */}
            <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[18px] font-excon font-bold text-white mb-[16px] sm:mb-[18px] md:mb-[24px] leading-tight">
              {right?.title || 'Industry-Experienced Mentors'}
            </h3>

            {/* Description */}
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-white/80 leading-relaxed mb-[16px] sm:mb-[18px] md:mb-[24px]">
              {right?.description || 'Our mentors are experienced, working professionals, not just trainers.'}
            </p>

            {/* Bullets */}
            <ul className="space-y-2.5 sm:space-y-3 md:space-y-4">
              {rightBullets
                .filter((x) => String(x).trim())
                .map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 md:gap-3">
                    <span className="shrink-0 w-1.5 h-1.5 bg-white/90 rounded-full mt-2" />
                    <span className="text-[14px] sm:text-[15px] md:text-base text-white/90 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
