'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import Image from 'next/image';

const FALLBACK_CARDS = [
  {
    title: 'Engineering & Freshers',
    icon: '/images/SFMC_SFDC_Apply/dashboard_2_gear.svg',
    bullets: ['BE / BTech / Diploma students', 'Final-year (BCA, MCA, BSC IT-CS)'],
  },
  {
    title: 'Non-Tech Graduates',
    icon: '/images/SFMC_SFDC_Apply/psychology.svg',
    bullets: ['BBA, B.Com, BA, BSc backgrounds', 'Interested in Marketing Automation & CRM'],
  },
  {
    title: 'Working Professionals',
    icon: '/images/SFMC_SFDC_Apply/person.svg',
    bullets: ['Looking to upskill/switch', '0-10+ years experience'],
  },
  {
    title: 'Career Switchers',
    icon: '/images/SFMC_SFDC_Apply/business_center.svg',
    bullets: ['Transitioning from non-IT to IT', 'Strong learning intent required'],
  },
];

const FALLBACK_SFMC_NOTES = [
  'Freshers are NOT allowed in the SFMC Track.',
  'Minimum 3 Years Experience required in any field.',
  'Pass-out year should be 2023 or earlier.',
];

const FALLBACK_SFDC_NOTES = [
  'Freshers are welcome in the SFDC Track.',
  'No prior experience required.',
  'Strong learning mindset is essential.',
];

export default function WhoCanApply({ whoCanApplyData }) {
  const data = whoCanApplyData || {};
  const cards = data.cards && data.cards.length > 0 ? data.cards : FALLBACK_CARDS;
  const sfmcNotes = data.notesSfmc?.items || FALLBACK_SFMC_NOTES;
  const sfdcNotes = data.notesSfdc?.items || FALLBACK_SFDC_NOTES;

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
          Who <span className="font-bold">Can Apply?</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cards Section - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-[8px] p-[24px] border border-[#0000001A] transition-all duration-300 hover:shadow-md"
                >
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0CA4EB]/10 to-[#0CA4EB]/5 flex items-center justify-center flex-shrink-0">
                      {card.icon ? (
                        <Image
                          src={process.env.NEXT_PUBLIC_IMG_PATH + card.icon}
                          alt=""
                          width={24}
                          height={24}
                          className="w-6 h-6 object-contain"
                        />
                      ) : (
                        <Check className="w-6 h-6 text-[#0CA4EB]" />
                      )}
                    </div>
                    <h3 className="font-excon text-lg md:text-xl font-bold text-dark flex-1">{card.title}</h3>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2">
                    {card.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#15803D] flex-shrink-0 mt-1" />
                        <span className="font-ranade text-[15px] text-dark/80">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Notes Section - Takes 1 column on large screens */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* SFMC Notes */}
            <div className="bg-white rounded-[8px] p-[24px] border border-[#0000001A]">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F59E0B]/10 to-[#F59E0B]/5 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#F59E0B]" />
                </div>
                <h3 className="font-excon text-lg font-bold text-dark">Notes For SFMC</h3>
              </div>
              <ul className="space-y-3">
                {sfmcNotes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#F59E0B] flex-shrink-0 mt-1" />
                    <span className="font-ranade text-[14px] text-dark/80">{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SFDC Notes */}
            {sfdcNotes && sfdcNotes.length > 0 && (
              <div className="bg-white rounded-[8px] p-[24px] border border-[#0000001A]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0CA4EB]/10 to-[#0CA4EB]/5 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#0CA4EB]" />
                  </div>
                  <h3 className="font-excon text-lg font-bold text-dark">Notes For SFDC</h3>
                </div>
                <ul className="space-y-3">
                  {sfdcNotes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#0CA4EB] flex-shrink-0 mt-1" />
                      <span className="font-ranade text-[14px] text-dark/80">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
