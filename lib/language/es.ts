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
    home: {
      hero: {
        badge: 'Sistemas Operacionales',
        titlePrefix: 'Arquitecto de Sistemas',
        titleAccent: 'Operacionales',
        intro:
          'Diseñando entornos de ejecución asistidos por IA, sistemas de inteligencia de flujo de trabajo y arquitecturas operacionales para organizaciones complejas.',
        exploreSystems: 'Explorar Sistemas',
        viewCaseFiles: 'Ver Casos',
      },

      valueProps: {
        title: 'Ejecución Estructurada Bajo Complejidad',
        intro: 'Infraestructura basada en evidencia que recupera capacidad operacional perdida.',
        items: [
          {
            title: 'Recuperación Operacional',
            desc: 'Los profesionales pierden cerca de 6 horas por semana por fragmentación administrativa. Infraestructura que devuelve esa capacidad.',
            metric: '6',
            metricLabel: 'horas/semana recuperadas',
          },
          {
            title: 'Ejecución Estructurada',
            desc: 'Los proyectos complejos fallan por colapso de coordinación, no por falta de talento. Arquitecturas de ejecución con gobernanza integrada.',
            metric: '10',
            metricLabel: 'subsistemas de orquestación',
          },
          {
            title: 'Operaciones Aumentadas por IA',
            desc: 'IA sin arquitectura es ruido. Sistemas de orquestación donde los agentes IA tienen roles, límites y responsabilidad definidos.',
            metric: '14',
            metricLabel: 'agentes IA coordinados',
          },
        ],
      },

      systems: {
        title: 'Sistemas Activos',
        intro: 'Infraestructura operacional actualmente en ejecución.',
        viewAll: 'Ver todo',
        psynovaFeatureTags: ['CoreSpine', 'Capa de Cumplimiento', 'Interfaz del Operador'],
        exploreArchitecture: 'Explorar arquitectura',
      },

      caseFiles: {
        title: 'Casos',
        intro: 'Análisis operacional estructurado. Problema → Diseño → Resultados.',
        viewAll: 'Ver todo',
        defaultCategory: 'Caso',
        process: 'Problema → Análisis → Diseño → Resultados',
      },

      now: {
        title: 'Foco Actual',
        viewNow: 'Ver /now →',
      },

      cta: {
        title: 'Inteligencia Operacional Estructurada',
        body:
          'Infraestructura que traduce la realidad operacional en flujos de trabajo desplegables. No es teoría: está basada en cómo el trabajo realmente ocurre.',
        action: 'Consulta de Colaboración',
      },
    },

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
