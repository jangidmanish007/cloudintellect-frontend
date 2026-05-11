'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function Faqs({ pageData }) {
  const faq = pageData?.content?.faq || {};
  const [activeIndex, setActiveIndex] = useState(0);

  // ── Heading ───────────────────────────────────────────────────────────────
  const headingLight = (faq.headingLine1 || faq.titleLight || faq.title || 'Frequently Asked Questions').trim();

  // ── FAQ items ─────────────────────────────────────────────────────────────
  const items = Array.isArray(faq.items) && faq.items.length > 0 ? faq.items : [];

  // ── Hero background ───────────────────────────────────────────────────────
  const bgPath = typeof faq.backgroundImage === 'string' ? faq.backgroundImage.trim() : '';
  const bgUrl = bgPath ? process.env.DYNAMIC_IMG_BASE_PATH + faq.backgroundImage : '';

  // ── CTA block ─────────────────────────────────────────────────────────────
  const cta = faq.cta && typeof faq.cta === 'object' ? faq.cta : {};
  const ctaTitle = (cta.title || '').trim();
  const ctaDescription = (cta.description || '').trim();
  const ctaButtonText = (cta.buttonText || '').trim();
  const ctaButtonHref = (cta.buttonHref || '').trim();
  const badgeText = (cta.badgeText || '').trim();
  const badgeImageUrl = cta.badgeImage ? process.env.DYNAMIC_IMG_BASE_PATH + cta.badgeImage : '';
  const featureTexts = (Array.isArray(cta.features) ? cta.features : [])
    .map((feature) => {
      if (!feature) return '';
      if (typeof feature === 'string') return feature.trim();
      return (feature.text || feature.label || '').toString().trim();
    })
    .filter(Boolean);
  const shouldRenderCta = !!(
    ctaTitle ||
    ctaDescription ||
    ctaButtonText ||
    badgeText ||
    badgeImageUrl ||
    featureTexts.length > 0
  );

  // ── CTA button: internal vs external ─────────────────────────────────────
  const isExternalCta = !ctaButtonHref || ctaButtonHref === '#' || /^(https?:\/\/|mailto:|tel:|#)/.test(ctaButtonHref);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <>
      {/* ── Hero banner ── */}
      <section className="relative w-full min-h-[600px] flex items-center pt-[130px] md:pt-[206px] overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${bgUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
      </section>
      {/* ── FAQ accordion section ── */}
      <section
        className="py-20 px-[20px] lg:py-[60px] lg:px-6 sm:py-10 sm:px-4 min-h-[620px]"
        aria-labelledby="faq-page-heading"
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Heading */}
          <h2 id="faq-page-heading" className="flex flex-wrap gap-1.5 m-0 mb-11 leading-[1.15]">
            <span className="text-[28px] lg:text-[40px] font-bold text-[#1E1E1E]">{headingLight}</span>
          </h2>

          {/* Accordion list */}
          <div aria-label="FAQ accordion">
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
                          <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                            <div className="flex items-start gap-5 sm:gap-8 flex-1 min-w-0">
                              <span className="text-[60px] text-[#E9E9E9] font-segoe font-bold leading-[50px]">
                                {(index <= 8 && '0') || ''}
                                {index + 1}
                              </span>

                              <div className="flex-1 min-w-0">
                                <h3 className="excon-font text-[#1A1A1A] text-[18px] sm:text-[21px] lg:text-[23px] font-bold leading-snug mb-2 m-0">
                                  {item.question}
                                </h3>
                                <div className="w-7 h-[2px] bg-[#1A1A1A] mb-4" />
                                <p
                                  className={`ranade-font text-[#5A6475] text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.8] m-0 ${(imgSrc && 'max-w-[460px]') || 'max-w-[700px]'} `}
                                >
                                  {item.answer}
                                </p>
                              </div>
                            </div>

                            {/* Right block: two images side by side */}
                            {imgSrc && (
                              <div className="">
                                <img
                                  src={`${imgSrc}`}
                                  alt=""
                                  aria-hidden
                                  className="w-[340px] rounded-[4px] h-[150px] sm:w-[300px] sm:h-[130px] lg:w-[534px] lg:h-[259px] object-cover"
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
                            {(index <= 8 && '0') || ''}
                            {index + 1}
                          </span>

                          {/* Title */}
                          <h3 className="excon-font flex-1 min-w-0 text-[15px] sm:text-[19px] lg:text-[24px] font-medium leading-snug m-0 text-[#1A1A1A]">
                            {item.question}
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
        </div>
      </section>

      {/* ── CTA block ── */}
      {shouldRenderCta && (
        <div
          className="w-full mt-[70px] lg:mt-[50px] sm:mt-[34px] py-[81px] px-6 lg:py-[60px] lg:px-5 sm:py-[44px] sm:px-4 text-center"
          style={{ background: 'rgba(36,47,66,0.30)' }}
          role="region"
          aria-label="FAQ call to action"
        >
          <div className="max-w-[1200px] mx-auto">
            {/* Badge */}
            {(badgeText || badgeImageUrl) && (
              <div className="inline-flex items-center gap-[9px] bg-[#00ffe61a] px-4 py-2.5 rounded-full mb-3">
                {badgeImageUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={badgeImageUrl} alt="" width={16} height={16} className="w-4 h-4 object-contain" />
                )}
                {badgeText && <span className="text-[#00ffe6] text-sm font-bold">{badgeText}</span>}
              </div>
            )}

            {/* Title */}
            {ctaTitle && (
              <h2 className="text-[#f8fafc] text-[60px] lg:text-[42px] sm:text-[28px] font-bold text-center max-w-[618px] mx-auto mb-[9px] leading-[1.1] whitespace-pre-line">
                {ctaTitle}
              </h2>
            )}

            {/* Description */}
            {ctaDescription && (
              <p className="text-[#9096a2] text-[24px] lg:text-[18px] sm:text-[16px] text-center max-w-[895px] mx-auto mb-7 lg:mb-[18px] sm:mb-[14px] whitespace-pre-line">
                {ctaDescription}
              </p>
            )}

            {/* Button */}
            {ctaButtonText &&
              ctaButtonHref &&
              (isExternalCta ? (
                <a
                  href={ctaButtonHref}
                  className="inline-flex bg-[#00ffe6] text-[#0b121e] px-[14px] py-[13px] rounded text-lg font-bold no-underline hover:opacity-95 transition-opacity duration-200"
                >
                  {ctaButtonText}
                </a>
              ) : (
                <Link
                  href={ctaButtonHref}
                  className="inline-flex bg-[#00ffe6] text-[#0b121e] px-[14px] py-[13px] rounded text-lg font-bold no-underline hover:opacity-95 transition-opacity duration-200"
                >
                  {ctaButtonText}
                </Link>
              ))}

            {/* Features */}
            {featureTexts.length > 0 && (
              <div
                className="flex items-center justify-center gap-8 sm:gap-[18px] flex-wrap mt-[41px]"
                aria-label="Benefits"
              >
                {featureTexts.map((t, i) => (
                  <div key={`${t}-${i}`} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00ffe6] shrink-0" aria-hidden="true" />
                    <span className="text-[#9096a2] text-sm">{t}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
