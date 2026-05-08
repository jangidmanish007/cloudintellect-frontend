'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
      ))}
    </div>
  );
}

export default function WebinarSuccessStory({ successStoriesData }) {
  const stories = successStoriesData || [];

  if (stories.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-[#FFFBF2] px-[16px] lg:py-[80px] py-[64px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-excon text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-light text-[#0B1C33] text-center mb-8 md:mb-12"
        >
          More <span className="font-bold">Success Stories</span>
        </motion.h2>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <motion.article
              key={story._id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {story.profileImage && (
                    <Image
                      src={`${process.env.DYNAMIC_IMG_BASE_PATH}${story.profileImage}`}
                      alt="revieew img"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <h3 className="font-ranade text-base font-semibold text-[#0B1C33]">{story.name}</h3>
                    <span className="font-ranade text-xs text-gray-500">{story.time}</span>
                  </div>
                </div>
                {/* Google Icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </div>

              {/* Rating */}
              <StarRating count={story.rating || 5} />

              {/* Review Text */}
              <p className="font-ranade text-sm text-gray-700 leading-relaxed mt-4 mb-4 line-clamp-4">{story.text}</p>

              {/* Read More Link */}
              {story.readMoreUrl && (
                <a
                  href={story.readMoreUrl}
                  className="font-ranade text-sm text-[#0CA4EB] hover:underline inline-flex items-center gap-1"
                >
                  Read more
                  <span aria-hidden="true">→</span>
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
