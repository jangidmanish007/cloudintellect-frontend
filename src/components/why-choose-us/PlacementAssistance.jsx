'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import data from './static-data/placementAssistance.json';

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function PlacementAssistance() {
  return (
    <section className="lg:pb-20 lg:pt-10 py-12 px-4 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-[#0F2137] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-0 items-end">
            {/* ── Left Content ── */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="p-6 sm:p-8 md:p-10 lg:p-[48px] w-full lg:max-w-[671px]"
            >
              {/* Icon */}
              <motion.div
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#00A8FF] to-[#0080FF] mb-4 sm:mb-6"
                style={{ boxShadow: '0px 4px 6px -4px #3B82F680, 0px 10px 15px -3px #3B82F680' }}
                variants={fadeUp}
                custom={0.1}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMG_PATH}${data?.icon}`}
                  width={24}
                  height={24}
                  alt="Placement assistance"
                  priority={false}
                />
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-white text-[24px] sm:text-[28px] lg:text-[36px] font-bold leading-tight mb-3 sm:mb-4"
                variants={fadeUp}
                custom={0.2}
              >
                {data.headingLine1} <span className="text-[#19A7E6]"> {data.headingStrong} </span>
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8"
                variants={fadeUp}
                custom={0.3}
              >
                {data.description}
              </motion.p>

              {/* Features Card */}
              <motion.div
                className="bg-[#FFFFFF1A] rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-[18px] border border-[#FFFFFF1A]"
                variants={fadeUp}
                custom={0.4}
              >
                {/* Support Heading */}
                <h4 className="text-white text-base sm:text-[18px] font-bold mb-4 sm:mb-6">
                  {data.supportHeadingLight} {data.supportHeadingBold}
                </h4>

                {/* Features Grid - 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {data.items.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-2"
                      variants={fadeUp}
                      custom={0.5 + index * 0.05}
                    >
                      <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMG_PATH}images/about-us/check-icon.svg`}
                          width={18}
                          height={18}
                          alt="Placement assistance"
                          priority={false}
                        />
                      </div>
                      <span className="text-gray-200 text-[13px] sm:text-[14px] leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* ── Right Image with Blue Circle Background ── */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative h-full w-full lg:max-w-[530px] min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[600px]"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_PATH}${data.image}`}
                alt="Placement assistance"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
