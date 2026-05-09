'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import Image from 'next/image';

const staticData = [
  {
    title: 'Engineering & Freshers',
    icon: 'images/webinar/gear-icon.svg',
    bullets: ['BE / BTech / Diploma students', 'Final-year (BCA, MCA, BSC IT-CS)'],
  },
  {
    title: 'Non-Tech Graduates',
    icon: 'images/webinar/attended-icon-4.svg',
    bullets: ['BBA, B.Com, BA, BSc backgrounds', 'Interested in Marketing Automation & CRM'],
  },
  {
    title: 'Working Professionals',
    icon: 'images/webinar/attended-icon-2.svg',
    bullets: ['Looking to upskill/switch', '0-10+ years experience'],
  },
  {
    title: 'Career Switchers',
    icon: 'images/webinar/brefcase-icon.svg',
    bullets: ['Transitioning from non-IT to IT', 'Strong learning intent required'],
  },
];

const SfmcStaticNotes = [
  'Freshers are NOT allowed in the SFMC Track.',
  'Minimum 3 Years Experience required in any field.',
  'Pass-out year should be 2023 or earlier.',
];

const sfdcStaticNotes = ['Freshers can apply for the SFDC track.', 'Graduation completed or pursuing final year.'];

export default function WhoCanApply({ whoCanApplyData }) {
  const data = whoCanApplyData || {};
  const cards = data.cards && data.cards.length > 0 ? data.cards : staticData;
  const sfmcNotes = data.notesSfmc?.items || SfmcStaticNotes;
  const sfdcNotes = data.notesSfdc?.items || sfdcStaticNotes;

  return (
    <section className="w-full bg-[#F8FAFC] py-[40px] sm:py-[56px] md:py-[64px] lg:py-[80px] px-[16px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-excon text-[24px] sm:text-[32px] md:text-[42px] lg:text-[48px] font-light text-[#0B1C33] mb-6 sm:mb-8 md:mb-12"
        >
          Who <span className="font-bold">Can Apply?</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {/* Cards Section - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-[12px] sm:rounded-[14px] p-[16px] sm:p-[20px] lg:p-[24px] border border-[#0000001A] transition-all duration-300"
                >
                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-[8px] bg-[#009FFF1A] flex items-center justify-center shrink-0">
                      {card.icon ? (
                        <Image
                          src={process.env.NEXT_PUBLIC_IMG_PATH + card.icon}
                          alt=""
                          width={24}
                          height={24}
                          className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                        />
                      ) : (
                        <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#0CA4EB]" />
                      )}
                    </div>
                    <h3 className="font-excon text-[16px] sm:text-[17px] lg:text-[18px] font-bold text-dark flex-1">
                      {card.title}
                    </h3>
                  </div>

                  {/* Bullets */}
                  <ul className="list-disc list-outside pl-5 mb-0">
                    {card.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 mb-1"
                        style={{ listStyle: 'disc', display: 'list-item' }}
                      >
                        <span className="font-ranade text-[14px] sm:text-[15px] lg:text-[16px] text-dark/80">
                          {bullet}
                        </span>
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
            className="space-y-4 sm:space-y-5 lg:space-y-6"
          >
            {/* SFMC Notes */}
            <div className="rounded-[12px] sm:rounded-[14px] p-[16px] sm:p-[20px] lg:p-[24px] bg-[#0B1C33] border border-[#0B1C33]">
              <div className="mb-[14px] sm:mb-[16px]">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <div className="shrink-0">
                    <Image
                      width={20}
                      height={20}
                      alt="bolt icon"
                      src={`${process.env.NEXT_PUBLIC_IMG_PATH}images/gallery/offline_bolt.svg`}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  </div>
                  <h3 className="font-excon text-[16px] sm:text-[17px] lg:text-lg font-bold text-white">
                    Notes For SFMC
                  </h3>
                </div>
                <div className="flex flex-col gap-[16px] sm:gap-[20px] lg:gap-[24px]">
                  {sfmcNotes.map((note, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 sm:gap-3 py-[10px] sm:py-[12px] px-[12px] sm:px-[16px] text-white bg-[#FFFFFF1A] rounded-[12px] sm:rounded-[14px] border border-[#FFFFFF1A]"
                    >
                      <div className="shrink-0">
                        <Image
                          width={32}
                          height={32}
                          alt="bolt icon"
                          src={`${process.env.NEXT_PUBLIC_IMG_PATH}images/about-us/gaurantee-icon.svg`}
                          className="w-8 h-8 sm:w-9 sm:h-9 lg:w-9 lg:h-9"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-ranade text-[13px] sm:text-[14px] text-white">{note}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SFDC Notes */}
              <div className="">
                <div className="flex items-center gap-2 mb-3">
                  <div className="shrink-0">
                    <Image
                      width={20}
                      height={20}
                      alt="bolt icon"
                      src={`${process.env.NEXT_PUBLIC_IMG_PATH}images/gallery/offline_bolt.svg`}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  </div>
                  <h3 className="font-excon text-[16px] sm:text-[17px] lg:text-lg font-bold text-white">
                    Notes For SFDC
                  </h3>
                </div>
                <div className="flex flex-col gap-[16px] sm:gap-[20px] lg:gap-[24px]">
                  {sfdcNotes.map((note, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 sm:gap-3 py-[10px] sm:py-[12px] px-[12px] sm:px-[16px] text-white bg-[#FFFFFF1A] rounded-[12px] sm:rounded-[14px] border border-[#FFFFFF1A]"
                    >
                      <div className="shrink-0">
                        <Image
                          width={32}
                          height={32}
                          alt="bolt icon"
                          src={`${process.env.NEXT_PUBLIC_IMG_PATH}images/about-us/gaurantee-icon.svg`}
                          className="w-8 h-8 sm:w-9 sm:h-9 lg:w-9 lg:h-9"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-ranade text-[13px] sm:text-[14px] text-white">{note}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
