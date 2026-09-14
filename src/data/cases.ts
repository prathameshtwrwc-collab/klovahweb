export interface CaseStudy {
  slug: string;
  title: string;
  number: string;
  category: string;
  year: string;
  summary: string;
  challenge: string;
  approach: string;
  metric: string;
  metricLabel: string;
  capabilities: string[];
  accent: string;
  image: string;
}

// These metrics must be replaced with verified project data before production
export const CASES: CaseStudy[] = [
  {
    slug: 'commerce-growth',
    title: 'Commerce Growth',
    number: '01',
    category: 'Ecommerce / Brand',
    year: '2024',
    summary: 'Unified brand, product and commerce into one measurable growth system.',
    challenge: 'Turn a fragmented buying journey into one clear commercial system.',
    approach: 'We connected brand, product discovery, ecommerce and measurement into a single experience.',
    metric: '2.4×',
    metricLabel: 'SALES',
    capabilities: ['Brand Systems', 'Ecommerce Design', 'Next.js Development', 'Analytics', 'Conversion Optimization'],
    accent: '#f32616',
    image: '/images/hanging-card1.png',
  },
  {
    slug: 'operations-intelligence',
    title: 'Operations Intelligence',
    number: '02',
    category: 'Healthcare / Data',
    year: '2024',
    summary: 'Made complex operational data useful for daily decision-making.',
    challenge: 'Make complex operational data useful to the people making daily decisions.',
    approach: 'We designed one decision layer across reporting, automation and forecasting.',
    metric: '61%',
    metricLabel: 'FASTER',
    capabilities: ['Data Engineering', 'AI Workflows', 'Dashboard Design', 'Backend Systems', 'Mobile App'],
    accent: '#159ce4',
    image: '/images/hanging-card2.png',
  },
  {
    slug: 'launch-system',
    title: 'Launch System',
    number: '03',
    category: 'Industrial / Software',
    year: '2024',
    summary: 'From early concept to market-ready product in a continuous delivery system.',
    challenge: 'Move from early concept to a reliable market-ready product without losing momentum.',
    approach: 'We structured strategy, design and engineering as one continuous delivery system.',
    metric: 'LIVE IN',
    metricLabel: '12 WEEKS',
    capabilities: ['Product Strategy', 'UI/UX Design', 'Full-Stack Engineering', 'API Integration', 'Performance'],
    accent: '#315fd0',
    image: '/images/hanging-card3.png',
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return CASES.find(c => c.slug === slug);
}

export function getNextCase(slug: string): CaseStudy {
  const idx = CASES.findIndex(c => c.slug === slug);
  return CASES[(idx + 1) % CASES.length];
}
