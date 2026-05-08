'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const FALLBACK_PORTAL = {
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

const FALLBACK_PLACEMENT = {
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
  const portalCard = data.portalCard || FALLBACK_PORTAL;
  const placementCard = data.placementCard || FALLBACK_PLACEMENT;

  return (
    <section className="w-full bg-[#F8FAFC] lg:py-[80px] py-[64px] px-[16px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-excon text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-light text-[#0B1C33] text-center mb-8 md:mb-12"
        >
          Complete <span className="font-bold">Support Ecosystem</span>
        </motion.h2>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Portal Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[8px] p-[32px] border border-[#0000001A] relative overflow-hidden"
          >
            {/* Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1A202C] to-[#2D3748]" />

            <h3 className="font-excon text-2xl md:text-[28px] font-bold text-dark mb-4">{portalCard.title}</h3>
            <p className="font-ranade text-[16px] md:text-[18px] text-dark/70 mb-6">{portalCard.description}</p>

            <ul className="space-y-3">
              {portalCard.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#15803D] flex-shrink-0 mt-0.5" />
                  <span className="font-ranade text-[15px] text-dark/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Placement Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[8px] p-[32px] border border-[#0000001A] relative overflow-hidden"
          >
            {/* Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0CA4EB] to-[#0056D2]" />

            <h3 className="font-excon text-2xl md:text-[28px] font-bold text-dark mb-4">{placementCard.title}</h3>
            <p className="font-ranade text-[16px] md:text-[18px] text-dark/70 mb-6">{placementCard.description}</p>

            <ul className="space-y-3">
              {placementCard.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0CA4EB] flex-shrink-0 mt-0.5" />
                  <span className="font-ranade text-[15px] text-dark/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
