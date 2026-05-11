'use client';
import Link from 'next/link';
import { MapPin, Mail, Phone } from 'lucide-react';
import Image from 'next/image';

// ─── Custom Social Media Icons ────────────────────────────────────────────────
const SOCIAL_ICONS = {
  linkedin: (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
    </svg>
  ),
  instagram: (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zM8 3.892a4.108 4.108 0 1 0 0 8.216 4.108 4.108 0 0 0 0-8.216zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
    </svg>
  ),
  facebook: (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
    </svg>
  ),
  youtube: (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
    </svg>
  ),
};

// ─── Footer data ────────────────────────────────────────────────────────────
const FOOTER_DATA = {
  brand: {
    name: 'Cloud Intellect',
    tagline: "India's #1 Salesforce training institute, empowering careers since 2012.",
  },
  contact: {
    location: 'Nagpur & Pune Centers',
    email: 'info@cloudintellect.in',
    phone: '+91 98765 43210',
  },
  institute: {
    heading: 'Institute',
    links: [
      { label: 'Home Page', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Why Choose Cloud Intellect', href: '/why-choose-us' },
      { label: 'Leadership', href: '/leadership' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  programs: {
    heading: 'Programs',
    links: [
      { label: 'Salesforce Developer', href: '/salesforce-developer' },
      { label: 'Salesforce Marketing Cloud', href: '/salesforce-marketing-cloud' },
      { label: 'SFDC & SFMC', href: '/sfmc-sfdc' },
    ],
  },
  resources: {
    heading: 'Resources',
    links: [
      { label: 'Placement', href: '/placements' },
      { label: 'Alumni Success', href: '/alumni-success' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Webinar', href: '/webinars' },
      { label: 'Blog', href: '/blog' },
      { label: 'Gallery', href: '/gallery' },
    ],
  },
  social: [
    { platform: 'linkedin', href: 'https://www.linkedin.com/company/cloudintellect', label: 'LinkedIn' },
    { platform: 'instagram', href: 'https://www.instagram.com/cloudintellect', label: 'Instagram' },
    { platform: 'facebook', href: 'https://www.facebook.com/cloudintellect', label: 'Facebook' },
    { platform: 'youtube', href: 'https://www.youtube.com/cloudintellect', label: 'YouTube' },
  ],
  bottom: {
    copyright: `© ${new Date().getFullYear()} Cloud Intellect. All rights reserved.`,
    credit: { label: 'Design & Developed by Mediagarh', href: 'https://mediagarh.com' },
  },
};

// ─── Component ───────────────────────────────────────────────────────────────
export default function Footer() {
  const { brand, contact, institute, programs, resources, social, bottom } = FOOTER_DATA;

  return (
    <footer className="bg-[#0A1628] text-white px-[16px]">
      {/* ── Main content ── */}
      <div className="mx-auto max-w-[1280px] lg:pt-[80px] lg:pb-[64px] pt-[64px] pb-[40px]">
        <div className="flex flex-col md:grid grid-cols-2 lg:grid-cols-[3fr_1.4fr_1.4fr_.7fr] gap-8 lg:gap-[64px]">
          {/* Col 1 – Brand & Contact (Full width on mobile) */}
          <div className="flex flex-col justify-center md:justify-start md:items-start items-center gap-6 w-full">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_PATH}images/cloud-logo-white.svg`}
                width={161}
                height={60}
                alt="Cloud Intellect Logo"
                className="h-auto w-auto"
              />
            </div>

            {/* Tagline */}
            <p className="text-sm text-gray-400 md:text-start text-center leading-relaxed max-w-[280px]">
              {brand.tagline}
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="shrink-0 text-gray-400 mt-0.5" />
                <span className="text-sm text-gray-300">{contact.location}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail size={16} className="shrink-0 text-gray-400 mt-0.5" />
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone size={16} className="shrink-0 text-gray-400 mt-0.5" />
                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {contact.phone}
                </a>
              </div>
            </div>

            {/* Social media icons */}
            <div className="flex items-center gap-3 mt-2">
              {social.map(({ platform, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-[8px] bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label={label}
                >
                  {SOCIAL_ICONS[platform]}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Link Columns - 2 columns on mobile, 3 columns on desktop */}
          <div className="grid grid-cols-2 md:contents gap-8 lg:gap-[64px]">
            {/* Col 2 – Institute */}
            <FooterLinkColumn heading={institute.heading} links={institute.links} />

            {/* Col 3 – Programs */}
            <FooterLinkColumn heading={programs.heading} links={programs.links} />

            {/* Col 4 – Resources */}
            <div className="col-span-2 lg:col-span-1">
              <FooterLinkColumn heading={resources.heading} links={resources.links} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="mx-auto max-w-[1280px] border-t border-[#FFFFFFBF] lg:py-[34px] py-[28px]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          {/* Copyright */}
          <span className="text-gray-400">{bottom.copyright}</span>

          {/* Credit */}
          <a
            href={bottom.credit.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            {bottom.credit.label}
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── Reusable link column ─────────────────────────────────────────────────────
function FooterLinkColumn({ heading, links }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-[18px] font-semibold text-white mb-1">{heading}</h4>
      <ul className="flex flex-col gap-2.5">
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link href={href} className="text-[16px] text-[#FFFFFFBF] hover:text-white transition-colors inline-block">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
