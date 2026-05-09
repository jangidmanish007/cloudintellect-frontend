'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Check, CheckCircle, CircleCheck, CircleCheckBig, CircleCheckIcon } from 'lucide-react';

const portalStaticData = {
  title: 'Smart Student Portal Access',
  description:
    'A powerful dashboard built specially for Cloud Intellect learners to manage learning and career in one place.',
  items: [
    'Book mock interview slots',
    'Schedule 1:1 mentor sessions',
    'Access assignments & submit projects',
    'Download notes & recordings anytime',
    'Track course progress step-by-step',
    'Receive placement & interview updates',
  ],
};

const placementStaticData = {
  title: 'Dedicated Placement Assistance',
  description: 'Complete career support to help students move from training to real Salesforce jobs.',
  items: [
    'Professional resume preparation',
    'Mock interviews with expert feedback',
    'Soft-skill & communication training',
    'Daily job openings & referrals',
    'Interview scheduling guidance',
    'Continuous mentor support till placement',
  ],
};

export default function CompleteSupportEcoSystem({ ecosystemData }) {
  const data = ecosystemData || {};
  const portalCard = data.portalCard || portalStaticData;
  const placementCard = data.placementCard || placementStaticData;

  return (
    <section className="w-full bg-[#FFFBF2] py-[40px] sm:py-[56px] md:py-[64px] lg:py-[80px] px-[16px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-excon text-[24px] sm:text-[32px] md:text-[42px] lg:text-[48px] font-light text-[#0B1C33] text-center mb-6 sm:mb-8 md:mb-12"
        >
          Complete <span className="font-bold">Support Ecosystem</span>
        </motion.h2>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] sm:gap-[20px] lg:gap-[24px]">
          {/* Portal Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[8px] p-[16px] sm:p-[20px] lg:p-[24px] border border-[#0000001A] relative overflow-hidden"
          >
            {/* Accent Bar */}
            <div className="h-[8px] sm:h-[10px] bg-[#0B1C33] rounded-[8px] mb-[16px] sm:mb-[20px] lg:mb-[24px]" />

            <h3 className="font-excon text-[19px] sm:text-[21px] md:text-[24px] lg:text-[26px] font-bold text-dark mb-3 sm:mb-4">
              {portalCard.title}
            </h3>
            <p className="font-ranade text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-dark/70 mb-4 sm:mb-5 lg:mb-6">
              {portalCard.description}
            </p>

            <ul className="space-y-2 sm:space-y-2.5 lg:space-y-3">
              {portalCard.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 sm:gap-2.5 lg:gap-3">
                  <CircleCheckIcon className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[24px] lg:h-[24px] mt-0.5 text-[#009FFF] shrink-0" />
                  <span className="font-ranade text-[14px] sm:text-[16px] lg:text-[18px] text-dark/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Placement Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[8px] p-[16px] sm:p-[20px] lg:p-[24px] border border-[#0000001A] relative overflow-hidden"
          >
            {/* Accent Bar */}
            <div className="h-[8px] sm:h-[10px] bg-[#009FFF] rounded-[8px] mb-[16px] sm:mb-[20px] lg:mb-[24px]" />

            <h3 className="font-excon text-[19px] sm:text-[21px] md:text-[24px] lg:text-[26px] font-bold text-dark mb-3 sm:mb-4">
              {placementCard.title}
            </h3>
            <p className="font-ranade text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-dark/70 mb-4 sm:mb-5 lg:mb-6">
              {placementCard.description}
            </p>

            <ul className="space-y-2 sm:space-y-2.5 lg:space-y-3">
              {placementCard.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 sm:gap-2.5 lg:gap-3">
                  <CircleCheckIcon className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[24px] lg:h-[24px] mt-0.5 text-[#009FFF] shrink-0" />
                  <span className="font-ranade text-[14px] sm:text-[16px] lg:text-[18px] text-dark/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
