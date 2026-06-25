export const esSystems = {
  metadata: {
    title: 'Sistemas — Shane Turon',
    description:
      'Sistemas activos, pilotos e infraestructura interna organizados por función operativa.',
  },

  hero: {
    eyebrow: 'Infraestructura',
    title: 'Sistemas activos',
    intro:
      'Sistemas activos, pilotos e infraestructura interna organizados por función operativa.',
  },

  psynova: {
    title: 'PsyNova',
    intro:
      'Infraestructura para prácticas profesionales: presencia pública, recepción de solicitudes, agenda, comunicación, registros y flujo administrativo.',
    groups: [
      {
        title: 'Recepción de solicitudes',
        items: ['Presencia pública', 'Caminos de contacto', 'Captura de solicitudes', 'Enrutamiento'],
      },
      {
        title: 'Flujo administrativo',
        items: ['Agenda', 'Seguimiento', 'Estado', 'Tareas'],
      },
      {
        title: 'Registros y autoridad',
        items: ['Privacidad', 'Registros', 'Permisos', 'Límites profesionales'],
      },
    ],
    deployment: {
      title: 'Caminos de implementación',
      items: [
        {
          title: 'Construcción mapeada',
          desc: 'Mapear la operación actual, definir el primer sistema útil y construir alrededor de lo que ya existe.',
        },
        {
          title: 'Sistema bajo marca del cliente',
          desc: 'El sistema funciona bajo la marca, cuentas y contexto operativo del cliente.',
        },
        {
          title: 'Soporte gestionado',
          desc: 'Las mejoras, documentación y gobernanza del flujo pueden mantenerse como servicio.',
        },
      ],
    },
    scale: {
      title: 'Formas de operación',
      items: [
        { title: 'Profesional independiente', desc: 'Una persona experta con poca capacidad administrativa y necesidades claras de recepción.' },
        { title: 'Oficina pequeña', desc: 'Un equipo compacto que comparte clientes, registros, agenda y comunicación.' },
        { title: 'Equipo con varios roles', desc: 'Varios roles necesitan enrutamiento, permisos, registros y estado compartido.' },
        { title: 'Operación en red', desc: 'Varias ubicaciones, marcas, socios o líneas de servicio necesitan un mismo mapa operativo.' },
      ],
    },
  },

  execution: {
    title: 'Sistemas de ejecución',
    intro: 'Sistemas de apoyo para estructurar proyectos, prototipos, conocimiento y trabajo asistido por IA.',
    items: [
      {
        title: 'Control Tower',
        desc: 'Orquestación de proyectos y gobernanza de ejecución asistida por IA.',
      },
      {
        title: 'ShipYard',
        desc: 'Entorno de prototipos y pruebas para herramientas, flujos y experimentos de despliegue.',
      },
      {
        title: 'Arquitectura de conocimiento',
        desc: 'Sistemas de referencia para decisiones, registros, notas y activos de conocimiento reutilizables.',
      },
      {
        title: 'Gobernanza de IA',
        desc: 'Roles definidos, puntos de revisión, rutas de escalamiento y control de ejecución para trabajo asistido por IA.',
      },
    ],
  },

  cta: {
    title: 'Los sistemas deben aclarar el trabajo.',
    body:
      'La meta no es más software. La meta es una forma más clara de operar la práctica, proteger tiempo y preservar autoridad profesional.',
    action: 'Contacto',
  },
};
