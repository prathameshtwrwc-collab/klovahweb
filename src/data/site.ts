export const SITE = {
  name: 'KLOVAH',
  tagline: 'Ideas, Made Real.',
  description: 'Klovah builds brands, websites, software, ecommerce, data systems and AI-powered business solutions.',
  email: 'hello@klovah.com',
  location: 'India',
  reach: 'Working Worldwide',
  social: {
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
  },
  // Legal copy requires professional legal review before production
  legalLastUpdated: 'January 2025',
} as const;

export const COLORS = {
  ink: '#0b0a09',
  paper: '#f7f0e5',
  vermilion: '#f32616',
  sun: '#ffd447',
  lavender: '#c9afe0',
  blue: '#159ce4',
  cobalt: '#315fd0',
  mutedLine: 'rgba(11, 10, 9, 0.28)',
} as const;

export const ROUTE_COLORS: Record<string, string> = {
  '/works': '#c9afe0',
  '/cases': '#ffd447',
  '/capabilities': '#f32616',
  '/process': '#159ce4',
  '/about': '#f32616',
  '/contact': '#f7f0e5',
};
