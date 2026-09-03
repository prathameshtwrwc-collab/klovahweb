export interface NavItem {
  label: string;
  href: string;
  number?: string;
}

export const MAIN_NAV: NavItem[] = [
  { label: 'Works', href: '/works', number: '01' },
  { label: 'Cases', href: '/cases', number: '02' },
  { label: 'Capabilities', href: '/capabilities', number: '03' },
  { label: 'Process', href: '/process', number: '04' },
  { label: 'About', href: '/about', number: '05' },
];

export const MOBILE_NAV: NavItem[] = [
  ...MAIN_NAV,
  { label: 'Contact', href: '/contact', number: '06' },
];

export const FOOTER_NAV: NavItem[] = [
  { label: 'Works', href: '/works' },
  { label: 'Cases', href: '/cases' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const REDIRECTS: Record<string, string> = {
  '/work': '/works',
  '/about-us': '/about',
  '/services': '/capabilities',
};
