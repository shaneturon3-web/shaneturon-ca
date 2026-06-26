import type { EnglishLanguage } from './en';
import { frPages } from './pages/fr';

export const fr: EnglishLanguage = {
  brand: {
    name: 'SHANE TURON',
    footerLine: 'Architecture de Systèmes Opérationnels',
  },

  nav: {
    menuToggle: 'Ouvrir le menu',
    links: [
      { href: '/', label: 'Accueil' },
      { href: '/about', label: 'À propos' },
      { href: '/systems', label: 'Systèmes' },
      { href: '/publisher', label: 'Publisher' },
    ],
    contact: {
      href: '/contact',
      label: 'Contact',
    },
  },

  footer: {
    links: [
      { href: '/systems', label: 'Systèmes' },
      { href: '/publisher', label: 'Publisher' },
      { href: '/contact', label: 'Contact' },
    ],
  },

  statusStrip: {
    label: 'Systèmes en ligne',
    defaultStatus: 'ACTIF',
    items: [
      { name: 'PsyNova', status: 'ACTIF' },
      { name: 'Control Tower', status: 'ACTIF' },
      { name: 'ShipYard', status: 'ACTIF' },
      { name: 'Knowledge Systems', status: 'ACTIF' },
      { name: 'AI Orchestration', status: 'ACTIF' },
    ],
  },

  pages: frPages,
};
