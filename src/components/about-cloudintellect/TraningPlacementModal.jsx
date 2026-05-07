'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Briefcase, CircleCheck } from 'lucide-react';
import Image from 'next/image';

const featuresStaticData = [
  { label: 'Resume Building' },
  { label: 'Mock Interviews' },
  { label: 'HR & Tech Prep' },
  { label: 'Direct Referrals' },
];

const serviceStaticData = [
  { text: 'End-to-end Salesforce career enablement' },
  { text: 'Practical learning on real Salesforce orgs' },
  { text: 'Real-world project exposure' },
  { text: 'Certification-aligned preparation' },
  { text: 'Dedicated placement assistance' },
];

export default function TraningPlacementModal({ trainingPlacementModel }) {
  const data = trainingPlacementModel || {};

  const featuresRaw = Array.isArray(data?.features) && data?.features.length > 0 ? data?.features : featuresStaticData;

  const serviceItemsRaw =
    Array.isArray(data?.serviceItems) && data?.serviceItems.length > 0 ? data?.serviceItems : serviceStaticData;

  return (
    <section className="w-full bg-white lg:py-[80px] py-[64px] px-[16px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5 sm:gap-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#0000001A] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 w-fit">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#0CA4EB] rounded-full" aria-hidden="true" />
              <span className="text-[#0CA4EB] text-[9px] sm:text-[10px] font-medium tracking-wider uppercase">
                {data?.badgeText || 'UNIQUE OPPORTUNITY'}
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-excon text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] leading-[1.15] font-bold text-[#0F172A]">
              <span className="block">{data?.headingLine1 || 'Training + Placement'}</span>
              <span className="block font-bold">{data?.headingLine2 || 'Model'}</span>
            </h2>

            {/* Intro */}
            <p className="text-[18px] sm:text-[20px] font-normal text-dark font-ranade">
              {data?.intro || 'At Cloud Intellect, training and placement are linked.'}
            </p>

            {/* Description */}
            <p className="text-[18px] sm:text-[20px] font-normal text-dark font-ranade">
              {data?.description ||
                'Placement support is not optional or an add-on — it is an integral part of our programs. Learners receive guidance and support until they are placement-ready and successfully hired.'}
            </p>

            {/* Features Grid */}
            {featuresRaw.length > 0 && (
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-2 max-w-[400px]">
                {featuresRaw.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-center gap-2 sm:gap-3 border border-[#0000001A] rounded-[4px] p-3 sm:p-4"
                  >
                    <CircleCheck className="w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] text-[#0CA4EB] flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-[#334155]">{feature.label}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0B1C33] rounded-[14px] p-[24px] text-white"
          >
            {/* Panel Header */}
            <div className="flex items-start gap-3 sm:gap-4 mb-[18px] sm:mb-[24px]">
              <div className="w-[24px] h-[24px] rounded-full flex items-center justify-center shrink-0">
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMG_PATH}images/gallery/offline_bolt.svg`}
                  width={24}
                  height={24}
                  alt="offline_bolt"
                  className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                />
              </div>
              <div>
                <h3 className="text-[16px] sm:text-[18px] font-excon font-bold mb-1">
                  {data?.panelTitle || 'What Services Do We Provide?'}
                </h3>
                {data?.panelSubtitle && <p className="text-sm sm:text-base text-white/80">{data?.panelSubtitle}</p>}
              </div>
            </div>

            {/* Service Items */}
            <ul className="space-y-3 sm:space-y-4">
              {serviceItemsRaw?.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-center gap-3  p-[16px] lg:p-[14px] bg-[#FFFFFF1A] border border-[#FFFFFF1A] rounded-[14px]"
                >
                  <span className="shrink-0 w-[36px] h-[36px]">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_PATH}images/about-us/gaurantee-icon.svg`}
                      width={36}
                      height={36}
                      alt="gaurantee icon"
                      className=""
                    />
                  </span>
                  <span className="text-sm sm:text-base leading-relaxed">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
