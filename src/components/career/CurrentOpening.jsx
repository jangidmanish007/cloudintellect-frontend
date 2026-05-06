'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ApplyModal from '../modals/ApplyModal';

export default function CurrentOpening({ openings }) {
  const data = openings || {};
  const heading = data.heading ?? 'Current Openings';
  const openingsList = Array.isArray(data.openings) && data.openings.length > 0 ? data.openings : '';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  useEffect(() => {
    const handleExternalApply = (event) => {
      const detail = event?.detail || {};
      const job = {
        title: detail.title || 'General Application',
        linkHref: detail.identifier || '#career-hero-apply',
        linkText: 'Apply Now',
      };
      handleApplyClick(job);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('career-openings-apply', handleExternalApply);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('career-openings-apply', handleExternalApply);
      }
    };
  }, []);

  return (
    <>
      <section className="w-full bg-[#F8FAFC] lg:py-[80px] py-[64px] px-[16px]" id="open-positions">
        <div className="max-w-[1280px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-excon text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-center mb-8 sm:mb-12 md:mb-16"
          >
            {heading}
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px] sm:gap-[24px]">
            {openingsList.map((job, i) => {
              const isAlt = job.variant === 'alt' || i === openingsList.length - 1;

              return (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`border bg-white rounded-[14px] p-[18px] border-[#0000001A] sm:p-[24px] transition-all duration-300`}
                >
                  <div
                    className={`w-14 h-14 ${
                      isAlt ? 'bg-[#009DE3] rounded-full mx-auto' : 'bg-[#0CA4EB]/10 rounded-xl'
                    } flex items-center justify-center mb-4`}
                  >
                    <img
                      src={`${process.env.NEXT_PUBLIC_IMG_PATH}${(isAlt && 'images/gallery/cloud_upload-icon.svg') || 'images/gallery/brefcase-icon.svg'}`}
                      alt=""
                      width={24}
                      height={24}
                      className="w-6 h-6"
                      aria-hidden="true"
                    />
                  </div>
                  <h3
                    className={`${
                      (isAlt && 'text-center') || ''
                    } font-excon text-[16px] sm:text-[18px] font-bold text-[#0B1C33] mb-3`}
                  >
                    {job.title}
                  </h3>
                  <p
                    className={`${
                      (isAlt && 'text-center') || ''
                    } font-ranade text-base sm:text-[16px] text-gray-600 leading-relaxed mb-4`}
                  >
                    {job.description}
                  </p>
                  {job.linkText && (
                    <div className={`${(isAlt && 'text-center') || ''}`}>
                      <button
                        type="button"
                        onClick={() => handleApplyClick(job)}
                        className={`${
                          (isAlt &&
                            'justify-center bg-[#0CA4EB] font-semibold text-white hover:bg-[#0B1C33] px-[16px] py-[8px] rounded-[4px]') ||
                          'text-[#0CA4EB] font-semibold text-base hover:text-[#0B1C33] '
                        } font-ranade transition-colors duration-200 inline-flex items-center gap-2 cursor-pointer`}
                      >
                        {job.linkText}
                        {(isAlt && <span></span>) || <span aria-hidden="true">→</span>}
                      </button>
                    </div>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <ApplyModal isOpen={isModalOpen} onClose={handleCloseModal} selectedJob={selectedJob} />
    </>
  );
}
