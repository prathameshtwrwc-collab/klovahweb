export interface CapabilityGroup {
  number: string;
  title: string;
  accent: string;
  services: string[];
}

export const CAPABILITY_GROUPS: CapabilityGroup[] = [
  {
    number: '01',
    title: 'Strategy',
    accent: '#f32616',
    services: ['Product strategy', 'Digital roadmaps', 'Technical discovery', 'Experience planning', 'Market positioning'],
  },
  {
    number: '02',
    title: 'Brand & Experience',
    accent: '#c9afe0',
    services: ['Brand systems', 'Campaign websites', 'Ecommerce design', 'Product UI/UX', 'Motion and 3D experiences'],
  },
  {
    number: '03',
    title: 'Full-Stack Engineering',
    accent: '#159ce4',
    services: ['Next.js applications', 'Backend systems', 'APIs and integrations', 'Mobile applications', 'Ecommerce platforms'],
  },
  {
    number: '04',
    title: 'Data, AI & Automation',
    accent: '#315fd0',
    services: ['Data engineering', 'Analytics dashboards', 'AI-assisted workflows', 'Business automation', 'Forecasting and decision systems'],
  },
  {
    number: '05',
    title: 'Growth & Optimization',
    accent: '#ffd447',
    services: ['Technical SEO', 'Conversion optimization', 'Performance engineering', 'Social campaign systems', 'Experimentation and measurement'],
  },
];

export const TECH_STACK = [
  'Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL',
  'Supabase', 'Cloud', 'Analytics', 'AI Integrations',
];

export const ENGAGEMENT_MODELS = [
  { title: 'Project', description: 'A defined scope with clear deliverables, timeline and budget.' },
  { title: 'Product Partnership', description: 'An ongoing relationship where we build, learn and grow the product together.' },
  { title: 'Specialist Sprint', description: 'Focused expert contribution to an existing team for a specific challenge.' },
];
