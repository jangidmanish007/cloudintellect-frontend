'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ICON_CODE = '/images/home/code-icon.svg';
const DEFAULT_BATCH_ICON = '/images/home/home_work.svg';

const DEFAULT_MODULES = [
  {
    id: '01',
    title: 'Cloud & Salesforce Basics',
    topics: ['Cloud Computing Overview', 'Introduction to Salesforce', 'Admin Setup & Navigation'],
  },
  {
    id: '02',
    title: 'Configuration',
    topics: ['Apps, Objects, Fields, Tabs', 'Security in Salesforce', 'Reports & Dashboards'],
  },
  {
    id: '04',
    title: 'Apex Programming',
    topics: ['Data Types, Loops, Classes, Interfaces', 'SOQL & SOSL', 'Triggers & Test Classes', 'Asynchronous Apex'],
  },
  {
    id: '05',
    title: 'Lightning & LWC',
    topics: [
      'HTML, CSS, JavaScript',
      'LWC Basics & Lifecycle Hooks',
      'LWC Events (Parent-Child, Pub-Sub, LMS)',
      'SLDS, Promises, Apex with LWC',
      'Best Practices in LWC',
    ],
  },
  { id: '03', title: 'Automation Tools', topics: ['Flow (Record Trigger, Schedule, Screen Flow)', 'Process Builder'] },
  {
    id: '06',
    title: 'Integration & Deployment',
    topics: [
      'API Callouts (Remote Site, Named Credentials)',
      'Connected App Setup',
      'Postman Tool',
      'Sandbox, Deployment Strategies',
      'CI/CD & Change Set',
    ],
  },
];

const DEFAULT_CAREER = {
  brand: 'CLOUD INTELLECT',
  title: 'Career Outcomes',
  metrics: [
    { value: '1400+', label: 'SUCCESSFUL PLACEMENTS' },
    { value: '5000+', label: 'LEARNERS TRAINED' },
    { value: '32.5 LPA', label: 'HIGHEST PACKAGE' },
  ],
  applyText: 'APPLY NOW',
  applyHref: '#apply',
  batchDate: 'Next Batch Starts Feb 15th',
  batchType: 'Weekend Batch',
  batchIcon: DEFAULT_BATCH_ICON,
};

