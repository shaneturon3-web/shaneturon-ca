import type { EnglishLanguage } from './en';
import { esPages } from './pages/es';

export const es: EnglishLanguage = {
  brand: {
    name: 'SHANE TURON',
    footerLine: 'Arquitectura de Sistemas Operacionales',
  },

  nav: {
    menuToggle: 'Abrir menú',
    links: [
      { href: '/', label: 'Inicio' },
      { href: '/about', label: 'Acerca de' },
      { href: '/systems', label: 'Sistemas' },
      { href: '/case-files', label: 'Casos' },
      { href: '/architecture', label: 'Arquitectura' },
      { href: '/lab', label: 'Laboratorio' },
      { href: '/now', label: 'Ahora' },
    ],
    contact: {
      href: '/contact',
      label: 'Contacto',
    },
  },

  footer: {
    links: [
      { href: '/systems', label: 'Sistemas' },
      { href: '/case-files', label: 'Casos' },
      { href: '/now', label: 'Ahora' },
      { href: '/contact', label: 'Contacto' },
    ],
  },

  statusStrip: {
    label: 'Sistemas en línea',
    defaultStatus: 'ACTIVO',
    items: [
      { name: 'PsyNova', status: 'ACTIVO' },
      { name: 'Control Tower', status: 'ACTIVO' },
      { name: 'ShipYard', status: 'ACTIVO' },
      { name: 'Knowledge Systems', status: 'ACTIVO' },
      { name: 'AI Orchestration', status: 'ACTIVO' },
    ],
  },

  pages: esPages,
};
