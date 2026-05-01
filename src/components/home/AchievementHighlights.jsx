'use client';

import { useRef } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import staticContent from './static-data/achievementHighlights.json';

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
    transition: { staggerChildren: 0.15 },
  },
};

const statItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AchievementHighlights() {
  const sliderRef = useRef(null);
  const { headingLight, headingBold, stats, gallery } = staticContent;
  const hasGallery = gallery && gallery.length > 0;

  // React Slick settings - improved mobile responsiveness
  const slickSettings = {
    dots: false,
    arrows: false,
    infinite: gallery?.length > 1,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    variableWidth: true,
    draggable: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: gallery?.length > 1,
          variableWidth: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          infinite: gallery?.length > 1,
          variableWidth: true,
        },
      },
    ],
  };

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-[80px]" aria-labelledby="achievement-highlights-heading">
      {/* Container for title and stats */}
      <div className="max-w-[1280px] mx-auto">
        {/* ── Title ── */}
        <motion.h2
          id="achievement-highlights-heading"
          className="excon-font flex flex-col items-start gap-1 mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          custom={0}
        >
          <span className="text-charcoal text-2xl sm:text-3xl md:text-[32px] lg:text-4xl font-normal leading-tight">
            {headingLight}
          </span>
          <span className="text-charcoal text-[28px] sm:text-4xl md:text-[38px] lg:text-[44px] font-bold leading-tight">
            {headingBold}
          </span>
        </motion.h2>

        {/* ── Stats Grid ── */}
        <motion.div
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8 lg:gap-10 mb-8 sm:mb-10 md:mb-12 lg:mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          role="list"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={statItem}
              className="flex flex-col p-4 sm:p-0 bg-gray-50 sm:bg-transparent rounded-lg sm:rounded-none"
              role="listitem"
            >
              {/* Number */}
              <p className="excon-font text-cyan text-3xl sm:text-[32px] md:text-[34px] lg:text-4xl font-bold leading-tight m-0 mb-2 sm:mb-3">
                {stat.number}
              </p>

              {/* Title */}
              <p className="excon-font text-charcoal text-[11px] sm:text-xs md:text-[13px] font-bold tracking-wide uppercase leading-snug m-0 mb-2">
                {stat.title}
              </p>

              {/* Description */}
              <p className="ranade-font text-[#374151] text-sm sm:text-[15px] font-normal leading-relaxed m-0">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Gallery Slider (Edge-to-Edge) ── */}
      {hasGallery && (
        <motion.div
          className="w-full overflow-hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          custom={0.2}
        >
          {/* Wrapper with left padding matching container */}
          <div className="pl-4 sm:pl-6 lg:pl-[60px] ml-auto" style={{ maxWidth: 'calc(1280px + 190px)' }}>
            <Slider ref={sliderRef} {...slickSettings}>
              {gallery.map((item, i) => (
                <div
                  key={i}
                  className="outline-none px-1 w-full lg:max-w-[560px] md:max-w-[400px] sm:max-w-[360px] max-w-[300px]"
                >
                  <div className="rounded-lg overflow-hidden aspect-4/3 bg-gray-200 shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`${process.env.NEXT_PUBLIC_IMG_PATH}${item.image}`}
                      alt={item.alt || ''}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover block"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      )}
    </section>
  );
}
