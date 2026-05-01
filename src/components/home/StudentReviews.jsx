'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────
   Static review data (mirrors frontend)
───────────────────────────────────────────── */
const REVIEWS = [
  {
    name: 'Ganesh More',
    time: '1 year ago',
    profileImage: 'images/home/testimonial-img-1.webp',
    rating: 5,
    text: 'For those aspiring to kickstart their careers in the IT field, I highly recommend joining Cloud Intellect. The trainers adapt their teaching to your learning pace, addressing every doubt.',
    readMoreUrl: '#',
  },
  {
    name: 'Saurabh Ganvir',
    time: '1 year ago',
    profileImage: 'images/home/testimonial-img-2.webp',
    rating: 5,
    text: 'The teaching was excellent. Training session was outstanding! The knowledge of the subject matter was evident, and you delivered the material in a way that was easy to understand.',
    readMoreUrl: '#',
  },
  {
    name: 'Ashutosh Ganvir',
    time: '1 year ago',
    profileImage: 'images/home/testimonial-img-3.webp',
    rating: 5,
    text: 'Our trainer has explained and cleared all doubts. I had a great time and learning experience from cloud intellect.',
    readMoreUrl: '#',
  },
];

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

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

/* ─────────────────────────────────────────────
   Star Rating
───────────────────────────────────────────── */
function StarRating({ count = 5, size = 16 }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill={i < count ? '#FBBC04' : '#E5E7EB'}
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

/* ─────────────────────────────────────────────
   Google Icon SVG
───────────────────────────────────────────── */
function GoogleIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Review Card
───────────────────────────────────────────── */
function ReviewCard({ review }) {
  return (
    <motion.article
      variants={fadeUp}
      className="bg-white rounded-xl p-5 sm:p-6 flex flex-col gap-3 shadow-[0_2px_12px_rgba(0,0,0,0.07)] border border-[#F0F0F0] h-full"
    >
      {/* Header: avatar + name + google icon */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 bg-[#009FFF] flex items-center justify-center">
            <img
              src={`${process.env.NEXT_PUBLIC_IMG_PATH}${review.profileImage}`}
              alt=""
              aria-hidden
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Name + time */}
          <div className="min-w-0">
            <p className="font-semibold text-[#1E1E1E] text-sm leading-tight truncate">{review.name}</p>
            <p className="text-[11px] text-[#6B7280] leading-tight mt-0.5">{review.time}</p>
          </div>
        </div>

        <GoogleIcon size={20} />
      </div>

      {/* Stars */}
      <StarRating count={review.rating} size={14} />

      {/* Review text */}
      <p className="text-[13px] text-[#4B5563] leading-[1.65]">{review.text}</p>
      <div className="mt-auto">
        <button
          type="button"
          className="text-[#009FFF] text-[12px] font-medium mt-1 hover:underline focus:outline-none cursor-pointer"
        >
          {'Read more'}
        </button>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
export default function StudentReviews() {
  return (
    <section className="bg-[#FFFBF2] py-12 sm:py-16 lg:py-20 px-[16px]">
      <div className="max-w-[1280px] mx-auto">
        {/* ── Section Header ── */}
        <motion.div
          className="mb-10 sm:mb-12 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
        >
          <h2 className=" excon-font text-[28px] sm:text-[36px] lg:text-[46px] font-light text-[#1E1E1E] leading-[1.2]">
            What Say <span className="font-bold text-[#0099FF]">Our Students</span>
          </h2>

          {/* Rating summary row */}
          <div className="flex flex-col flex-wrap items-center gap-1 sm:gap-3 mt-3">
            <span className="text-[13px] font-semibold text-[#1E1E1E] uppercase tracking-wide">Excellent</span>
            <StarRating count={5} size={16} />
            <span className="text-[13px] text-[#6B7280]">
              Based on <strong className="text-[#1E1E1E]">93 reviews</strong>
            </span>
            <span className="flex items-center gap-1.5 text-[13px] text-[#64748B] text-bold">
              <span>Google</span>
            </span>
          </div>
        </motion.div>

        {/* ── Review Cards Grid ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {REVIEWS.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
