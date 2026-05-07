'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const slideInLeftVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const slideInRightVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function LeaderShipEdge({ leadershipData }) {
  return (
    <section className="w-full bg-[#0B1C33] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-[16px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* Main Heading with enhanced animation */}
        <motion.h2
          initial={{ opacity: 0, y: -30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="font-excon text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-light leading-tight text-center mb-8 sm:mb-10 md:mb-14 lg:mb-20 text-white px-4"
        >
          {leadershipData?.title || 'The Cloud Intellect'}{' '}
          <motion.span
            className="font-bold inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Edge
          </motion.span>
        </motion.h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-[40px] items-start">
          {/* Left Column - Content with staggered animations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col gap-4 sm:gap-5 md:gap-6"
          >
            {/* Label Badge */}
            {leadershipData?.label && (
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 bg-[#FFFFFF] rounded-full px-4 py-2 w-fit border border-[#0000001A] shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <motion.span
                  className="w-2 h-2 bg-[#0CA4EB] rounded-full"
                  aria-hidden="true"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <span className="text-dark text-[10px] sm:text-xs font-medium tracking-wider uppercase">
                  {leadershipData.label}
                </span>
              </motion.div>
            )}

            {/* Quote with enhanced animation */}
            {(leadershipData?.quote || leadershipData?.quoteHighlight) && (
              <motion.div variants={itemVariants} className="mb-1 sm:mb-2">
                <p className="font-excon text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-medium text-white leading-relaxed">
                  &quot;{leadershipData?.quote}
                  {leadershipData?.quoteHighlight && (
                    <motion.span
                      className="text-[#0CA4EB] font-bold"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      {leadershipData.quoteHighlight}
                    </motion.span>
                  )}
                  &quot;
                </p>
              </motion.div>
            )}

            {/* Paragraphs with staggered animation */}
            {leadershipData?.paras && leadershipData.paras.length > 0 && (
              <motion.div variants={itemVariants} className="flex flex-col gap-3 sm:gap-4">
                {leadershipData.paras.map((para, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="font-ranade text-sm md:text-base text-white/80 leading-relaxed"
                  >
                    {para}
                  </motion.p>
                ))}
              </motion.div>
            )}

            {/* Stats with scale animation */}
            {leadershipData?.stats && leadershipData.stats.length > 0 && (
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 sm:gap-5 md:gap-6 mt-2 sm:mt-3">
                {leadershipData.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    whileHover={{ y: -2 }}
                    className="py-4 sm:py-5 md:py-[20px] px-6 sm:px-7 md:px-[30px] flex flex-col bg-[#0000001A] border border-[#FFFFFF1A] rounded-[20px] sm:rounded-[24px] hover:border-[#0CA4EB]/50 transition-all duration-300 min-w-[140px] sm:min-w-[160px]"
                  >
                    <motion.span
                      className="font-excon text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#0CA4EB] leading-none"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.2, duration: 0.5 }}
                    >
                      {stat.number}+
                    </motion.span>
                    <span className="font-ranade text-[10px] sm:text-xs md:text-[12px] text-white uppercase tracking-wider mt-1 sm:mt-2">
                      Years Experience
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Impact Highlights with enhanced animation */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -3 }}
              className="bg-[#0CA4EB] rounded-xl sm:rounded-2xl py-4 px-4 sm:py-5 sm:px-5 md:py-6 md:px-6 lg:py-[24px] lg:px-[24px] mt-2 sm:mt-3 relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-excon text-base sm:text-lg md:text-xl font-bold text-white mb-1">
                      Impact Highlights
                    </h3>
                    <p className="text-white text-xs sm:text-sm md:text-[14px] mb-0 break-words">
                      5000+ Learners • 1400+ Placed
                    </p>
                  </div>
                  <motion.div
                    animate={{
                      y: [0, -2, 0],
                      rotate: [0, 2, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Card with enhanced animation */}
          <motion.div
            variants={slideInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex justify-center lg:justify-end mt-6 lg:mt-0"
          >
            <motion.div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 max-w-[586px] w-full shadow-2xl">
              {/* Profile Image */}
              {leadershipData?.profileImage && (
                <div className="relative w-full aspect-square sm:aspect-[4/4]">
                  <Image
                    src={`${process.env.DYNAMIC_IMG_BASE_PATH}${leadershipData.profileImage}`}
                    alt={leadershipData?.profileName || 'Profile'}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 586px"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a2e] via-[#0f1a2e]/40 to-transparent">
                    {/* Profile Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                      className="p-4 sm:p-5 md:p-6 mt-auto h-full flex flex-col justify-end"
                    >
                      {leadershipData?.profileName && (
                        <motion.h3
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5, duration: 0.6 }}
                          className="font-excon text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2"
                        >
                          {leadershipData.profileName}
                        </motion.h3>
                      )}
                      {leadershipData?.profileTitle && (
                        <motion.p
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6, duration: 0.6 }}
                          className="font-ranade text-xs sm:text-sm md:text-base text-[#0CA4EB] mb-2 sm:mb-3 md:mb-4"
                        >
                          {leadershipData.profileTitle}
                        </motion.p>
                      )}
                    </motion.div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
