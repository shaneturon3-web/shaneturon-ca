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
    now: {
      metadata: {
        title: '/ahora — Shane Turon',
        description: 'Foco actual, actividad reciente y estado operacional.',
      },
      hero: {
        eyebrow: '/ahora',
        titlePrefix: 'Foco',
        titleAccent: 'Actual',
        intro: 'Foco operacional en tiempo real. Lo que los sistemas están haciendo ahora.',
      },
      empty: {
        message: 'Cargando actualizaciones de estado...',
      },
      note: {
        body: 'Esta página se actualiza regularmente desde el dashboard privado de inteligencia.',
      },
    },

    contact: {
      metadata: {
        title: 'Contacto — Shane Turon',
        description:
          'Consulta de colaboración. Arquitectura operacional, inteligencia de flujo de trabajo y consultoría de sistemas.',
      },
      hero: {
        eyebrow: 'Conectar',
        titlePrefix: 'Consulta de',
        titleAccent: 'Colaboración',
        intro: 'Arquitectura operacional. Inteligencia de flujo de trabajo. Consultoría de sistemas.',
      },
      success: {
        title: 'Consulta Recibida',
        body: 'Gracias. Recibirás una respuesta dentro de 48 horas.',
      },
      form: {
        labels: {
          name: 'Nombre',
          email: 'Email',
          subject: 'Asunto',
          message: 'Mensaje',
        },
        placeholders: {
          name: 'Nombre completo',
          email: 'email@example.com',
          subject: 'Tipo de colaboración (opcional)',
          message: 'Describe el desafío operacional o el alcance de la colaboración...',
        },
        sending: 'Enviando...',
        submit: 'Enviar Consulta',
        errorGeneric: 'Algo salió mal.',
        errorNetwork: 'Error de red. Inténtalo de nuevo.',
        privacy: 'Los datos de la consulta se almacenan de forma segura. No se comparten con terceros.',
      },
    },

    architecture: {
      metadata: {
        title: 'Arquitectura — Shane Turon',
        description: 'Mapas de sistema, resumen de infraestructura técnica y topología de despliegue.',
      },
      hero: {
        eyebrow: 'Infraestructura',
        titlePrefix: 'Arquitectura',
        titleAccent: 'del Sistema',
        intro:
          'Cómo se conectan los sistemas. Arquitectura por capas, visual primero, con límites y gobernanza explícitos.',
      },
      layers: {
        title: 'Arquitectura por Capas',
        items: [
          { id: 'institutional', label: 'Capa Institucional', desc: 'Identidad pública, superficie de portafolio y arquitectura de credibilidad. Divulgación progresiva desde Confianza → Capacidad → Profundidad → Doctrina.', systems: ['shaneturon.ca', 'Portfolio OS', 'Analytics'] },
          { id: 'operational', label: 'Capa de Sistemas Operacionales', desc: 'Productos principales e infraestructura de ejecución. PsyNova, Control Tower y AI Orchestration ejecutándose en producción.', systems: ['PsyNova CoreSpine', 'Control Tower (10 subsistemas)', 'AI Orchestration Stack'] },
          { id: 'orchestration', label: 'Capa de Orquestación', desc: 'Coordinación multi-IA, secuenciación de pipelines de agentes y protocolos de traspaso de contexto. Architect → TechnicalSpecialist → Closer → TacticalTranslator.', systems: ['Agent Registry', 'Escaleta Engine', 'Handoff Protocols', 'State-Sync'] },
          { id: 'knowledge', label: 'Capa de Arquitectura de Conocimiento', desc: 'Pipeline de compresión semántica. Sesiones crudas → Grains → Cubes → Doctrina Promovida. Versionado, no destructivo y basado en evidencia.', systems: ['Canon', 'Source of Truth', 'Grains Engine', 'Promotion Pipeline'] },
          { id: 'infrastructure', label: 'Capa de Infraestructura', desc: 'Despliegue cloud-native, distribución edge, almacenamiento de activos y sistemas de base de datos. Operaciones multimáquina con garantías de cero alternancia.', systems: ['Edge Runtime', 'Object Storage', 'Database', 'Sync Engine'] },
        ],
      },
      governance: {
        title: 'Jerarquía de Autoridad',
        intro: 'Gobernanza institucional de 6 niveles con delegación formal y límites de alcance.',
        items: [
          { level: '01', name: 'Shane', role: 'Autoridad ejecutiva. Todas las decisiones estratégicas.' },
          { level: '02', name: 'SuperNova', role: 'Capa de coordinación IA. Delegación operacional.' },
          { level: '03', name: 'Control Tower', role: 'Orquestación de ejecución. Framework de 10 subsistemas.' },
          { level: '04', name: 'ShipYard', role: 'Zona de construcción. Entorno experimental de runtime.' },
          { level: '05', name: 'PsyNova', role: 'Producto principal. Infraestructura operacional profesional.' },
          { level: '06', name: 'Institute', role: 'Sistemas de conocimiento. Doctrina e investigación.' },
        ],
      },
      psynova: {
        title: 'Arquitectura PsyNova',
        items: [
          { layer: 'Capa 1', name: 'CoreSpine', desc: 'Motor administrativo headless. Admisión, agenda, facturación, CRM/memoria y orquestación.' },
          { layer: 'Capa 2', name: 'Compliance Wrapper', desc: 'Resguardos regulatorios por sector. Thick (salud/Law 25), Light (contabilidad), Wellness (coaching).' },
          { layer: 'Capa 3', name: 'Operator Interface', desc: 'Paneles por rol. Vistas de Admin, Profesional, Paciente y Supervisor.' },
        ],
      },
      agentPipeline: {
        title: 'Pipeline de Agentes',
        items: [
          { role: 'Architect', desc: 'Estructura estratégica' },
          { role: 'Technical Specialist', desc: 'Profundidad de implementación' },
          { role: 'Closer', desc: 'Entrega de ejecución' },
          { role: 'Tactical Translator', desc: 'Comunicación externa' },
        ],
      },
    },

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

    about: {
      metadata: {
        title: 'Acerca de — Shane Turon',
        description:
          'Arquitecto de Sistemas Operacionales. Diseñando infraestructura de ejecución para profesionales, clínicas y organizaciones complejas.',
      },
      hero: {
        eyebrow: 'Acerca de',
        titlePrefix: 'Arquitecto de Sistemas',
        titleAccent: 'Operacionales',
        intro:
          'Construyendo la infraestructura operacional que los profesionales necesitan pero no siempre pueden articular: la capa de sistemas entre “tengo herramientas” y “mi práctica funciona con fluidez.”',
      },
      cognitive: {
        title: 'Enfoque Cognitivo',
        paragraphs: [
          'Cada problema se descompone en capas, fases, autoridades y límites.',
          'Esto no es “uso IA”; es “arquitecto sistemas donde la IA tiene gobernanza.” No es teoría. Está basado en realidad operacional. Cada afirmación se marca como NOW, PILOT o FUTURE. Cada despliegue requiere verificación por demo. Anti-vaporware por diseño.',
          'Los sistemas construidos para claridad cognitiva producen mejores resultados para todos. Alta relación señal-ruido. Densidad de información por encima del relleno decorativo. Indicadores de estado por encima de explicaciones narrativas.',
        ],
      },
      capabilities: {
        title: 'Dominios de Capacidad',
        intro: 'Lo que los sistemas realmente hacen.',
        items: [
          { title: 'Arquitectura de Sistemas', desc: 'Sistemas modulares multicapa (Spine → Wrapper → Interface) que habilitan infraestructura escalable en verticales profesionales.' },
          { title: 'Orquestación de IA', desc: 'Protocolos formales para coordinación multi-IA con roles, límites y estructuras de responsabilidad definidos.' },
          { title: 'Diseño con Cumplimiento Integrado', desc: 'Navegación regulatoria en salud, legal y finanzas integrada en la arquitectura, no agregada después.' },
          { title: 'Ingeniería de Ejecución', desc: 'Frameworks de orquestación tipo PMO con secuenciación de agentes, phase gates y verificación obligatoria.' },
          { title: 'Arquitectura de Conocimiento', desc: 'Metodologías de compresión semántica que extraen unidades de conocimiento reutilizables y citables desde datos operacionales crudos.' },
          { title: 'Sistemas Multilingües', desc: 'Superficies operacionales EN/FR/ES diseñadas a nivel de arquitectura, no solo en la capa de traducción.' },
        ],
      },
      principles: {
        title: 'Principios Operacionales',
        items: [
          'Coherencia operacional por encima de expansión de funcionalidades.',
          'El crecimiento que colapsa al operador no es infraestructura escalable.',
          'El juicio clínico siempre permanece con el profesional licenciado.',
          'El público nunca debería tener que descifrar la ontología interna.',
          'Infraestructura que traduce la realidad operacional en flujos de trabajo desplegables.',
          'Compra lo commodity, construye el diferenciador.',
        ],
      },
      differentiators: {
        title: 'Lo Que Hace Esto Diferente',
        items: [
          { title: 'Primero sistemas, no primero funciones', desc: 'Resuelve problemas estructurales, no síntomas superficiales.' },
          { title: 'Gobernanza integrada', desc: 'Maneja entornos regulados sin agregar cumplimiento después.' },
          { title: 'IA como arquitectura', desc: 'No “usa IA”; diseña protocolos formales para coordinación multi-IA.' },
          { title: 'Realismo operacional', desc: 'Honestidad NOW/PILOT/FUTURE. Gates obligatorios de demo. Anti-vaporware.' },
        ],
      },
      cta: {
        body:
          'Los sistemas usados para gestionar este trabajo son del mismo calibre que los sistemas ofrecidos a clientes. El portafolio ES la prueba.',
        action: 'Explorar los Sistemas',
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
