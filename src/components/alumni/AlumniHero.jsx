import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function AlumniHero({ pageData }) {
  const hero = pageData?.content?.hero || {};

  const heading = hero.heading || hero.title || 'Our Alumni Are Building Real Careers in Salesforce';
  const description =
    hero.description ||
    hero.subtitle ||
    'Different starts, one choice to learn Salesforce right. Now working on real projects.';
  const primaryButtonText = hero.primaryButtonText || hero.primaryBtnText || 'Explore Program';
  const primaryButtonHref = hero.primaryButtonHref || hero.primaryBtnHref || '#';
  const secondaryButtonText = hero.secondaryButtonText || hero.secondaryBtnText || 'View Placement';
  const secondaryButtonHref = hero.secondaryButtonHref || hero.secondaryBtnHref || '#';
  // Determine if buttons are external / hash links

  const bgImageUrl = `${process.env.NEXT_PUBLIC_IMG_PATH}images/alumni/alumni-bg-img.webp`;

  return (
    <motion.section className="w-full bg-[#061A33] overflow-hidden">
      <div className="relative px-[16px] pt-[180px] xl:pt-[280px] md:pt-[230px] pb-[64px] xl:pb-[100px]">
        {/* Background Image with Opacity */}
        <motion.div
          className="absolute inset-0 bg-no-repeat bg-cover lg:bg-bottom bg-position-[70%_top] lg:opacity-100 opacity-50"
          style={{ backgroundImage: `url('${bgImageUrl}')` }}
          initial={{ scale: 1.1, visibility: 'hidden' }}
          animate={{ scale: 1, visibility: 'unset' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        <div className="relative w-full max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-col gap-4 sm:gap-5 md:gap-6 max-w-full lg:max-w-[747px]"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/95 rounded-full w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-[#009FFF] shrink-0" aria-hidden="true" />
              <span className="text-[#1E1E1E] text-[11px] font-semibold tracking-[0.5px] uppercase font-sans">
                {hero.tag || hero.label || 'SUCCESS STORIES'}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white text-[36px] sm:text-[48px] lg:text-[58px] font-bold leading-[1.2] m-0"
            >
              {heading}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="ranade-font text-white text-lg sm:text-xl lg:text-2xl font-light leading-relaxed m-0"
            >
              {description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2"
            >
              <Link
                href={primaryButtonHref}
                className="btn-primary inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium no-underline"
              >
                {primaryButtonText}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={secondaryButtonHref}
                className="btn-outline inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium no-underline"
              >
                {secondaryButtonText}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: visual placeholder (hidden on mobile) */}
        </div>
      </div>
    </motion.section>
  );
}
