'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="#009FFF" />
    <path d="M8 12l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const STATIC_DATA = {
  label: 'LEADERSHIP MESSAGE',
  quote: 'Our aim is to create an environment where every learner builds real skills.',
  quoteMessage:
    '"Learning at Cloud Intellect is a transformative journey that prepares you for a successful future in the Salesforce ecosystem. Our aim is to create an inspiring environment where every learner builds real skills, gains confidence, and moves closer to a rewarding career."',
  paras: [
    'Cloud Intellect has been built with a clear vision to deliver industry-aligned Salesforce education that empowers learners with the right skills, knowledge, and real-world exposure needed for a successful career in the global Salesforce ecosystem. Through our strong partnership with Salesforce as a Workforce Development Partner, and the real-time consulting experience offered through Cloud Intellect Systems, we are committed to bridging the gap between learning and industry.',
    `We believe that the right guidance and leadership can shape an individual's ability to turn ambitions into achievements. At Cloud Intellect, our focus is to provide an environment where every learner is supported, mentored, and encouraged to explore their fullest potential. Through structured learning paths, certification support, and practical project-based training, we strive to transform students into confident, job-ready professionals.`,
    'Since our inception, we have earned the trust and appreciation of students, working professionals, and corporate partners. This trust motivates us to continuously innovate and adopt modern teaching-learning practices that reflect the evolving needs of the industry. Today, Cloud Intellect stands as a trusted name in Salesforce education, known for its quality, dedication, and learner success.',
    'With a future-oriented approach, we remain committed to creating an inclusive, supportive, and growth-driven learning atmosphere. We believe that the diversity of backgrounds, perspectives, and talents enriches the learning journey, helping our students grow not just professionally, but personally as well.',
  ],
  achievementsTitle: 'Key Achievements Director',
  achievements: [
    'Served as Technical Architect from client location for major enterprise accounts',
    'Successfully trained and mentored global teams (onshore & offshore)',
    'Built training frameworks used across multiple enterprise projects',
    'Delivered high-impact project solutions with measurable outcomes',
  ],
  profileName: 'Sumit Mahakalkar',
  profileTitle: 'Director & Senior Salesforce Architect',
  profileImage: 'images/gallery/sumit-malakar-img-2.webp',
  experienceValue: '14+ Years',
  experienceDetail: 'Salesforce Consulting & Architecture',
  credentialsValue: '8+ Global Certifications',
  credentialsDetail: 'Salesforce Ecosystem',
  linkedInUrl: 'https://www.linkedin.com/in/sumit-mahakalkar/',
  linkedInLabel: 'Connect on LinkedIn',
};

export default function LeadershipMessage({ leadershipEdge }) {
  const data = leadershipEdge || STATIC_DATA;

  const {
    label = STATIC_DATA.label,
    quote = STATIC_DATA.quote,
    quoteHighlight = STATIC_DATA.quoteHighlight,
    quoteMessage = STATIC_DATA.quoteMessage,
    paras = STATIC_DATA.paras,
    achievementsTitle = STATIC_DATA.achievementsTitle,
    achievements = STATIC_DATA.achievements,
    profileName = STATIC_DATA.profileName,
    profileTitle = STATIC_DATA.profileTitle,
    profileImage = STATIC_DATA.profileImage,
    experienceValue = STATIC_DATA.experienceValue,
    experienceDetail = STATIC_DATA.experienceDetail,
    credentialsValue = STATIC_DATA.credentialsValue,
    credentialsDetail = STATIC_DATA.credentialsDetail,
    linkedInUrl = STATIC_DATA.linkedInUrl,
    linkedInLabel = STATIC_DATA.linkedInLabel,
  } = data;

  return (
    <section className="w-full bg-white lg:py-[80px] py-[64px] px-[16px]">
      <div className="max-w-[1280px] mx-auto">
        <div className="lg:flex justify-between gap-[24px]">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 w-full max-w-[846px]"
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 w-fit">
              <span className="w-2 h-2 bg-[#0CA4EB] rounded-full" aria-hidden="true" />
              <span className="text-[#0CA4EB] text-xs font-semibold tracking-wider uppercase">{label}</span>
            </div>

            {/* Quote */}
            <blockquote className="text-[28px] sm:text-[34px]   font-bold text-[#0B1C33] leading-tight">
              &ldquo;
              {quote}
              &rdquo;
            </blockquote>

            {/* Paragraphs */}
            <div className="flex flex-col gap-4">
              <p className="text-[16px] font-bold  font-ranade text-dark"> {quoteMessage}</p>
              {paras.map((para, index) => (
                <p key={index} className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Achievements */}
            <div className="mt-4 bg-[#0B1C33] p-[24px] rounded-[14px]">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{achievementsTitle}</h3>
              <ul className="flex flex-col gap-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-base text-white leading-relaxed flex-1">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex w-full max-w-[410px]"
          >
            <div className="w-full max-w-[480px]">
              <div className=" sticky top-[140px] bg-[#0B1C33]  rounded-2xl overflow-hidden border border-gray-100">
                {/* Profile Image */}
                <div
                  className="relative w-full h-[260px] sm:h-[280px] bg-cover bg-center-top bg-no-repeat"
                  style={{ backgroundImage: `url('${profileImage}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C33]/90 via-[#0B1C33]/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-[24px] font-bold text-white mb-1">{profileName}</h3>
                    <p className="text-[14px] text-[#009FFF]">{profileTitle}</p>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="p-[24px] flex flex-col gap-[24px]">
                  {/* Experience Block */}
                  <div className="flex items-start">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_PATH}images/gallery/check-icon-circle.svg`}
                      width={64}
                      height={64}
                      alt="check-icon"
                    />
                    <div className="flex-1 ml-[10px]">
                      <div className="text-[8px] font-semibold text-[#FFFFFFBF] uppercase tracking-wider mb-1">
                        EXPERIENCE
                      </div>
                      <div className="text-lg font-bold text-[#FFFFFF] mb-1">{experienceValue}</div>
                      <div className="text-[10px] text-[#FFFFFFBF]">{experienceDetail}</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_PATH}images/gallery/check-icon-circle.svg`}
                      width={64}
                      height={64}
                      alt="check-icon"
                    />
                    <div className="flex-1 ml-[10px]">
                      <div className="text-[8px] font-semibold text-[#FFFFFFBF] uppercase tracking-wider mb-1">
                        CREDENTIALS
                      </div>
                      <div className="text-lg font-bold text-[#FFFFFF] mb-1">{credentialsValue}</div>
                      <div className="text-[10px] text-[#FFFFFFBF]">{credentialsDetail}</div>
                    </div>
                  </div>

                  <div className="w-full h-px border-t border-[#FFFFFF1A]"></div>

                  {/* LinkedIn Link */}
                  {linkedInUrl && (
                    <Link
                      href={linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium no-underline"
                    >
                      <span>{linkedInLabel}</span>
                      <LinkedInIcon />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
