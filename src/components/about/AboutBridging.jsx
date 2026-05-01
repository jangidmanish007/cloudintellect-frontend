'use client';
import React from 'react';
import Image from 'next/image';

function AboutBridging({ bridgingData }) {
  console.log('bridgingData', bridgingData?.headingLine1);

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24 px=[16px]">
      <div className="max-w-[1280px] mx-auto">
        <div className="w-full max-w-[439px]">
          {/* Heading */}
          <h2 className="font-excon md:text-[40px] text-[28px] lg:text-[48px] font-light leading-tight mb-[48px]">
            {bridgingData?.headingLine1}
            <span className="font-bold ml-1">{bridgingData?.headingLine2}</span>
          </h2>

          {/* Intro Text */}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left Section */}
          <div className="flex flex-col">
            {bridgingData.intro && (
              <p className="font-ranade text-base md:text-[18px] text-gray-700 leading-relaxed mb-[24px] max-w-[80%]">
                {bridgingData.intro}
              </p>
            )}
            {/* Vision Card */}
            {(bridgingData.visionTitle || bridgingData.visionText) && (
              <div className="bg-gray-50 rounded-xl p-5 md:p-6">
                <div className="flex items-start justify-between mb-3">
                  {bridgingData.visionTitle && (
                    <h3 className="font-excon text-xl md:text-2xl font-bold text-gray-900">
                      {bridgingData.visionTitle}
                    </h3>
                  )}
                  <div className=" ml-3">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_PATH}images/about-us/vision-icon.svg`}
                      alt=""
                      width={24}
                      height={24}
                      className="w-[24px] h-[24px]"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                {bridgingData.visionText && (
                  <p className="font-ranade text-sm md:text-base text-gray-700 leading-relaxed">
                    {bridgingData.visionText}
                  </p>
                )}
              </div>
            )}

            {/* Mission Card */}
            {(bridgingData.missionTitle || bridgingData.missionTags) && (
              <div className="bg-gray-50 rounded-xl p-5 md:p-6">
                <div className="flex items-start justify-between mb-4">
                  {bridgingData.missionTitle && (
                    <h3 className="font-excon text-xl md:text-2xl font-bold text-gray-900">
                      {bridgingData.missionTitle}
                    </h3>
                  )}
                  <div className="ml-3">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_PATH}images/about-us/mission-icon.svg`}
                      alt=""
                      width={24}
                      height={24}
                      className="w-[24px] h-[24px]"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                {bridgingData.missionTags && Array.isArray(bridgingData.missionTags) && (
                  <div className="flex flex-wrap gap-2">
                    {bridgingData.missionTags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Section - Partner Card */}
          <div className="flex items-start justify-center lg:justify-end">
            <div className="bg-[#1a2332] rounded-2xl p-8 md:p-10 w-full">
              {/* Partner Badge */}
              <div className="flex justify-start mb-6">
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMG_PATH}images/about-us/saleforce-icon.svg`}
                  alt="Salesforce Ridge Partner"
                  width={80}
                  height={80}
                  className="w-16 h-16 rounded-[4px]"
                />
              </div>

              {/* Partner Subtitle */}
              {bridgingData.partnerSubtitle && (
                <p className="text-xs font-medium text-gray-400 mb-3 tracking-wider uppercase">
                  {bridgingData.partnerSubtitle}
                </p>
              )}

              {/* Partner Name */}
              {bridgingData.partnerName && (
                <h3 className="font-excon text-2xl md:text-3xl font-bold text-white mb-4">
                  {bridgingData.partnerName}
                </h3>
              )}

              {/* Partner Description */}
              {bridgingData.partnerDesc && (
                <p className="font-ranade text-sm md:text-base text-gray-300 leading-relaxed mb-6">
                  {bridgingData.partnerDesc}
                </p>
              )}

              {/* Guarantee Badge */}
              {(bridgingData.guaranteeTitle || bridgingData.guaranteeSub) && (
                <div className="bg-[#243447] rounded-xl p-4 flex items-center gap-4">
                  <div className="shrink-0">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_PATH}images/about-us/gaurantee-icon.svg`}
                      alt=""
                      width={36}
                      height={36}
                      className="w-[36px] h-[36px]"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex flex-col">
                    {bridgingData.guaranteeTitle && (
                      <span className="font-excon text-base md:text-lg font-bold text-white">
                        {bridgingData.guaranteeTitle}
                      </span>
                    )}
                    {bridgingData.guaranteeSub && (
                      <span className="font-ranade text-xs md:text-sm text-gray-400">{bridgingData.guaranteeSub}</span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutBridging;
