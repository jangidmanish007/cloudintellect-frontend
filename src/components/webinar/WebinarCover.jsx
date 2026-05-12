'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function WebinarCover({ webinarsCover, topicsData }) {
  const sectionContent = webinarsCover || {};

  // Split heading at "Webinars" if present
  const projectTitle = sectionContent.projectTitle || 'Real Project Experience';
  const projectSubtitle = sectionContent.projectSubtitle || 'Guaranteed exposure';

  const topics = topicsData || [];

  return (
    <section className="w-full bg-gray-50 lg:py-[80px] md:py-[60px] py-[40px] px-[16px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex lg:flex-row flex-col justify-between lg:gap-[24px] gap-[40px]">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-[24px] w-full lg:max-w-[410px]"
          >
            {/* Heading */}
            <h2 className="font-excon mb-[8px] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[48px] font-light text-[#0B1C33] leading-tight">
              What These <span className="font-bold"> Webinars Cover</span>
            </h2>

            {/* Intro */}
            <p className="font-ranade mb-[8px] text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] text-dark">
              We focus on clarity, not theory overload. Our goal is to give you a realistic view of the ecosystem before
              you commit.
            </p>

            {/* Why Attend Card */}
            <div className="bg-[#0B1C33] rounded-2xl p-[20px] sm:p-[24px] border border-gray-200 shadow-sm">
              <div className="flex items-start gap-3 mb-4 text-white">
                <div className="flex-shrink-0">
                  <Image
                    width={24}
                    height={24}
                    alt="bolt icon"
                    src={`${process.env.NEXT_PUBLIC_IMG_PATH}images/gallery/offline_bolt.svg`}
                  />
                </div>
                <h3 className="font-excon text-[16px] sm:text-[18px] mb-[8px] font-bold">Why Attend?</h3>
              </div>
              <p className="font-ranade text-[14px] sm:text-[15px] md:text-[16px] text-white leading-relaxed mb-[20px] sm:mb-[28px]">
                Choosing the right track is crucial. Don't invest time in the wrong direction without understanding the
                practical reality first.
              </p>

              {/* Project Experience Badge */}
              <div className="flex items-center gap-3 p-3 sm:p-4 mb-4 text-white bg-[#FFFFFF1A] rounded-[14px] border border-[#FFFFFF1A]">
                <div className="flex-shrink-0">
                  <Image
                    width={36}
                    height={36}
                    alt="bolt icon"
                    src={`${process.env.NEXT_PUBLIC_IMG_PATH}images/about-us/gaurantee-icon.svg`}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-ranade text-[13px] sm:text-[14px] font-semibold">{projectTitle}</span>
                  <span className="font-ranade text-[11px] sm:text-[12px] text-[#FFFFFFBF]">{projectSubtitle}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Topics Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col w-full lg:max-w-[846px]"
          >
            {topics.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] sm:gap-[20px] md:gap-[24px]">
                {topics.map((topic, index) => (
                  <motion.div
                    key={topic._id || index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-[14px] p-[20px] sm:p-[24px] lg:p-[30px] border border-[#0000001A] hover:shadow-lg transition-shadow duration-300"
                  >
                    {/* Icon */}
                    <div className="w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] rounded-lg bg-[#0CA4EB]/10 flex items-center justify-center mb-3 sm:mb-4">
                      {topic.icon ? (
                        <Image
                          src={`${process.env.DYNAMIC_IMG_BASE_PATH}${topic.icon}`}
                          alt=""
                          width={28}
                          height={28}
                          className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] object-contain"
                          aria-hidden="true"
                        />
                      ) : (
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMG_PATH}images/webiner/webinar-cover-icon-1.svg`}
                          alt=""
                          width={28}
                          height={28}
                          className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] object-contain"
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-excon text-[16px] sm:text-[17px] md:text-[18px] font-bold text-dark mb-[12px] sm:mb-[14px]">
                      {topic.title}
                    </h3>

                    {/* Description */}
                    <p className="font-ranade text-[14px] sm:text-[15px] lg:text-[16px] text-dark leading-relaxed line-clamp-3">
                      {topic.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                <p className="text-[14px] sm:text-[16px]">No topics available</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
