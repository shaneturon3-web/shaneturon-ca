import { enPages } from './pages/en';

export const en = {
  brand: {
    name: 'SHANE TURON',
    footerLine: 'Operational Systems Architecture',
  },

  nav: {
    menuToggle: 'Toggle menu',
    links: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/systems', label: 'Systems' },
      { href: '/writing', label: 'Publisher' },
    ],
    contact: {
      href: '/contact',
      label: 'Contact',
    },
  },

  footer: {
    links: [
      { href: '/systems', label: 'Systems' },
      { href: '/writing', label: 'Publisher' },
      { href: '/contact', label: 'Contact' },
    ],
  },

  statusStrip: {
    label: 'Systems Online',
    defaultStatus: 'ACTIVE',
    items: [
      { name: 'PsyNova', status: 'ACTIVE' },
      { name: 'Control Tower', status: 'ACTIVE' },
      { name: 'ShipYard', status: 'ACTIVE' },
      { name: 'Knowledge Systems', status: 'ACTIVE' },
      { name: 'AI Orchestration', status: 'ACTIVE' },
    ],
  },

  pages: enPages,
};

export type EnglishLanguage = typeof en;
