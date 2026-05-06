'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const DEFAULT_BULLETS = [
  'Fast-learning, execution-focused environment',
  'Direct exposure to real industry projects',
  'Open communication with leadership',
  'Skill growth + career growth together',
  'Performance-driven recognition',
  'Transparent dialogue with management',
];

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function GrowsTogether({ culture }) {
  const data = culture || {};
  const heading = data.heading ?? 'A Team That Grows Together';
  const description =
    data.description ??
    'We believe that a strong culture is the foundation of great work. At Cloud Intellect, we nurture an environment that rewards initiative and fosters continuous learning.';
  const panelTitle = data.panelTitle ?? 'Our Culture';
  const bullets = Array.isArray(data.bullets) && data.bullets.length > 0 ? data.bullets : DEFAULT_BULLETS;
  // const imagePath = DEFAULT_IMAGE;

  return (
    <section className="lg:py-[80px] py-[64px] px-[16px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-[#0F2137] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-0 items-end justify-between">
            {/* ── Left Content ── */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="p-6 sm:p-8 md:p-10 lg:p-[48px] w-full lg:max-w-[671px]"
            >
              {/* Title */}
              <motion.h3
                className="text-white text-[24px] sm:text-[28px] lg:text-[36px] font-bold leading-tight mb-3 sm:mb-4"
                variants={fadeUp}
                custom={0.2}
              >
                {heading}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8"
                variants={fadeUp}
                custom={0.3}
              >
                {description}
              </motion.p>

              {/* Features Card */}
              <motion.div
                className="bg-[#FFFFFF1A] rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-[18px] border border-[#FFFFFF1A]"
                variants={fadeUp}
                custom={0.4}
              >
                {/* Support Heading */}
                <h4 className="text-white text-base sm:text-[18px] font-bold mb-4 sm:mb-6">{panelTitle}</h4>

                {/* Features Grid - 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {bullets.filter(Boolean).map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-2"
                      variants={fadeUp}
                      custom={0.5 + index * 0.05}
                    >
                      <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMG_PATH}images/about-us/check-icon.svg`}
                          width={18}
                          height={18}
                          alt="Check icon"
                          priority={false}
                        />
                      </div>
                      <span className="text-gray-200 text-[13px] sm:text-[14px] leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* ── Right Image ── */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative h-full lg:mr-[10%] w-full lg:max-w-[432px] min-h-[300px] sm:min-h-[350px] md:min-h-[370px] lg:min-h-[490px]"
            >
              <Image
                src={process.env.NEXT_PUBLIC_IMG_PATH + 'images/gallery/grows-together-bg.webp'}
                alt="Team culture"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
