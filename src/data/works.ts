export interface WorkProject {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  metric: string;
  metricLabel: string;
  accent: string;
  image: string;
  caseSlug?: string;
  tags: string[];
}

// These metrics must be replaced with verified project data before production
export const WORKS: WorkProject[] = [
  {
    id: 'commerce-growth',
    slug: 'commerce-growth',
    number: '01',
    title: 'Commerce Growth System',
    category: 'Commerce',
    year: '2024',
    metric: '2.4×',
    metricLabel: 'Sales',
    accent: '#f32616',
    image: '/images/hanging-card1.png',
    caseSlug: 'commerce-growth',
    tags: ['Brand & Web', 'Commerce', 'Growth'],
  },
  {
    id: 'operations-intelligence',
    slug: 'operations-intelligence',
    number: '02',
    title: 'Operations Intelligence',
    category: 'AI & Data',
    year: '2024',
    metric: '61%',
    metricLabel: 'Faster',
    accent: '#159ce4',
    image: '/images/hanging-card2.png',
    caseSlug: 'operations-intelligence',
    tags: ['AI & Data', 'Apps'],
  },
  {
    id: 'launch-system',
    slug: 'launch-system',
    number: '03',
    title: 'Launch Platform',
    category: 'Apps',
    year: '2024',
    metric: '12',
    metricLabel: 'Weeks',
    accent: '#315fd0',
    image: '/images/hanging-card3.png',
    caseSlug: 'launch-system',
    tags: ['Apps', 'Brand & Web'],
  },
  {
    id: 'brand-commerce',
    slug: 'brand-commerce',
    number: '04',
    title: 'Brand Commerce Experience',
    category: 'Brand & Web',
    year: '2023',
    metric: '3.8×',
    metricLabel: 'Engagement',
    accent: '#c9afe0',
    image: '/images/section4bg.png',
    tags: ['Brand & Web', 'Commerce'],
  },
  {
    id: 'mobile-ecosystem',
    slug: 'mobile-ecosystem',
    number: '05',
    title: 'Mobile Service Ecosystem',
    category: 'Apps',
    year: '2023',
    metric: '94%',
    metricLabel: 'Retention',
    accent: '#ffd447',
    image: '/images/section5bg.png',
    tags: ['Apps', 'AI & Data'],
  },
  {
    id: 'data-activation',
    slug: 'data-activation',
    number: '06',
    title: 'Data Activation Layer',
    category: 'AI & Data',
    year: '2023',
    metric: '47%',
    metricLabel: 'Efficiency',
    accent: '#159ce4',
    image: '/images/section6bg.png',
    tags: ['AI & Data', 'Growth'],
  },
];

export const WORK_FILTERS = ['All', 'Brand & Web', 'Commerce', 'Apps', 'AI & Data', 'Growth'] as const;
