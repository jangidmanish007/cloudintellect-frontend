'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function FacultyMentors({ facultyMentors }) {
  const facultydata = facultyMentors;

  return (
    <section className="w-full bg-gray-50 py-12 md:py-16 lg:py-20 xl:py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-light text-[#0B1C33] text-center mb-12 md:mb-16"
        >
          {facultydata?.title} <span className="font-bold">{facultydata?.titleBold}</span>
        </motion.h2>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {facultydata?.mentors?.map((mentor, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -4,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              className="bg-white rounded-[14px] p-[24px] border border-[#0000001A] hover:border-[#009FFF] hover:shadow-[0_20px_50px_rgba(0,159,255,0.15)] transition-all duration-300 cursor-pointer group"
            >
              {/* Mentor Photo */}
              <div
                className="w-full mb-[8px] h-[220px] sm:h-[240px] bg-cover bg-center bg-no-repeat rounded-[8px] overflow-hidden relative"
                style={{
                  backgroundImage: mentor.image ? `url('${process.env.DYNAMIC_IMG_BASE_PATH}${mentor.image}')` : 'none',
                  backgroundColor: mentor.image ? 'transparent' : '#e5e7eb',
                }}
                aria-label={`Photo of ${mentor.name}`}
              >
                {/* Overlay effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#009FFF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="relative">
                <h3 className="text-[16px] font-bold text-[#0B1C33] mb-1 transition-colors duration-300">
                  {mentor.name}
                </h3>
                <p className="text-[16px] text-[#009FFF] mb-1 transition-all duration-300">{mentor.role}</p>
                {mentor.experience && (
                  <p className="text-[16px] text-[#0B1C33] font-medium  transition-colors duration-300">
                    {mentor.experience}
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
