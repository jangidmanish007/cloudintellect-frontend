'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CloudIntellectEdge({ edgeData }) {
  const heading = edgeData?.heading || 'The Cloud Intellect';
  const headingBold = edgeData?.headingBold || 'Edge';
  const cards = edgeData?.cards || [];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  const titleVariants = {
    rest: { x: 0 },
    hover: {
      x: 4,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="w-full bg-[#F8FAFC] py-16 md:py-20 lg:py-24 px-[16px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-excon text-[32px] md:text-[40px] lg:text-[48px] font-light leading-tight text-center mb-12 md:mb-16 lg:mb-20"
        >
          {heading} <span className="font-bold">{headingBold}</span>
        </motion.h2>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-[24px] xl:p-[34px] md:p-[24px] p-[20px] flex flex-col gap-4 border border-gray-100 hover:border-[#009FFF] hover:shadow-[0_20px_60px_-15px_rgba(0,159,255,0.2)] transition-all duration-500 cursor-pointer group relative overflow-hidden"
              style={{
                transformStyle: 'preserve-3d',
                perspective: 1000,
              }}
            >
              {/* Animated background gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#009FFF]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px]"
                initial={{ scale: 0, rotate: 15 }}
                whileHover={{ scale: 1.2, rotate: 0 }}
                transition={{ duration: 0.6 }}
              />

              {/* Icon */}
              {card.icon && (
                <motion.div
                  variants={iconVariants}
                  className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#009FFF1A] rounded-[8px] group-hover:bg-[#56beff] transition-colors duration-500 relative z-10"
                >
                  <motion.div
                    animate={{
                      filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <Image
                      src={card.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="w-8 h-8 group-hover:brightness-0 group-hover:invert transition-all duration-500"
                      aria-hidden="true"
                    />
                  </motion.div>
                </motion.div>
              )}

              {/* Title */}
              {card.title && (
                <motion.h3
                  variants={titleVariants}
                  className="font-excon text-[18px] md:text-[24px] font-bold text-gray-900 group-hover:text-[#009FFF] transition-colors duration-300 relative z-10"
                >
                  {card.title}
                </motion.h3>
              )}

              {/* Description */}
              {card.description && (
                <motion.p
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  className="font-ranade text-sm md:text-[20px] text-dark leading-relaxed relative z-10"
                >
                  {card.description}
                </motion.p>
              )}

              {/* Decorative corner element */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#009FFF]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
