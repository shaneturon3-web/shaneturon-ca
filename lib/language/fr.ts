import type { EnglishLanguage } from './en';
import { frPages } from './pages/fr';

export const fr: EnglishLanguage = {
  brand: {
    name: 'SHANE TURON',
    footerLine: 'Architecture operationnelle, systemes et ecriture.',
  },

  nav: {
    menuToggle: 'Ouvrir le menu',
    links: [
      { href: '/', label: 'Accueil' },
      { href: '/about', label: 'À propos' },
      { href: '/systems', label: 'Systèmes' },
      { href: '/writing', label: 'Écriture' },
      { href: '/publisher', label: 'Publications' },
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
      { href: '/writing', label: 'Écriture' },
      { href: '/publisher', label: 'Publications' },
      { href: '/contact', label: 'Contact' },
    ],
  },

  statusStrip: {
    label: 'Systemes actifs',
    defaultStatus: 'ACTIF',
    items: [
      { name: 'Systemes', status: 'ACTIF' },
      { name: 'Ecriture', status: 'ACTIF' },
      { name: 'Contact', status: 'ACTIF' },
    ],
  },

  pages: frPages,
};
