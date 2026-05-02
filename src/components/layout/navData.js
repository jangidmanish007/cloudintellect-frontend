// ─── Static Navigation Data ──────────────────────────────────────────────────

export const topBar = {
  registerButton: { text: 'REGISTER NOW', link: '/register' },
  whatsapp: { text: 'WhatsApp', link: 'https://wa.me/918766996944' },
  callUs: { text: 'Call Us', link: 'tel:+918766996944' },
  socialLinks: [
    { platform: 'facebook', url: 'https://facebook.com/cloudintellect' },
    { platform: 'linkedin', url: 'https://linkedin.com/company/cloudintellect' },
    { platform: 'youtube', url: 'https://youtube.com/@cloudintellect' },
    { platform: 'instagram', url: 'https://instagram.com/cloudintellect' },
  ],
};

export const mainNav = [
  { label: 'ECOSYSTEM', href: '/#ecosystem' },
  { label: 'COURSE', href: '/#course' },
  { label: 'PLACEMENT', href: '/#placement' },
  { label: 'SUCCESS STORIES', href: '/#success-stories' },
  { label: 'REVIEWS', href: '/#reviews' },
  { label: 'NEWS AND EVENTS', href: '/#news' },
];

export const loginButton = {
  text: 'Login Portals',
  link: '/login',
  dropdownItems: [
    { label: 'Student Portal', href: '/login/student' },
    { label: 'Admin Portal', href: '/login/admin' },
  ],
};

export const helpline = {
  label: 'Admission Helpline',
  phoneNumber: '+91 8766 9969 44',
  link: 'tel:+918766996944',
};

export const secondaryNav = [
  { label: 'Home', href: '/' },
  {
    label: 'ABOUT US',
    href: '/about-us',
    children: [
      { label: 'Who We Are', href: '/about' },
      { label: 'Why Choose Cloudintellect', href: '/why-choose-us' },
      { label: 'Leadership', href: '/leadership' },
      { label: 'About Cloudintellect', href: '/about-cloudintellect' },
    ],
  },
  {
    label: 'COURSES',
    href: '/courses',
    children: [
      { label: 'Salesforce Developer', href: '/salesforce-developer' },
      { label: 'Salesforce Marketing', href: '/salesforce-marketing-cloud' },
    ],
  },
  { label: 'BLOG', href: '/blog' },
  { label: 'TESTIMONIALS', href: '/testimonials' },
  {
    label: 'Honors',
    href: '/placement',
    children: [
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Alumni Success', href: '/alumni-success' },
    ],
  },
  { label: 'Placement', href: '/placements' },
  { label: 'Webinar', href: '/webinars' },
  { label: 'gallery', href: '/gallery' },
  {
    label: 'Consult',
    href: '/placement',
    children: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Faq', href: '/faq' },
      { label: 'Career', href: '/career' },
    ],
  },
];
