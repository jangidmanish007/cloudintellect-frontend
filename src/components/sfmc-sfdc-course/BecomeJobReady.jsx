'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function BecomeJobReady({ jobReadyData }) {
  const data = jobReadyData || {};

  return (
    <section className="w-full bg-white lg:py-[80px] py-[64px] px-[16px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F8FAFC] rounded-[16px] p-[32px] md:p-[48px] lg:p-[64px] border border-[#0000001A] text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-6 rounded-2xl flex items-center justify-center"
          >
            <Image
              src={process.env.NEXT_PUBLIC_IMG_PATH + 'images/gallery/job-ready-icon.svg'}
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-excon text-[26px] sm:text-[30px] md:text-[32px] lg:text-[34px] font-bold text-dark mb-[14px]"
          >
            {data?.title || 'Become Job-Ready in 3 to 6 Months'}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-ranade text-[16px] md:text-[18px] text-dark max-w-[800px] mx-auto mb-8"
          >
            {data?.description ||
              'Our training model is designed to bridge the gap between education and employability, providing practical exposure equivalent to industry experience.'}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              href={data?.ctaHref || '#brochure'}
              className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium no-underline"
            >
              {data?.ctaText || 'Download Brochure'}
              <Download className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
