import { enPages } from './pages/en';

export const en = {
  brand: {
    name: 'SHANE TURON',
    footerLine: 'Operational architecture, systems, and writing.',
  },

  nav: {
    menuToggle: 'Toggle menu',
    links: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/systems', label: 'Systems' },
      { href: '/#writing', label: 'Writing' },
    ],
    contact: {
      href: '/contact',
      label: 'Contact',
    },
  },

  footer: {
    links: [
      { href: '/about', label: 'About' },
      { href: '/systems', label: 'Systems' },
      { href: '/#writing', label: 'Writing' },
      { href: '/contact', label: 'Contact' },
    ],
  },

  statusStrip: {
    label: 'Active Systems',
    defaultStatus: 'ACTIVE',
    items: [
      { name: 'Systems', status: 'ACTIVE' },
      { name: 'Writing', status: 'ACTIVE' },
      { name: 'Contact', status: 'ACTIVE' },
    ],
  },

  pages: enPages,
};

export type EnglishLanguage = typeof en;
