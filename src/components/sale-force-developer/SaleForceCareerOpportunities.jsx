'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Static fallback data
const staticData = {
  headingLine1: 'Career Opportunities After',
  headingStrong: 'Salesforce Developer Course',
  roles: [
    { title: 'Salesforce Developer', description: 'Build custom applications and integrations on Salesforce.' },
    { title: 'Salesforce Administrator', description: 'Manage user setup, permissions, and data.' },
    { title: 'Salesforce Consultant', description: 'Analyze business requirements and implement solutions.' },
    { title: 'Salesforce Analyst', description: 'Work with clients to gather requirements and optimize processes.' },
    { title: 'Salesforce App Developer', description: 'Create and deploy custom applications.' },
    { title: 'Salesforce Architect', description: 'Design complex solutions and lead development teams.' },
  ],
};

export default function SaleForceCareerOpportunities({ sfdcCareerOpportunities }) {
  // Use dynamic data if available, otherwise use static data
  const data = sfdcCareerOpportunities || staticData;
  const headingLine1 = data.headingLine1;
  const headingStrong = data.headingStrong;
  const roles = data.roles;

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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
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
    <section className="lg:py-[80px] md:py-[64px] py-[48px] bg-[#FFFBF2] px-[16px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <motion.h2
          className="text-[24px] max-w-[860px] mx-auto sm:text-[32px] md:text-[40px] lg:text-[48px] font-excon font-light text-[#0B1C33] lg:mb-[64px] md:mb-[48px] mb-[32px] text-center leading-tight px-[8px]"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {headingLine1} <span className="font-bold">{headingStrong}</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {roles.map((role, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-[16px] sm:p-[20px] lg:p-[24px] border border-[#0000001A] transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0CA4EB]/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMG_PATH}images/home/courses-code.svg`}
                  alt=""
                  width={24}
                  height={24}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </div>
              <h3 className="text-[18px] sm:text-[20px] lg:text-xl font-excon font-bold text-[#0B1C33] mb-2 sm:mb-3 leading-snug">
                {role.title || ''}
              </h3>
              <p className="text-[13px] sm:text-sm text-gray-600 leading-relaxed">{role.description || ''}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
