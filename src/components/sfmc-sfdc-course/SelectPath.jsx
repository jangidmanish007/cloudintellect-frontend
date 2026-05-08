'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const FALLBACK_PATHS = [
  {
    id: 'sfdc',
    icon: '/images/Icon Container.svg',
    bannerBg: 'linear-gradient(135deg, #1A202C 0%, #2D3748 100%)',
    title: 'Salesforce Developer Cloud (SFDC)',
    bullets: [
      'Focuses on CRM configuration, automation, and development',
      'Used mainly for Sales and Service operations',
      'Ideal for those interested in logic, coding, and system architecture',
    ],
    batchStart: '17th January',
    nextBatch: '31st January',
    linkText: 'Learn Salesforce Development',
    linkHref: '/salesforce-developer',
    isOpen: true,
  },
  {
    id: 'sfmc',
    icon: '/images/Icon Container copy.svg',
    bannerBg: 'linear-gradient(135deg, #007BFF 0%, #0056D2 100%)',
    title: 'Salesforce Marketing Cloud (SFMC)',
    bullets: [
      'Focuses on marketing automation, customer journeys, and campaigns',
      'Used mainly for digital marketing and customer engagement',
      'Ideal for marketers and tech-savvy creative professionals',
    ],
    batchStart: '18th January',
    nextBatch: '1st February',
    linkText: 'Explore Marketing Cloud Career',
    linkHref: '/salesforce-marketing-cloud',
    isOpen: true,
  },
];

export default function SelectPath({ pathsData }) {
  const paths = pathsData && pathsData.length > 0 ? pathsData : FALLBACK_PATHS;

  return (
    <section className="w-full bg-white lg:py-[80px] py-[64px] px-[16px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-excon text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-light text-[#0B1C33] text-center mb-8 md:mb-12"
        >
          Select <span className="font-bold">Your Path</span>
        </motion.h2>

        {paths.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg">No paths available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {paths.map((path, index) => (
              <motion.div
                key={path.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[8px] border border-[#0000001A] overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                {/* Banner with Icon */}
                <div
                  className="h-[100px] flex items-center p-[24px] relative rounded-t-[8px]"
                  style={{ background: path.bannerBg || '#009FFF' }}
                >
                  {path.icon && (
                    <Image
                      src={process.env.NEXT_PUBLIC_IMG_PATH + path.icon}
                      alt=""
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="p-[24px]">
                  <h3 className="font-excon text-xl md:text-[26px] font-bold text-dark mb-[18px] lg:mb-[24px]">
                    {path.title}
                  </h3>

                  {/* Bullet Points */}
                  {path.bullets && path.bullets.length > 0 && (
                    <ul className="space-y-3 mb-[24px]">
                      {path.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[#15803D] flex-shrink-0 mt-0.5" />
                          <span className="font-ranade text-[16px] md:text-[18px] text-dark/80">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Batch Info */}
                  <div className="space-y-4 mb-6 bg-[#F8FAFC] border border-[#0000001A] rounded-[8px] p-[24px]">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <span className="block text-xs text-gray-500 mb-1">Batch Start</span>
                        <span className="block mb-[10px] font-ranade text-[20px] font-semibold text-dark">
                          {path.batchStart}
                        </span>
                        {path.isOpen && (
                          <span className="inline-block mt-1 px-3 rounded-[30px] py-[6px] bg-[#15803D1A] border border-[#15803D1A] text-[#15803D] text-xs font-medium">
                            Open
                          </span>
                        )}
                      </div>
                      <div className="w-px h-full min-h-[91px] border-l border-[#0000001A]"></div>
                      <div className="flex-1">
                        <span className="block text-xs text-gray-500 mb-1">Next Batch</span>
                        <span className="block mb-[10px] font-ranade text-[20px] font-semibold text-dark">
                          {path.nextBatch}
                        </span>
                        {path.linkHref && (
                          <Link
                            href={path.linkHref}
                            className="inline-block mt-1 px-3 rounded-[30px] py-[6px] bg-[#009FFF1A] border border-[#009FFF1A] text-[#009FFF] text-xs font-medium hover:bg-[#009FFF] hover:text-white transition-colors"
                          >
                            View Details
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  {path.linkHref && (
                    <Link
                      href={path.linkHref}
                      className="w-full inline-flex items-center justify-center gap-2 text-[#009FFF] hover:text-[#0056D2] transition-colors font-medium"
                    >
                      {path.linkText || 'Learn More'}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
