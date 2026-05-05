'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SaleForceDeveloperTopic({ sfdcTopics }) {
  // Use dynamic data if available, otherwise use static data
  const data = sfdcTopics;
  const headingLine1 = data.headingLine1;
  const headingStrong = data.headingStrong;
  const modules = data.modules;
  const career = data.careerCard;
  const metrics = career.metrics;

  // Track scroll direction for dynamic sticky positioning
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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

  const moduleCardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const careerCardVariants = {
    hidden: {
      opacity: 0,
      x: 20,
      scale: 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="lg:py-[80px] py-[64px] bg-white px-[16px]  overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <motion.h2
          className="text-[28px] sm:text-[32px] md:text-[48px] font-excon font-light text-[#0B1C33] lg:mb-[64px] mb-[24px] text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          {headingLine1} <span className="font-bold">{headingStrong}</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          <motion.div
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modules.map((mod, idx) => (
                <motion.div
                  key={mod.id || idx}
                  className="bg-white border border-gray-200 rounded-[24px] p-[34px] transition-shadow duration-300"
                  variants={moduleCardVariants}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="flex items-center justify-between mb-[24px]">
                    <motion.span
                      className="text-[16px] font-bold text-[#009FFF] tracking-wider uppercase"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                    >
                      MODULE {mod.id || ''}
                    </motion.span>
                    <motion.div
                      className="lg:w-[64px] w-[48px] lg:h-[64px] h-[48px] bg-[#0CA4EB]/10 rounded-full flex items-center justify-center"
                      initial={{ scale: 0, rotate: -90 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + idx * 0.1,
                        type: 'spring',
                        stiffness: 200,
                        damping: 15,
                      }}
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_PATH}images/home/courses-code.svg`}
                        alt=""
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </motion.div>
                  </div>
                  <h3 className="lg:text-[24px] text-[18px] font-excon font-bold text-[#0B1C33] lg:mb-[24px] mb-[18px]">
                    {mod.title || ''}
                  </h3>
                  <ul className="space-y-2">
                    {(Array.isArray(mod.topics) ? mod.topics : []).map((topic, i) => (
                      <motion.li
                        key={i}
                        className="text-[14px] text-dark flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + idx * 0.1 + i * 0.05 }}
                      >
                        <span className="text-dark mt-0">•</span>
                        <span>{topic}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div className="lg:w-[380px]">
            <motion.div
              className={`text-center bg-[#0B1C33] rounded-2xl p-8 text-white lg:sticky transition-all duration-300 ${
                scrollDirection === 'down' ? 'lg:top-30' : 'lg:top-36'
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={careerCardVariants}
            >
              <motion.div
                className="text-xs font-semibold text-[#60A5FA] tracking-wider uppercase mb-2"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {career.brand}
              </motion.div>
              <motion.h3
                className="text-[24px] font-excon font-bold mb-[20px]"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {career.title}
              </motion.h3>
              <div className="space-y-[16px] mb-6">
                {metrics.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.5 + i * 0.1,
                      type: 'spring',
                      stiffness: 150,
                    }}
                  >
                    <div className="text-[48px] font-excon font-bold text-white">{m.value}</div>
                    <div className="text-xs text-gray-300 uppercase tracking-wide">{m.label}</div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={career.applyHref || '#apply'}
                  className="btn-primary block gap-2 px-5 py-2.5 text-sm font-semibold tracking-wide mb-[24px]"
                >
                  {career.applyText || 'APPLY NOW'}
                </Link>
              </motion.div>
              <motion.div
                className="flex items-center gap-4 text-start bg-[#FFFFFF1A] rounded-[14px] border p-[12px] border-[#FFFFFF1A]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
              >
                <div className="shrink-0">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_PATH}images/about-us/gaurantee-icon.svg`}
                    alt=""
                    width={36}
                    height={36}
                    className="w-[36px] h-[36px]"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold">{career.batchDate}</div>
                  <div className="text-xs text-gray-300">{career.batchType}</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
