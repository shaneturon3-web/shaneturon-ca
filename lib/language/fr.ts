import type { EnglishLanguage } from './en';
import { frPages } from './pages/fr';

export const fr: EnglishLanguage = {
  brand: {
    name: 'SHANE TURON',
    footerLine: 'Architecture opérationnelle, systèmes et écriture.',
  },

  nav: {
    menuToggle: 'Ouvrir le menu',
    links: [
      { href: '/', label: 'Accueil' },
      { href: '/about', label: 'À propos' },
      { href: '/systems', label: 'Systèmes' },
      { href: '/#writing', label: 'Écriture' },
    ],
    contact: {
      href: '/contact',
      label: 'Contact',
    },
  },

  footer: {
    links: [
      { href: '/about', label: 'À propos' },
      { href: '/systems', label: 'Systèmes' },
      { href: '/#writing', label: 'Écriture' },
      { href: '/contact', label: 'Contact' },
    ],
  },

  statusStrip: {
    label: 'Systèmes actifs',
    defaultStatus: 'ACTIF',
    items: [
      { name: 'Systèmes', status: 'ACTIF' },
      { name: 'Écriture', status: 'ACTIF' },
      { name: 'Contact', status: 'ACTIF' },
    ],
  },

  pages: frPages,
};
