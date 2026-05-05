'use client';
import React from 'react';
import Image from 'next/image';

const DEFAULT_ICON = '/images/home/code-icon.svg';

const DEFAULT_ROLES = [
  { title: 'Salesforce Developer', description: 'Build custom applications and integrations on Salesforce.' },
  { title: 'Salesforce Administrator', description: 'Manage user setup, permissions, and data.' },
  { title: 'Salesforce Consultant', description: 'Analyze business requirements and implement solutions.' },
  { title: 'Salesforce Analyst', description: 'Work with clients to gather requirements and optimize processes.' },
  { title: 'Salesforce App Developer', description: 'Create and deploy custom applications.' },
  { title: 'Salesforce Architect', description: 'Design complex solutions and lead development teams.' },
];

export default function SaleForceCareerOpportunities({ sfdcCareerOpportunities }) {
  const section = sfdcCareerOpportunities && typeof sfdcCareerOpportunities === 'object' ? sfdcCareerOpportunities : {};
  const headingLine1 = section.headingLine1 ?? 'Career Opportunities After';
  const headingStrong = section.headingStrong ?? 'SFDC Certification';
  const iconUrl = section.icon || DEFAULT_ICON;
  const roles = Array.isArray(section.roles) && section.roles.length > 0 ? section.roles : DEFAULT_ROLES;

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-excon font-bold text-[#0B1C33] mb-12 text-center">
          {headingLine1} <span className="text-[#0CA4EB]">{headingStrong}</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-12 h-12 bg-[#0CA4EB]/10 rounded-lg flex items-center justify-center mb-4">
                <Image src={iconUrl} alt="" width={24} height={24} className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-excon font-bold text-[#0B1C33] mb-3">{role.title || ''}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{role.description || ''}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
