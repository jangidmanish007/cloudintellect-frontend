'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import Image from 'next/image';

export default function WhoShouldAttend({ whoShouldAttend, attendeesData }) {
  const attendees = attendeesData || [];

  if (attendees.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-white px-[16px] lg:py-[80px] py-[64px]">
      <div className="max-w-[1280px] mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-excon text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-light text-dark text-center mb-8 md:mb-12"
        >
          Who Should <span className="font-bold">Attend?</span>
        </motion.h2>

        {/* Attendees Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:gird-cols-3 xl:grid-cols-4 gap-6">
          {attendees.map((attendee, index) => (
            <motion.div
              key={attendee._id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[8px]  lg:p-[24px] p-[18px] border border-[#0000001A]  transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0CA4EB]/10 to-[#0CA4EB]/5 flex items-center justify-center mb-4">
                {attendee.icon ? (
                  <Image
                    src={`${process.env.DYNAMIC_IMG_BASE_PATH}${attendee.icon}`}
                    alt=""
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain"
                  />
                ) : (
                  <Users className="w-7 h-7 text-[#0CA4EB]" />
                )}
              </div>
              <h3 className="font-excon text-lg md:text-[16px] font-bold text-dark mb-[8px]">{attendee.title}</h3>
              <p className="text-sm md:text-[16px] text-dark leading-[1.3]">{attendee.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
