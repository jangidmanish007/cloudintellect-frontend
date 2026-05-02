'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import staticCoreAdvantages from './static-data/coreAdvantages.json';

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const cardHover = {
  rest: {
    y: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
  hover: {
    y: -6,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function CoreAdvantages({ coreAdvantages }) {
  // Use dynamic data if available, otherwise fallback to static data
  const data = coreAdvantages || staticCoreAdvantages;
  const title = data?.title || '';
  const advantages =
    Array.isArray(data?.advantages) && data.advantages.length > 0 ? data.advantages : staticCoreAdvantages?.advantages;

  // Icon mapping for SVG files
  const iconMap = [
    'images/about-us/advantage-icon-1.svg',
    'images/about-us/advantage-icon-2.svg',
    'images/about-us/advantage-icon-3.svg',
    'images/about-us/advantage-icon-4.svg',
    'images/about-us/advantage-icon-5.svg',
    'images/about-us/advantage-icon-6.svg',
  ];

  return (
    <section className="bg-white lg:pt-[80px] lg:pb-[40px] pb-[20px] px-[16px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* ── Section Title ── */}
        {title && (
          <motion.h2
            className="excon-font text-center max-w-[700px] mx-auto text-[#1E1E1E] text-[28px] sm:text-[36px] lg:text-[48px] font-light
 leading-[1.2] mb-8 sm:mb-12 lg:mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
          >
            Core Advantages of <span className="font-bold ">Learning at Cloud Intellect</span>
          </motion.h2>
        )}

        {/* ── Advantages Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => {
            // Use dynamic icon if provided, otherwise use static icon from array
            const iconSrc = `${process.env.NEXT_PUBLIC_IMG_PATH}${iconMap[index] || iconMap[0]}`;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                custom={index * 0.08}
                className="h-full"
              >
                <motion.div
                  className="bg-white rounded-[24px] border border-[#0000001A] p-[18px] sm:p-[24px] lg:p-[34px] h-full flex flex-col cursor-default"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={cardHover}
                >
                  {/* Icon */}
                  <div className="lg:mb-[24px] mb-[18px] flex items-center justify-start">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-[8px] bg-[#F0F9FF]">
                      <Image
                        src={iconSrc}
                        alt=""
                        width={28}
                        height={28}
                        className="w-7 h-7 object-contain"
                        aria-hidden
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="excon-font text-[#1A1A1A] text-[18px] sm:text-[20px] lg:text-[24px] font-bold leading-[1.3] mb-[18px] lg:mb-[24px]">
                    {advantage.title}
                  </h3>

                  {/* Description */}
                  {advantage.description && (
                    <p className="ranade-font text-dark text-[14px] sm:text-[16px] leading-[1.7] mb-4">
                      {advantage.description}
                    </p>
                  )}

                  {/* Bullets */}
                  {Array.isArray(advantage.bullets) && advantage.bullets.length > 0 && (
                    <ul className="space-y-2.5 mb-0">
                      {advantage.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={bulletIndex}
                          className="flex items-start gap-2.5 text-dark text-[13px] sm:text-[14px] leading-[1.6] ranade-font"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0CA4EB] mt-1.5 shrink-0" aria-hidden />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Additional Text */}
                  {advantage.additionalText && (
                    <p className="ranade-font  text-[#1A1A1A] text-[13px] sm:text-[14px] leading-[1.6] lg:mt-[24px] mt-[18px]  font-medium">
                      {advantage.additionalText}
                    </p>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
