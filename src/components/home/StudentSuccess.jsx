'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/* ─────────────────────────────────────────────
   Helpers
───────────────────────────────────────────── */

/**
 * Map a raw success-story record (from the API or from page content) into the
 * normalised shape the component needs.
 */
function mapStory(raw, idx) {
  const full = String(raw.name || 'Learner').trim();
  const parts = full.split(/\s+/).filter(Boolean);
  const firstName = parts[0] || 'Learner';
  const lastName = parts.slice(1).join(' ');

  // content-embedded learners may already have split names
  const name = raw.firstName || raw.name ? raw.firstName || firstName : 'Learner';
  const last = raw.lastName || lastName;

  const rawImg = raw.thumbnailImage || raw.mainImage || raw.profileImage || raw.image || '';
  const img = process.env.DYNAMIC_IMG_BASE_PATH + rawImg;

  const headline = raw.headline || '';
  const headlineBold = Array.isArray(raw.headlineBold) ? raw.headlineBold : [];

  return {
    _id: raw._id || raw.id || `story-${idx}`,
    name,
    lastName: last,
    thumbnailImage: img,
    mainImage: process.env.DYNAMIC_IMG_BASE_PATH + raw.mainImage,
    headline,
    headlineBold,
    testimonial: raw.testimonial || raw.text || '',
  };
}

/* ─────────────────────────────────────────────
   Animation variants
───────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const testimonialVariants = {
  enter: { opacity: 0, y: 16 },
  center: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25 } },
};

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */

/** Single learner thumbnail card in the carousel. */
function LearnerCard({ learner, isActive, onClick, cardRef }) {
  return (
    <div
      ref={cardRef}
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`flex flex-col items-center gap-2 shrink-0 cursor-pointer p-[10px]
         rounded-sm transition-opacity duration-200 
        ${isActive ? 'bg-white text-dark' : 'bg-[#FFFFFF1A] text-white'}`}
    >
      <div
        className={`w-[50px] h-[50px] rounded-sm overflow-hidden transition-colors 
          duration-200`}
      >
        {learner.thumbnailImage ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={learner.thumbnailImage}
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full bg-[#e2e8f0] flex items-center justify-center text-[#94a3b8] text-lg font-bold">
            {learner.name?.[0] || '?'}
          </div>
        )}
      </div>
      <span className="text-[11px] sm:text-[12px]  font-medium text-center leading-tight max-w-[72px] truncate">
        {learner.name}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */

export default function StudentSuccess({ successStories, sectionContent = {} }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const cardRefs = useRef([]);

  /* ── Build learners list ──────────────────────────────────────
     Priority:
       1. Learners embedded directly in CMS page content
       2. Server-fetched success stories passed as prop
  ─────────────────────────────────────────────────────────────── */
  const contentLearners = Array.isArray(sectionContent.learners) ? sectionContent.learners : [];
  const apiLearners = Array.isArray(successStories) ? successStories : [];

  const rawList = contentLearners.length > 0 ? contentLearners : apiLearners;

  const learners = rawList
    .filter(
      (r) =>
        r &&
        (r.thumbnailImage ||
          r.mainImage ||
          r.profileImage ||
          r.image ||
          r.name ||
          r.testimonial ||
          r.text ||
          r.headline),
    )
    .map((r, idx) => mapStory(r, idx));

  /* ── Keep activeIndex in bounds (derived, no effect needed) ── */
  const safeIndex = learners.length > 0 ? Math.min(activeIndex, learners.length - 1) : 0;

  /* ── Scroll carousel to keep active card centred ── */
  useEffect(() => {
    const carousel = carouselRef.current;
    const card = cardRefs.current[safeIndex];
    if (!carousel || !card) return;

    const maxScroll = Math.max(0, carousel.scrollWidth - carousel.clientWidth);
    const target = card.offsetLeft - (carousel.clientWidth - card.offsetWidth) / 2;
    carousel.scrollTo({ left: Math.max(0, Math.min(target, maxScroll)), behavior: 'smooth' });
  }, [safeIndex, learners.length]);

  /* ── Nothing to render ── */
  if (learners.length === 0) return null;

  const activeLearner = learners[safeIndex] ?? learners[0];

  const handlePrev = () => setActiveIndex((i) => (i <= 0 ? learners.length - 1 : i - 1));
  const handleNext = () => setActiveIndex((i) => (i >= learners.length - 1 ? 0 : i + 1));

  return (
    <section className="bg-[#009FFF] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-8 items-start">
        {/* ══ LEFT COLUMN ══ */}
        <motion.div
          className="w-full lg:max-w-[380px] xl:max-w-[528px] shrink-0 flex flex-col"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
        >
          {/* Label */}
          <span className="font-[Ranade,sans-serif] text-[14px] sm:text-[15px] text-white font-medium mb-3 uppercase tracking-wide">
            Student Success Stories
          </span>

          {/* Heading */}
          <h2 className="excon-font text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[46px] font-light text-white leading-[1.3] mb-8">
            Discover the inspiring stories{' '}
            <span className="font-bold"> & honest experiences shared by our successful learners.</span>
          </h2>

          {/* Carousel + arrows */}
          <div className="flex gap-4">
            {/* Arrow row */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                disabled={learners.length <= 1}
                aria-label="Previous learner"
                className="w-8 h-8 rounded-full border-0 text-white flex items-center justify-center transition-colors duration-200 hover:bg-[#f8fafc] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                style={{ background: 'rgba(255, 255, 255, 0.10)' }}
              >
                <ChevronLeft width={16} height={16} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={learners.length <= 1}
                aria-label="Next learner"
                className="w-8 h-8 rounded-full text-white flex items-center justify-center transition-colors duration-200 hover:bg-[#f8fafc] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                style={{ background: 'rgba(255, 255, 255, 0.10)' }}
              >
                <ChevronRight width={16} height={16} />
              </button>
            </div>

            {/* Thumbnail carousel */}
            <div
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {learners.map((learner, index) => (
                <LearnerCard
                  key={learner._id}
                  learner={learner}
                  isActive={safeIndex === index}
                  onClick={() => setActiveIndex(index)}
                  cardRef={(el) => {
                    cardRefs.current[index] = el;
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* ══ RIGHT COLUMN — Testimonial card ══ */}
        <motion.div
          className="flex-1 w-full max-w-[630px]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0.1}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLearner._id}
              variants={testimonialVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className=" bg-[#FAFAFA] overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row gap-0  min-h-[468px]">
                {/* Text side */}
                <div className="flex-1 min-w-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  {/* Quote icon */}
                  <div className="text-[#009FFF] mb-4" aria-hidden>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg>
                  </div>

                  {/* Headline */}
                  <h3 className="excon-font text-[18px] sm:text-[20px] lg:text-[24px] font-medium text-[#1E1E1E] leading-[1.4] mb-4">
                    {activeLearner.headline}
                  </h3>

                  {/* Testimonial body */}
                  {activeLearner.testimonial && (
                    <p className="ranade-font text-[10px] text-[#5A6475] leading-[1.4] m-0">
                      {activeLearner.testimonial}
                    </p>
                  )}
                </div>

                {/* Photo side */}
                {(activeLearner.mainImage || activeLearner.thumbnailImage) && (
                  <div className="sm:w-[220px] lg:w-[320px] shrink-0 relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={activeLearner.mainImage || activeLearner.thumbnailImage}
                      alt=""
                      aria-hidden
                      className="w-full h-[416px] sm:h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
