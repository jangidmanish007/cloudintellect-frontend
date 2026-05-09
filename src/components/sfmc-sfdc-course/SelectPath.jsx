'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Static bullet points for each path
const PATH_BULLETS = [
  [
    'Focuses on CRM configuration, automation, and development',
    'Used mainly for Sales and Service operations',
    'Ideal for those interested in logic, coding, and system architecture',
  ],
  [
    'Focuses on marketing automation, customer journeys, and campaigns',
    'Used mainly for digital marketing and customer engagement',
    'Ideal for marketers and tech-savvy creative professionals',
  ],
];

export default function SelectPath({ batchesData }) {
  const paths = batchesData || [];

  return (
    <section className="w-full bg-white py-[40px] sm:py-[56px] md:py-[64px] lg:py-[80px] px-[16px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-excon text-[24px] sm:text-[32px] md:text-[42px] lg:text-[48px] font-light text-[#0B1C33] text-center mb-6 sm:mb-8 md:mb-12"
        >
          Select <span className="font-bold">Your Path</span>
        </motion.h2>

        {paths.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg">No paths available at the moment.</p>
            <p className="text-sm mt-2 text-gray-400">Add paths from the admin panel to display them here.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {paths.map((path, index) => (
              <motion.div
                key={path._id || path.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[8px] p-[16px] sm:p-[20px] lg:p-[24px] border border-[#0000001A] overflow-hidden transition-shadow duration-300"
              >
                {/* Banner with Icon */}
                <div
                  className="h-[80px] sm:h-[90px] lg:h-[100px] flex items-center p-[16px] sm:p-[20px] lg:p-[24px] relative rounded-[8px]"
                  style={{ background: path.bannerBg || '#009FFF' }}
                >
                  {path.icon && (
                    <Image
                      src={process.env.DYNAMIC_IMG_BASE_PATH + path.icon}
                      alt=""
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 object-contain"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="pt-[16px] sm:pt-[20px] lg:pt-[24px]">
                  <h3 className="font-excon text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold text-dark mb-[14px] sm:mb-[16px] lg:mb-[24px]">
                    {path.title}
                  </h3>

                  {/* Bullet Points - Static with disc style */}
                  {PATH_BULLETS[index] && (
                    <ul className="mb-[16px] sm:mb-[20px] lg:mb-[24px] pl-5">
                      {PATH_BULLETS[index].map((bullet, idx) => (
                        <li
                          key={idx}
                          className="font-ranade text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-dark/80 mb-1"
                          style={{ listStyle: 'disc', display: 'list-item' }}
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Batch Info */}
                  <div className="space-y-4 mb-4 sm:mb-5 lg:mb-6 bg-[#F8FAFC] border border-[#0000001A] rounded-[8px] p-[16px] sm:p-[20px] lg:p-[24px]">
                    <div className="flex items-start justify-between gap-3 sm:gap-4">
                      <div className="flex-1">
                        <span className="block text-[10px] sm:text-xs text-gray-500 mb-1">Batch Start</span>
                        <span className="block mb-[8px] sm:mb-[10px] font-ranade text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-dark">
                          {path.batchStart}
                        </span>
                        {path.isOpen && (
                          <span className="inline-block mt-1 px-2 sm:px-3 rounded-[30px] py-[4px] sm:py-[6px] bg-[#15803D1A] border border-[#15803D1A] text-[#15803D] text-[10px] sm:text-xs font-medium">
                            Open
                          </span>
                        )}
                      </div>
                      <div className="w-px h-full min-h-[70px] sm:min-h-[80px] lg:min-h-[91px] border-l border-[#0000001A]"></div>
                      <div className="flex-1">
                        <span className="block text-[10px] sm:text-xs text-gray-500 mb-1">Next Batch</span>
                        <span className="block mb-[8px] sm:mb-[10px] font-ranade text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-dark">
                          {path.nextBatch}
                        </span>
                        {path.linkHref && (
                          <Link
                            href={path.linkHref}
                            className="inline-block mt-1 px-2 sm:px-3 rounded-[30px] py-[4px] sm:py-[6px] bg-[#009FFF1A] border border-[#009FFF1A] text-[#009FFF] text-[10px] sm:text-xs font-medium"
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
                      className="w-full inline-flex items-center gap-2 text-[#009FFF] text-[14px] sm:text-[15px] lg:text-base"
                    >
                      {path.linkText || 'Learn More'}
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
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
