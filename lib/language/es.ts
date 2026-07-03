import type { EnglishLanguage } from './en';
import { esPages } from './pages/es';

export const es: EnglishLanguage = {
  brand: {
    name: 'SHANE TURON',
    footerLine: 'Arquitectura operativa, sistemas y escritura.',
  },

  nav: {
    menuToggle: 'Abrir menú',
    links: [
      { href: '/', label: 'Inicio' },
      { href: '/about', label: 'Acerca de' },
      { href: '/systems', label: 'Sistemas' },
      { href: '/#writing', label: 'Escritura' },
    ],
    contact: {
      href: '/contact',
      label: 'Contacto',
    },
  },

  footer: {
    links: [
      { href: '/about', label: 'Acerca de' },
      { href: '/systems', label: 'Sistemas' },
      { href: '/#writing', label: 'Escritura' },
      { href: '/contact', label: 'Contacto' },
    ],
  },

  statusStrip: {
    label: 'Sistemas activos',
    defaultStatus: 'ACTIVO',
    items: [
      { name: 'Sistemas', status: 'ACTIVO' },
      { name: 'Escritura', status: 'ACTIVO' },
      { name: 'Contacto', status: 'ACTIVO' },
    ],
  },

  pages: esPages,
};
