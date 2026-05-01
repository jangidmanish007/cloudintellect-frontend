'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
export default function WhyChooseUs({ whyChoose }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = whyChoose || {};
  const headingLine1 = data.headingLine1;
  const headingStrong = data.headingStrong;
  const items = Array.isArray(data.items) && data.items.length > 0 ? data.items : [];

  if (!headingLine1 && !headingStrong && items.length === 0) return null;

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white py-16 px-[16px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* ── Section Heading ── */}
        <motion.h2
          className="excon-font text-start text-[#1E1E1E] text-[28px] sm:text-[36px] lg:text-[48px] font-light leading-[1.25] mb-10 sm:mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          custom={0}
        >
          {headingLine1} <strong className="font-bold block">{headingStrong}</strong>
        </motion.h2>

        {/* ── Accordion ── */}
        <motion.div
          className="flex flex-col"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          custom={0.1}
        >
          {items.map((item, index) => {
            const isActive = activeIndex === index;
            const imgSrc = item.image ? `${process.env.DYNAMIC_IMG_BASE_PATH || ''}${item.image}` : null;

            return (
              <div key={item.number ?? index} className="border-b border-[#000] last:border-none">
                <AnimatePresence initial={false} mode="wait">
                  {isActive ? (
                    /* ══ ACTIVE: expanded panel ══ */
                    <motion.div
                      key="active"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="py-8 sm:py-10 cursor-pointer"
                      onClick={() => handleToggle(index)}
                      role="button"
                      tabIndex={0}
                      aria-expanded={true}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleToggle(index)}
                    >
                      {/*
                        Layout (matches image):
                        [large faded number] [title + underline + description]   [img1] [img2]
                      */}
                      <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                        {/* Left block: number + text */}
                        <div className="flex items-start gap-5 sm:gap-8 flex-1 min-w-0">
                          {/* Large faded number */}
                          <span className="text-[60px] text-[#E9E9E9] font-segoe font-bold leading-[50px]">
                            0{index + 1}
                          </span>

                          {/* Title + underline + body text */}
                          <div className="flex-1 min-w-0">
                            <h3 className="excon-font text-[#1A1A1A] text-[18px] sm:text-[21px] lg:text-[23px] font-bold leading-snug mb-2 m-0">
                              {item.title}
                            </h3>
                            {/* Short horizontal rule under title */}
                            <div className="w-7 h-[2px] bg-[#1A1A1A] mb-4" />
                            <p className="ranade-font text-[#5A6475] text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.8] m-0 max-w-[460px]">
                              {item.content}
                            </p>
                          </div>
                        </div>

                        {/* Right block: two images side by side */}
                        {imgSrc && (
                          <div className="flex gap-3 shrink-0 lg:self-start">
                            <img
                              src={imgSrc}
                              alt=""
                              aria-hidden
                              className="w-[150px] h-[130px] sm:w-[190px] sm:h-[160px] lg:w-[220px] lg:h-[185px] object-cover"
                            />
                            <img
                              src={imgSrc}
                              alt=""
                              aria-hidden
                              className="w-[150px] h-[130px] sm:w-[190px] sm:h-[160px] lg:w-[220px] lg:h-[185px] object-cover"
                            />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ) : (
                    /* ══ COLLAPSED: single row with number + title + arrow ══ */
                    <motion.button
                      key="collapsed"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      type="button"
                      onClick={() => handleToggle(index)}
                      aria-expanded={false}
                      className="w-full flex items-center gap-4 sm:gap-6 py-5 sm:py-6 text-left bg-transparent border-none cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009FFF] focus-visible:ring-offset-2 rounded-sm"
                    >
                      {/* Faded number */}
                      <span className="text-[60px] text-[#E9E9E9] font-segoe font-bold leading-[50px]">
                        0{index + 1}
                      </span>

                      {/* Title */}
                      <h3 className="excon-font flex-1 min-w-0 text-[15px] sm:text-[19px] lg:text-[24px] font-medium leading-snug m-0 text-[#1A1A1A]">
                        {item.title}
                      </h3>

                      {/* Arrow → */}
                      <img
                        src={`${process.env.NEXT_PUBLIC_IMG_PATH}images/home/accordion-arrow-icon.svg`}
                        alt=""
                        aria-hidden
                        className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 object-contain opacity-70"
                      />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
