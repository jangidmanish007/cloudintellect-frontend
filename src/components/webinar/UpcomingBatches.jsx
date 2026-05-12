'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function UpcomingBatches({ batchesData }) {
  const batches = batchesData || [];

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
          Upcoming <span className="font-bold"> Salesforce Batches</span>
        </motion.h2>

        {batches.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg">No batches available at the moment.</p>
            <p className="text-sm mt-2 text-gray-400">Add batches from the admin panel to display them here.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {batches.map((batch, index) => (
              <motion.div
                key={batch._id || batch.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[8px] lg:p-[24px] p-[16px] border border-[#0000001A] overflow-hidden transition-shadow duration-300"
              >
                {/* Banner with Icon */}
                <div
                  className="h-[100px] flex items-center p-[24px] relative rounded-[8px]"
                  style={{ background: batch.bannerBg || '#009FFF' }}
                >
                  {batch.icon && (
                    <Image
                      src={process.env.DYNAMIC_IMG_BASE_PATH + batch.icon}
                      alt=""
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="pt-[24px]">
                  <h3 className="font-excon text-xl md:text-[26px] font-bold text-dark mb-[16px] lg:mb-[24px]">
                    {batch.title}
                  </h3>
                  <p className="font-ranade text-[18px] md:text-[20px] text-dark  mb-[16px] lg:mb-[24px] line-clamp-2">
                    {batch.description}
                  </p>

                  {/* Batch Info */}
                  <div className="space-y-4 mb-6 bg-[#F8FAFC] border border-[#0000001A] rounded-[8px] p-[16px] lg:p-[24px]">
                    <div className="flex items-start justify-between gap-4">
                      <div className="">
                        <span className="block text-xs text-gray-500 mb-1">Batch Start</span>
                        <span className="block mb-[10px] font-ranade text-[20px] font-semibold text-dark">
                          {batch.batchStart}
                        </span>
                        {batch.isOpen && (
                          <span className="inline-block mt-1 px-3 rounded-[30px]  py-[6px] bg-[#15803D1A] border border-[#15803D1A] text-[#15803D] text-xs font-medium">
                            Open
                          </span>
                        )}
                      </div>
                      <div className="w-px h-full min-h-[91px] border-l border-[#0000001A]"></div>
                      <div className="">
                        <span className="block text-xs text-gray-500 mb-1">Next Batch</span>
                        <span className="block mb-[10px] font-ranade text-[20px] font-semibold text-dark">
                          {batch.nextBatch}
                        </span>
                        {batch.linkHref && (
                          <Link
                            href={batch.linkHref}
                            className="inline-block mt-1 px-3 rounded-[30px] py-[6px] bg-[#009FFF1A] border border-[#009FFF1A] text-[#009FFF] text-xs font-medium"
                          >
                            View Details
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  {batch.linkHref && (
                    <Link href={batch.linkHref} className="w-full inline-flex items-center gap-2 text-[#009FFF]">
                      {batch.linkText || 'Learn More'}
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
