'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const staticData = {
  title: 'Our Core',
  titleBold: 'Values',
  values: [
    {
      title: 'Excellence',
      subtitle: 'Quality training & real exposure',
      icon: 'images/about-us/core-values-icon-1.svg',
    },
    {
      title: 'Student Success',
      subtitle: 'Career-first learning',
      icon: 'images/about-us/core-values-icon-2.svg',
    },
    {
      title: 'Integrity',
      subtitle: 'Transparency & ethics',
      icon: 'images/about-us/core-values-icon-3.svg',
    },
    {
      title: 'Two-Pillar Advantage',
      subtitle: 'Training + Consulting',
      icon: 'images/about-us/core-values-icon-4.svg',
    },
    {
      title: 'Innovation',
      subtitle: 'Modern tools & best practices',
      icon: 'images/about-us/core-values-icon-5.svg',
    },
    {
      title: 'Responsibility',
      subtitle: 'Positive community impact',
      icon: 'images/about-us/core-values-icon-6.svg',
    },
  ],
  isr: {
    title: 'Institutional Social Responsibility',
    description:
      'At Cloud Intellect, responsibility goes beyond training. We focus on education-led career empowerment and inclusive growth.',
    icon: 'images/about-us/responsibility-icon.svg',
    tags: [
      'Skill-to-employment programs',
      'Workforce upskilling',
      'Career awareness',
      'Digital-first learning',
      'Inclusive access',
      'Career guidance',
    ],
  },
};

export default function AboutCoreValues({ coreValuesData }) {
  const data = coreValuesData || staticData;
  const title = data.title || staticData.title;
  const titleBold = data.titleBold || staticData.titleBold;
  const values = data.values?.length > 0 ? data.values : staticData.values;
  const isr = data.isr || staticData.isr;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const isrVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24 px-[16px]">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Title */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={titleVariants}
          className="font-excon text-center text-[28px] md:text-[40px] lg:text-[48px] font-light leading-tight mb-12 md:mb-16"
        >
          {title} <span className="font-bold">{titleBold}</span>
        </motion.h2>

        {/* Core Values Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-18 gap-10 mb-12 md:mb-16"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
              className="flex items-start gap-4 transition-shadow duration-300"
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
                className="shrink-0 w-[60px] h-[60px] flex items-center justify-center bg-[#F8FAFC] rounded-full"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMG_PATH}${value.icon}`}
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  aria-hidden="true"
                />
              </motion.div>
              <div className="flex flex-col">
                <h3 className="font-excon text-lg md:text-xl font-bold text-gray-900 mb-1">{value.title}</h3>
                <p className="font-ranade text-sm md:text-base text-gray-700 leading-relaxed">{value.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ISR Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={isrVariants}
          className="bg-[#FFFBF2] rounded-[24px] border border-[#0000001A] py-8 lg:py-[64px] px-[16px]"
        >
          <div className="text-center gap-4 mb-6 max-w-[800px] mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              className="shrink-0 w-16 h-16 mx-auto flex items-center justify-center mb-[16px]"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_PATH}${isr.icon}`}
                alt=""
                width={48}
                height={48}
                className="w-12 h-12"
                aria-hidden="true"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
              className="flex-1"
            >
              <h3 className="font-excon text-2xl md:text-3xl font-bold text-gray-900 mb-3">{isr.title}</h3>
              <p className="font-ranade text-base md:text-lg text-gray-700 leading-relaxed mb-6">{isr.description}</p>
            </motion.div>
            {/* ISR Tags */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.4,
                  },
                },
              }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {isr.tags.map((tag, index) => (
                <motion.span
                  key={index}
                  variants={tagVariants}
                  className="px-4 py-2 bg-white rounded-[50px] text-sm font-medium text-gray-700 cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
