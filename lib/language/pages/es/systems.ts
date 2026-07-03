export const esSystems = {
  metadata: {
    title: 'Sistemas — Shane Turon',
    description:
      'Infraestructura operativa, sistemas de practica e implementacion modular de sitios publicos.',
  },

  hero: {
    eyebrow: 'Sistemas en operacion',
    title: 'Arquitectura',
    accent: 'de Sistemas',
    intro:
      'Infraestructura operativa para recepcion, comunicacion, registros, superficies editoriales e implementacion modular.',
    pattern: ['Recepcion', 'Registros', 'Rutas', 'Publicacion', 'Operaciones', 'Gobernanza'],
    primaryCta: 'Mapear sistema',
    secondaryCta: 'Ver publicaciones',
  },

  status: {
    label: 'Sistemas activos',
    items: [
      { label: 'PsyNova', href: '#psynova' },
      { label: 'Despliegue', href: '#deployment' },
      { label: 'Ejecucion', href: '#execution' },
    ],
  },

  psynova: {
    title: 'PsyNova como infraestructura de practica',
    intro:
      'PsyNova es una rama aplicada: un wrapper para practica profesional con presencia publica, recepcion, agenda, comunicacion, registros y flujo administrativo.',
    groups: [
      {
        title: 'Entrada publica',
        desc: 'Una superficie limpia para primer contacto y orientacion antes de cualquier flujo interno.',
        items: ['Presencia', 'Contacto', 'Captura', 'Rutas'],
      },
      {
        title: 'Flujo administrativo',
        desc: 'Movimiento operativo basico desde solicitud hasta seguimiento sin exponer maquinaria privada.',
        items: ['Agenda', 'Seguimiento', 'Estado', 'Tareas'],
      },
      {
        title: 'Registros y autoridad',
        desc: 'Limites, permisos y documentacion quedan visibles para el operador, no para la superficie publica.',
        items: ['Privacidad', 'Registros', 'Permisos', 'Limites'],
      },
    ],
  },

  deployment: {
    title: 'Implementacion sin reconstruir todo el sitio',
    intro:
      'Un sitio de cliente debe ensamblarse desde motor base, wrapper, postura de marca, contenido y modulos opcionales.',
    paths: {
      title: 'Caminos de implementacion',
      items: [
        {
          title: 'Construccion mapeada',
          desc: 'Mapear la operacion actual, definir el primer sistema util y construir alrededor de lo que ya existe.',
        },
        {
          title: 'Superficie del cliente',
          desc: 'La superficie publica corre bajo marca, idioma, cuentas y contexto operativo del cliente.',
        },
        {
          title: 'Wrapper white-label',
          desc: 'La arquitectura reusable permanece estable mientras cambian presentacion, texto y exposicion de modulos.',
        },
        {
          title: 'Extraccion a Shelf',
          desc: 'Solo los patrones probados se vuelven piezas reutilizables despues de funcionar en un sitio real.',
        },
      ],
    },
    shapes: {
      title: 'Formas operativas',
      items: [
        { title: 'Solo', desc: 'Una persona profesional con poca capacidad administrativa y necesidades claras de recepcion.' },
        { title: 'Oficina pequena', desc: 'Un equipo compacto que comparte clientes, registros, agenda y comunicacion.' },
        { title: 'Multirol', desc: 'Varios roles necesitan rutas, permisos, registros y estado compartido.' },
        { title: 'Red', desc: 'Varias ubicaciones, marcas, socios o lineas de servicio necesitan un mismo mapa operativo.' },
      ],
    },
  },

  execution: {
    title: 'Sistemas de ejecucion',
    intro: 'Sistemas de apoyo estructuran proyectos, prototipos, conocimiento y trabajo asistido controlado sin convertir automatizacion en el titular publico.',
    items: [
      {
        title: 'Control Tower',
        desc: 'Orquestacion de proyectos, estado de tareas, puntos de revision y memoria operativa.',
      },
      {
        title: 'ShipYard',
        desc: 'Entorno de prototipos y pruebas para herramientas, flujos y experimentos de despliegue.',
      },
      {
        title: 'Arquitectura de conocimiento',
        desc: 'Sistemas de referencia para decisiones, registros, notas y activos reutilizables de conocimiento.',
      },
      {
        title: 'Puente editorial',
        desc: 'Camino controlado entre material escrito, superficies publicas y patrones reutilizables de implementacion.',
      },
    ],
  },

  cta: {
    title: 'Los sistemas deben aclarar el trabajo.',
    body:
      'La meta no es mas software. La meta es una forma mas clara de operar, proteger tiempo y preservar autoridad.',
    action: 'Contacto',
  },
};
