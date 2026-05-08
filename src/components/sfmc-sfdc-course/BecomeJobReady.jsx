'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function BecomeJobReady({ jobReadyData }) {
  const data = jobReadyData || {};
  const title = data.title || 'Become Job-Ready in 3 to 6 Months';
  const description =
    data.description ||
    'Our training model is designed to bridge the gap between education and employability, providing practical exposure equivalent to industry experience.';
  const ctaText = data.ctaText || 'Download Brochure';
  const ctaHref = data.ctaHref || '#brochure';
  const icon = data.icon || '/images/person_heart.svg';

  return (
    <section className="w-full bg-white lg:py-[80px] py-[64px] px-[16px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#0CA4EB]/5 to-[#0056D2]/5 rounded-[16px] p-[32px] md:p-[48px] lg:p-[64px] border border-[#0CA4EB]/20 text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#0CA4EB] to-[#0056D2] flex items-center justify-center"
          >
            {icon ? (
              <Image
                src={process.env.NEXT_PUBLIC_IMG_PATH + icon}
                alt=""
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            ) : (
              <Heart className="w-10 h-10 text-white" />
            )}
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-excon text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-[#0B1C33] mb-6"
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-ranade text-[16px] md:text-[18px] lg:text-[20px] text-dark/70 max-w-[800px] mx-auto mb-8"
          >
            {description}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              href={ctaHref}
              className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium no-underline"
            >
              {ctaText}
              <Download className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
