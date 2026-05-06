'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function OurPlacement({ placements }) {
  const placementsList = placements || [];

  if (placementsList.length === 0) {
    return null;
  }

  const PlacementCard = ({ placement, index }) => (
    <motion.div
      key={placement._id || index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-[24px] transition-all duration-300 border border-[#0000001A] mb-[32px]"
    >
      {/* Image with circular frame */}
      <div className="relative w-full pt-0 pb-4 flex justify-center mt-[-30px]">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#009DE3] ">
          {placement.image ? (
            <Image
              src={`${process.env.DYNAMIC_IMG_BASE_PATH}${placement.image}`}
              alt={placement.name || 'Placement'}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#0CA4EB]/20 to-[#009FFF]/20" />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-5">
        {/* Name */}
        <h3 className="font-excon text-center text-base font-bold text-[#0b1c33] mb-2">{placement.name}</h3>

        {/* Role Tag */}
        {placement.role && (
          <div className="flex justify-center mb-3 text-center">
            <div className="bg-[#0CA4EB] text-white px-4 py-1.5 rounded text-xs font-medium">{placement.role}</div>
          </div>
        )}

        {/* Details */}
        <div className="space-y-2 bg-[#F9FAFB] border border-[#0000001A] rounded-lg p-3 ">
          {/* Company */}
          {placement.company && (
            <div className="flex justify-between items-center">
              <span className="ranade-font text-xs text-gray-500">Company</span>
              <span className="ranade-font text-xs font-semibold text-[#0b1c33] text-right">{placement.company}</span>
            </div>
          )}
          <div className="w-full h-px border-t border-[#0000001A] my-2"></div>
          {/* Package */}
          {placement.package && (
            <div className="flex justify-between items-center">
              <span className="ranade-font text-xs text-gray-500">Package</span>
              <span className="ranade-font text-xs font-bold text-[#0CA4EB]">{placement.package}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="w-full pb-[80px] pt-[120px] px-[16px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* First Background Box */}
        {placementsList.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Placements Grid with Decorative Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative pt-[60px]">
              {/* Left Decorative Box */}
              <div className="absolute top-0 left-0 sm:left-[20px] lg:left-[12%] w-[280px] sm:w-[300px] lg:w-[329px] h-full rounded-[24px] bg-[#009DE31A] border border-[#0000001A] -z-10"></div>

              {/* Right Decorative Box */}
              <div className="absolute top-0 right-0 sm:right-[20px] lg:right-[12%] w-[280px] sm:w-[300px] lg:w-[329px] h-full rounded-[24px] bg-[#009DE31A] border border-[#0000001A] -z-10"></div>

              {placementsList.map((placement, index) => (
                <PlacementCard key={placement._id || index} placement={placement} index={index} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
