import type { EnglishLanguage } from './en';

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

  pages: {
    systems: {
      metadata: {
        title: 'Sistemas — Shane Turon',
        description:
          'Sistemas e infraestructura operativa activos. PsyNova, Control Tower, Knowledge Systems y AI Orchestration Stack.',
      },

      hero: {
        eyebrow: 'Infraestructura',
        titlePrefix: 'Sistemas',
        titleAccent: 'Activos',
        intro:
          'Infraestructura operativa actualmente en ejecución. Cada sistema resuelve un problema arquitectónico distinto.',
      },

      sections: {
        otherSystems: 'Otros Sistemas',
      },

      card: {
        overview: 'Resumen',
        capabilities: 'Capacidades',
        architecture: 'Arquitectura',
      },

      psynova: {
        architecture: {
          heading: 'Arquitectura',
          layers: [
            {
              label: 'Interfaz del Operador',
              sublabel: 'Paneles por rol',
              items: ['Administrador', 'Profesional', 'Paciente', 'Supervisor'],
            },
            {
              label: 'Capa de Cumplimiento',
              sublabel: 'Resguardos regulatorios por sector',
              items: ['Law 25 / PIPEDA', 'Salud', 'Contabilidad', 'Bienestar'],
            },
            {
              label: 'CoreSpine',
              sublabel: 'Motor administrativo headless',
              items: ['Admisión', 'Agenda', 'Facturación', 'CRM / Memoria', 'Orquestación'],
            },
          ],
        },

        scalePath: {
          heading: 'Ruta de Escalamiento',
          items: [
            { label: 'SoloSpine', desc: 'Profesional independiente' },
            { label: 'ClinicSpine', desc: 'Clínica multiproveedor' },
            { label: 'BureauForge', desc: 'PMO institucional' },
          ],
        },

        overview: {
          heading: 'Resumen',
        },

        deploymentModes: {
          heading: 'Modos de Despliegue',
          items: [
            { label: 'Ghost Mode', desc: 'Servicio de infraestructura white-label' },
            { label: 'Brand Mode', desc: 'Despliegue administrado de plataforma' },
          ],
        },

        languageModules: {
          heading: 'Módulos de Idioma',
          items: ['EN', 'FR', 'ES'],
        },
      },
    },
  },
};
