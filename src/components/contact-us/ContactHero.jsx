'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ContactHero({ pageData }) {
  const hero = pageData?.content?.hero || {};

  const tag = hero.tag || hero.label || 'SPECIALIZATION PROGRAM';
  const heading = hero.heading || hero.title || 'Real Stories. Real Careers.';
  const description =
    hero.description ||
    hero.subtitle ||
    'These are real students from Cloud Intellect who started from different backgrounds and built their careers in Salesforce.';
  const primaryButtonText = hero.primaryButtonText || hero.primaryBtnText || 'Explore Programs';
  const primaryButtonHref = hero.primaryButtonHref || hero.primaryBtnHref || '#programs';
  const secondaryButtonText = hero.secondaryButtonText || hero.secondaryBtnText || 'View Placements';
  const secondaryButtonHref = hero.secondaryButtonHref || hero.secondaryBtnHref || '#placements';

  const bgImageUrl = `${process.env.NEXT_PUBLIC_IMG_PATH}images/contact/contact-us-bg.webp`;

  return (
    <motion.section className="w-full bg-[#0B1C33] overflow-hidden">
      <div className="relative px-[16px] pt-[180px] xl:pt-[280px] md:pt-[230px] pb-[64px] xl:pb-[100px]">
        {/* Background Image with Opacity */}
        <motion.div
          className="absolute inset-0 bg-no-repeat bg-cover lg:bg-bottom bg-position-[70%_top] lg:opacity-100 opacity-50"
          style={{ backgroundImage: `url('${bgImageUrl}')` }}
          initial={{ scale: 1.1, visibility: 'hidden' }}
          animate={{ scale: 1, visibility: 'unset' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-10">
            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="flex flex-col gap-4 sm:gap-5 md:gap-6 max-w-full lg:max-w-[656px]"
            >
              {/* Tag */}
              {tag && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-flex items-center gap-2 bg-[#FFF] backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 w-fit"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#0CA4EB] rounded-full" aria-hidden="true" />
                  <span className="text-dark text-[9px] sm:text-[10px] font-medium tracking-wider uppercase">
                    {tag}
                  </span>
                </motion.div>
              )}

              {/* Heading */}
              {heading && (
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="font-excon text-[32px] sm:text-[42px] md:text-[48px] lg:text-[58px] leading-[1.1] sm:leading-[1.15] font-bold text-white"
                >
                  {heading}
                </motion.h1>
              )}

              {/* Description */}
              {description && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="font-ranade text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white/90"
                >
                  {description}
                </motion.p>
              )}

              {/* Buttons */}
              {(primaryButtonText || secondaryButtonText) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2"
                >
                  {primaryButtonText && (
                    <Link
                      href={primaryButtonHref}
                      className="btn-primary inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium no-underline"
                    >
                      {primaryButtonText}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                  {secondaryButtonText && (
                    <Link
                      href={secondaryButtonHref}
                      className="btn-outline inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium no-underline"
                    >
                      {secondaryButtonText}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