export default function SaleForceDeveloperTopic({ sfdcTopics }) {
  const sectionRef = useRef(null);
  const rightColumnRef = useRef(null);
  const layoutRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [stickyStyle, setStickyStyle] = useState({});

  const section = sfdcTopics && typeof sfdcTopics === 'object' ? sfdcTopics : {};
  const headingLine1 = section.headingLine1 ?? 'Topics Covered in';
  const headingStrong = section.headingStrong ?? 'SFDC Program';
  const modules = Array.isArray(section.modules) && section.modules.length > 0 ? section.modules : DEFAULT_MODULES;
  const career =
    section.careerCard && typeof section.careerCard === 'object'
      ? { ...DEFAULT_CAREER, ...section.careerCard }
      : DEFAULT_CAREER;
  const metrics = Array.isArray(career.metrics) ? career.metrics : DEFAULT_CAREER.metrics;
  const batchIcon = career.batchIcon || DEFAULT_BATCH_ICON;

  useEffect(() => {
    const handleScroll = () => {
      // Disable sticky behavior on small screens (mobile)
      if (window.innerWidth <= 768) {
        setIsSticky(false);
        setStickyStyle({});
        return;
      }

      if (!sectionRef.current || !rightColumnRef.current || !layoutRef.current) return;

      const section = sectionRef.current;
      const rightColumn = rightColumnRef.current;
      const inner = section.querySelector('.sfdc-topics-inner');
      if (!inner) return;

      const sectionRect = section.getBoundingClientRect();
      const stickyTop = 160;

      // Check if we should make it sticky (when section top reaches sticky point)
      if (sectionRect.top <= stickyTop && sectionRect.bottom >= stickyTop + rightColumn.offsetHeight) {
        setIsSticky(true);
        // Calculate left position: right edge of inner container minus width and gap
        const maxWidth = 1280; // max-width of inner container
        const viewportWidth = window.innerWidth;
        const innerMaxWidth = Math.min(maxWidth, viewportWidth - 48); // 24px padding on each side
        const leftPosition = (viewportWidth - innerMaxWidth) / 2 + innerMaxWidth - rightColumn.offsetWidth - 40; // gap is 40px

        setStickyStyle({
          position: 'fixed',
          top: `${stickyTop}px`,
          left: `${leftPosition}px`,
          width: `${rightColumn.offsetWidth}px`,
          zIndex: 100,
        });
      } else {
        setIsSticky(false);
        setStickyStyle({});
      }
    };

    const handleResize = () => {
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="sfdc-topics-inner max-w-[1280px] mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-excon font-bold text-[#0B1C33] mb-12 text-center">
          {headingLine1} <span className="text-[#0CA4EB]">{headingStrong}</span>
        </h2>

        <div ref={layoutRef} className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modules.map((mod, idx) => (
                <div
                  key={mod.id || idx}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-[#0CA4EB] tracking-wider uppercase">
                      MODULE {mod.id || ''}
                    </span>
                    <div className="w-10 h-10 bg-[#0CA4EB]/10 rounded-lg flex items-center justify-center">
                      <Image src={ICON_CODE} alt="" width={24} height={24} className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-excon font-bold text-[#0B1C33] mb-4">{mod.title || ''}</h3>
                  <ul className="space-y-2">
                    {(Array.isArray(mod.topics) ? mod.topics : []).map((topic, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-[#0CA4EB] mt-1">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div ref={rightColumnRef} className={`lg:w-[380px] ${isSticky ? 'lg:invisible' : ''}`}>
            <div className="bg-gradient-to-br from-[#0B1C33] to-[#1a3a5c] rounded-2xl p-8 text-white sticky top-40">
              <div className="text-xs font-semibold text-[#0CA4EB] tracking-wider uppercase mb-2">{career.brand}</div>
              <h3 className="text-2xl font-excon font-bold mb-6">{career.title}</h3>
              <div className="space-y-4 mb-6">
                {metrics.map((m, i) => (
                  <div key={i} className="border-l-4 border-[#0CA4EB] pl-4">
                    <div className="text-3xl font-excon font-bold text-white">{m.value}</div>
                    <div className="text-xs text-gray-300 uppercase tracking-wide">{m.label}</div>
                  </div>
                ))}
              </div>
              <Link
                href={career.applyHref || '#apply'}
                className="block w-full bg-[#0CA4EB] hover:bg-[#0b8ec9] text-white text-center font-semibold py-3 rounded-lg transition-colors duration-300 mb-6"
              >
                {career.applyText || 'APPLY NOW'}
              </Link>
              <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Image src={batchIcon} alt="" width={28} height={28} className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-sm font-semibold">{career.batchDate}</div>
                  <div className="text-xs text-gray-300">{career.batchType}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky clone for desktop */}
          {isSticky && (
            <div style={stickyStyle} className="hidden lg:block">
              <div className="bg-gradient-to-br from-[#0B1C33] to-[#1a3a5c] rounded-2xl p-8 text-white">
                <div className="text-xs font-semibold text-[#0CA4EB] tracking-wider uppercase mb-2">{career.brand}</div>
                <h3 className="text-2xl font-excon font-bold mb-6">{career.title}</h3>
                <div className="space-y-4 mb-6">
                  {metrics.map((m, i) => (
                    <div key={i} className="border-l-4 border-[#0CA4EB] pl-4">
                      <div className="text-3xl font-excon font-bold text-white">{m.value}</div>
                      <div className="text-xs text-gray-300 uppercase tracking-wide">{m.label}</div>
                    </div>
                  ))}
                </div>
                <Link
                  href={career.applyHref || '#apply'}
                  className="block w-full bg-[#0CA4EB] hover:bg-[#0b8ec9] text-white text-center font-semibold py-3 rounded-lg transition-colors duration-300 mb-6"
                >
                  {career.applyText || 'APPLY NOW'}
                </Link>
                <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                  <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Image src={batchIcon} alt="" width={28} height={28} className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{career.batchDate}</div>
                    <div className="text-xs text-gray-300">{career.batchType}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
