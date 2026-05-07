'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SaleforceMarketingTopics({ sfmcTopics }) {
  // Use dynamic data if available, otherwise use static data
  const section = sfmcTopics && typeof sfmcTopics === 'object' ? sfmcTopics : {};
  const modules = Array.isArray(section.modules) && section.modules.length > 0 ? section.modules : '';
  const toolsTable = Array.isArray(section.toolsTable) && section.toolsTable.length > 0 ? section.toolsTable : '';
  const career = section.careerCard && typeof section.careerCard === 'object' ? { ...section.careerCard } : '';
  const metrics = Array.isArray(career.metrics) ? career.metrics : '';

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
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
    <section className="w-full bg-[#F8FAFC] lg:py-[80px] py-[64px] px-[16px]">
      <div className="max-w-[1280px] mx-auto overflow-visible">
        <motion.h2
          className="text-[28px] sm:text-[32px] md:text-[48px] font-excon font-light text-[#0B1C33] lg:mb-[64px] mb-[24px] text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          {section.headingLine1} <span className="font-bold">{section.headingStrong || 'Covered'}</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          {/* Left Column - Modules and Tools */}
          <motion.div
            className="w-full ma-w-[846px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {/* Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modules.map((mod, idx) => {
                // Calculate icon number: cycle from 1-10
                const iconNumber = (idx % 10) + 1;
                const iconSrc = `${process.env.NEXT_PUBLIC_IMG_PATH}images/saleforce/module-icon-${iconNumber}.svg`;

                return (
                  <motion.div
                    key={mod.id || idx}
                    className="bg-white border border-gray-200 rounded-[24px] p-[34px] transition-shadow duration-300"
                    variants={moduleCardVariants}
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  >
                    <div className="flex items-center justify-between mb-[24px]">
                      <motion.span
                        className="text-[16px] font-bold text-[#009FFF] tracking-wider uppercase"
                        initial={{ opacity: 0.5, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                      >
                        MODULE {mod.id || ''}
                      </motion.span>
                      <motion.div
                        className="lg:w-[64px] w-[48px] lg:h-[64px] h-[48px] bg-[#0CA4EB]/10 rounded-full flex items-center justify-center"
                        initial={{ scale: 0, rotate: -30 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.3 + idx * 0.1,
                          type: 'spring',
                          stiffness: 200,
                          damping: 15,
                        }}
                      >
                        <Image src={iconSrc} alt="" width={24} height={24} className="w-6 h-6" />
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
                );
              })}
            </div>

            {/* Tools Section */}
            <div className="mt-12">
              <h3 className="text-[28px] sm:text-[32px] md:text-[48px] font-excon font-light text-[#0B1C33] lg:mb-[48px] mb-[24px]">
                Tools <span className="font-bold"> Commonly Used</span>
              </h3>

              {/* Table for larger screens */}
              <div className="hidden md:block overflow-x-auto rounded-[24px] bg-white font-ranade">
                <table className="w-full min-w-[480px] border-collapse text-[14px] text-black">
                  <thead>
                    <tr className="bg-[#FFFBF2]">
                      <th className="px-[18px] py-[14px] text-left font-bold text-black rounded-tl-xl">
                        STUDIOS & BUILDERS
                      </th>
                      <th className="px-[18px] py-[14px] text-left font-normal text-black rounded-tr-xl">
                        PURPOSE / FUNCTIONALITY
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {toolsTable.map((row, i) => (
                      <tr key={i}>
                        <td className="px-[18px] py-[14px] border-b border-[#eee] last:border-b-0">{row.tool}</td>
                        <td className="px-[18px] py-[14px] border-b border-[#eee] last:border-b-0">{row.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Cards for mobile */}
              <div className="block md:hidden">
                {toolsTable.map((row, i) => (
                  <div key={i} className="bg-white border border-[#e5e5e5] rounded-xl p-4 mb-3 last:mb-0">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#666] mb-1">
                      STUDIOS & BUILDERS
                    </div>
                    <div className="text-base font-semibold text-black mb-3">{row.tool}</div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#666] mb-1">
                      PURPOSE / FUNCTIONALITY
                    </div>
                    <div className="text-sm text-[#333] leading-relaxed">{row.purpose}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Career Card */}
          <div className="lg:max-w-[410px] w-full">
            <motion.div
              className={`text-center bg-[#0B1C33] rounded-2xl p-8 text-white lg:sticky transition-all duration-300 ${
                scrollDirection === 'down' ? 'lg:top-30' : 'lg:top-36'
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
                },
              }}
            >
              <div className="text-xs font-semibold text-[#60A5FA] tracking-wider uppercase mb-2">{career.brand}</div>
              <h3 className="text-[24px] font-excon font-bold mb-[20px]">{career.title}</h3>
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
              <Link
                href={career.applyHref || '#apply'}
                className="btn-primary block gap-2 px-5 py-2.5 text-sm font-semibold tracking-wide mb-[24px]"
              >
                {career.applyText || 'APPLY NOW'}
              </Link>
              <div className="flex items-center gap-4 text-start bg-[#FFFFFF1A] rounded-[14px] border p-[12px] border-[#FFFFFF1A]">
                <div className="shrink-0">
                  {' '}
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
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
