'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CircleCheck } from 'lucide-react';
import Link from 'next/link';

const benefitStaticData = [
  'Learn before committing time or money',
  'Ask real questions to experts',
  'Understand actual career scope',
  'Choose your path with 100% confidence',
];

export default function InformedDecision({ makeInformedDecision }) {
  const sectionContent = makeInformedDecision || {};

  const primaryButtonText = sectionContent.primaryButtonText || 'Explore Programs';
  const primaryButtonHref = sectionContent.primaryButtonHref || '#programs';
  const secondaryButtonText = sectionContent.secondaryButtonText || 'View Placements';
  const secondaryButtonHref = sectionContent.secondaryButtonHref || '#placements';

  return (
    <section className="w-full lg:py-[80px] md:py-[60px] py-[40px] px-[16px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F8FAFC] rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] border border-[#0000001A] lg:py-[64px] md:py-[48px] py-[32px] px-[20px] sm:px-[24px] md:px-[32px] lg:px-[16px]"
        >
          {/* Heading */}
          <div className="w-full max-w-[960px] mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-excon text-[28px] sm:text-[32px] md:text-[38px] lg:text-[48px] font-bold text-dark text-center mb-3 sm:mb-4"
            >
              Make an Informed Decision
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-ranade text-[14px] sm:text-[16px] md:text-[18px] lg:text-xl text-dark/80 text-center mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Attend the webinar, understand both tracks clearly, and choose your path with confidence.
            </motion.p>

            {/* Benefits Grid */}
            <div className="bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-[22px] rounded-[8px] p-[16px] sm:p-[18px] md:p-[20px] lg:p-[14px] mb-6 sm:mb-8 md:mb-10 border border-[#0000001A]">
              {benefitStaticData.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-2 sm:gap-2.5"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <CircleCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#009FFF]" />
                  </div>
                  <span className="font-ranade text-[13px] sm:text-[14px] font-medium text-dark/90 leading-relaxed">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            >
              <Link
                href={primaryButtonHref}
                className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium no-underline"
              >
                {primaryButtonText}
                <ArrowRight className="w-4 h-4 sm:w-4 sm:h-4" />
              </Link>
              <Link
                href={secondaryButtonHref}
                className="btn-outline w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium no-underline"
              >
                {secondaryButtonText}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
