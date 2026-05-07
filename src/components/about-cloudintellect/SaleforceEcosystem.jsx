'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

const DEFAULT_BULLETS = [
  'Top candidates join Cloud Intellect Systems, our consulting arm.',
  'Direct exposure to real industry projects.',
  'Open communication with leadership.',
];

export default function SaleforceEcosystem({ salesforceEcosystemShowcase }) {
  const data = salesforceEcosystemShowcase || {};

  const description =
    data.description ??
    'This integrated approach creates a seamless bridge between training, real-world projects, and professional employment.';

  const cultureTitle = data.cultureTitle ?? 'Our Culture';
  const bullets = Array.isArray(data.bullets) && data.bullets.length > 0 ? data.bullets : DEFAULT_BULLETS;

  const imageUrl =
    (data.image && `${process.env.DYNAMIC_IMG_BASE_PATH}${data.image}`) ||
    `${process.env.NEXT_PUBLIC_IMG_PATH}images/gallery/saleforce-ecosystem-img-2.webp`;

  return (
    <section className="w-full bg-[#F8FAFC] lg:py-[80px] md:py-[64px] py-[40px] px-[16px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-[32px] md:gap-[48px] lg:gap-[60px]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex w-full lg:max-w-[590px] flex-col gap-4 sm:gap-5 md:gap-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#0000001A] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 w-fit">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#0CA4EB] rounded-full" aria-hidden="true" />
              <span className="text-[#0CA4EB] text-[9px] sm:text-[10px] font-medium tracking-wider uppercase">
                {data.badgeText || 'UNIQUE OPPORTUNITY'}
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-excon text-[26px] sm:text-[30px] md:text-[36px] lg:text-[42px] leading-[1.15] font-bold text-[#0F172A]">
              <span className="lg:block">{data.headingLine1 || 'The Salesforce'}</span>
              <span className="lg:block lg:ml-0 ml-1">{data.headingLine2 || 'Ecosystem'}</span>
            </h2>

            {/* Description */}
            {(data.description && (
              <p className="text-[15px] sm:text-base md:text-lg text-[#475569] leading-relaxed">{data.description}</p>
            )) ||
              ''}

            {/* Culture Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#0B1C33] rounded-[14px] p-[20px] sm:p-[24px] md:p-[28px] lg:p-[24px]"
            >
              <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[18px] font-excon font-bold text-white mb-4 sm:mb-5">
                {cultureTitle}
              </h3>
              <ul className="space-y-2.5 sm:space-y-3">
                {bullets
                  .filter((b) => String(b).trim())
                  .map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 sm:gap-3 text-white">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-0.5"
                      >
                        <circle cx="12" cy="12" r="10" fill="#009FFF"></circle>
                        <path
                          d="M8 12l3 3 5-6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[14px] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full lg:max-w-[586px] h-[280px] sm:h-[340px] md:h-[400px] lg:h-[465px] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] overflow-hidden shadow-xl"
          >
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt="Salesforce Ecosystem"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 640px"
                priority={false}
              />
            ) : (
              <div className="w-full h-full bg-linear-to-br from-[#0CA4EB]/20 to-[#0CA4EB]/5 flex items-center justify-center">
                <span className="text-[#0CA4EB]/40 text-base sm:text-lg">Image Placeholder</span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
