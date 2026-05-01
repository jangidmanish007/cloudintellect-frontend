'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const timelineItem = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const sideArticleItem = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const mainFeatureVariant = {
  hidden: { opacity: 0, scale: 0.97 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function NewsAndEvents({ newsAndEventsData }) {
  const data = newsAndEventsData || {};

  const headingLine1 = data.headingLine1 || 'News and';
  const headingStrong = data.headingStrong || 'Events';
  const mainFeature = data.mainFeature || {};
  const timelineItems = Array.isArray(data.timelineItems) ? data.timelineItems : [];
  const sideArticles = Array.isArray(data.sideArticles) ? data.sideArticles : [];

  return (
    <section className="relative bg-[#F8FAFC] py-16 px-[16px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* ── Section Title ── */}
        <motion.h2
          className="excon-font text-[#1E1E1E] text-center text-[32px] sm:text-[48px] font-light leading-normal mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          custom={0}
        >
          {headingLine1} <span className="font-bold">{headingStrong}</span>
        </motion.h2>

        {/* ── Content Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* ── Left Column: Timeline Items ── */}
          <motion.div
            className="lg:col-span-3 md:col-span-4 flex flex-col gap-4 max-h-[400px] sm:max-h-[500px] lg:max-h-[742px] overflow-y-auto pr-2 custom-scrollbar"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {timelineItems?.map((item, i) => (
              <motion.div
                key={i}
                variants={timelineItem}
                className="rounded-[4px] flex gap-3 items-start transition-shadow duration-300 cursor-pointer group"
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {item?.image && (
                  <div className="relative w-[130px] h-[160px] rounded-[4px] overflow-hidden shrink-0">
                    <Image
                      src={process.env.DYNAMIC_IMG_BASE_PATH + item?.image}
                      alt={item?.title || ''}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0 p-2">
                  <h3 className="ranade-font text-[#00000080] text-[10px] font-normal leading-tight mb-1 line-clamp-2">
                    {item?.title}
                  </h3>
                  <p className="excon-font text-dark text-[12px] font-normal leading-relaxed line-clamp-5">
                    {item?.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Center Column: Main Feature ── */}
          <motion.div
            className="lg:col-span-6  md:col-span-8"
            variants={mainFeatureVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <article className="relative rounded-[4px] overflow-hidden lg:min-h-[504px] md:min-h-[400px] flex flex-col group cursor-pointer">
              {mainFeature?.image && (
                <div className="relative w-full h-[280px] lg:h-[504px] h-size-[300px] overflow-hidden">
                  <Image
                    src={process.env.DYNAMIC_IMG_BASE_PATH + mainFeature?.image}
                    alt={mainFeature?.title || ''}
                    fill
                    unoptimized
                    quality={100}
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              )}

              <div className="py-6 flex flex-col gap-3 flex-1">
                <h2 className="excon-font text-[#0f172a] text-[20px] sm:text-[24px] font-bold leading-snug">
                  {mainFeature.title}
                </h2>
                <p className="ranade-font text-[#475569] text-[14px] sm:text-[16px] font-normal leading-relaxed flex-1">
                  {mainFeature.description}
                </p>
                {mainFeature.readMoreHref && (
                  <Link
                    href={mainFeature.readMoreHref}
                    className="inline-flex justify-center max-w-[190px] gap-2 px-4 py-2 rounded btn-primary border-0  transition text-sm font-medium underline-none"
                  >
                    {mainFeature.readMoreLabel || 'READ MORE'} <ArrowRight width={16} height={16} />
                  </Link>
                )}
              </div>
            </article>
          </motion.div>

          {/* ── Right Column: Side Articles ── */}
          <motion.div
            className="lg:col-span-3 md:col-span-10 flex md:flex-row lg:flex-col flex-col gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {sideArticles.map((article, i) => (
              <motion.article
                key={i}
                variants={sideArticleItem}
                className="rounded-[4px] overflow-hidden transition-shadow duration-300 cursor-pointer group"
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {article?.image && (
                  <div className="relative w-full h-[200px] overflow-hidden border border-[#0000000D] ">
                    <Image
                      src={process.env.DYNAMIC_IMG_BASE_PATH + article?.image}
                      alt={article?.title || ''}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 25vw"
                    />
                  </div>
                )}
                <div className="py-4">
                  <h3 className="ranade-font text-[#00000080] text-[10px] font-normal leading-tight mb-1 line-clamp-2">
                    {article?.title}
                  </h3>
                  <p className="excon-font text-dark text-[12px] font-normal leading-relaxed line-clamp-5">
                    {article?.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
