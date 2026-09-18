export const esHome = {
  hero: {
    badge: 'Polímata en práctica',
    title: 'Escritor, constructor',
    accent: 'y arquitecto de sistemas.',
    intro:
      'Hago que las cosas complicadas sean más claras, útiles y vivas.',
    primaryCta: 'Leer el trabajo',
    secondaryCta: 'Ver lo que construyo',
  },

  worldview: {
    title: 'Una forma curiosa de trabajar',
    intro: 'Me gusta desarmar las cosas complicadas, entender cómo funcionan y volverlas a armar mejor.',
  },

  branches: {
    title: 'Dos ramas publicas. Una estructura operativa.',
    intro:
      'Los sistemas aplicados y la escritura publica se mantienen separados para que cada rama pueda crecer sin consumir toda la identidad.',
    items: [
      {
        eyebrow: 'Sistemas',
        title: 'Infraestructura operativa',
        desc: 'Infraestructura de practica, rutas de recepcion, flujo administrativo, registros, permisos e implementacion modular para trabajo complejo.',
        href: '/systems',
        action: 'Ver sistemas',
        points: ['mapeada', 'funcional', 'modular'],
      },
      {
        eyebrow: 'Escritura',
        title: 'Publicaciones y textos en trabajo',
        desc: 'Libros, ensayos, historias, guias, chistes, notas publicas y materiales largos presentados solo cuando estan listos para leerse.',
        href: '/publisher',
        action: 'Ver publicaciones',
        points: ['seleccionada', 'legible', 'publica'],
      },
    ],
  },

  method: {
    title: 'Como se construye el trabajo',
    intro:
      'La superficie publica se mantiene simple porque el trabajo debajo esta mapeado, modularizado y revisado contra lo que realmente existe.',
    items: [
      {
        title: 'Mapear el objeto real',
        desc: 'Empezar con la operacion, publicacion, audiencia, ruta y restriccion antes de elegir diseno o herramientas.',
      },
      {
        title: 'Construir la pieza util mas pequena',
        desc: 'Una seccion, ruta o modulo se agrega solo cuando su funcion es clara y sus enlaces activos pueden verificarse.',
      },
      {
        title: 'Conservar lo reutilizable',
        desc: 'Los patrones exitosos se vuelven candidatos de Shelf solo despues de funcionar en el sitio publico sin supuestos especificos de cliente.',
      },
    ],
  },

  publications: {
    title: 'Escritura y publicaciones',
    intro:
      'Esta rama contiene trabajo escrito orientado al publico sin convertir la pagina principal en catalogo ni exponer maquinaria privada de origen.',
    feature: {
      eyebrow: 'Publicaciones',
      title: 'Trabajo seleccionado',
      desc: 'Los ensayos y las historias aparecen aquí cuando encuentran una superficie pública de lectura. Las primeras rutas llevan al archivo vivo en Blogger.',
      items: ['Ensayos', 'Historias', 'TOM', 'Crime Syndicate', 'TCSQ'],
      labels: ['Essays', 'Stories', 'TOM', 'Crime%20Syndicate', 'TCSQ'],
      descriptions: [
        'Los ensayos son la mesa abierta: observaciones, argumentos, memorias y preguntas que se sostienen por sí mismas.',
        'Las historias son trabajo narrativo, desde piezas breves hasta mundos más largos, publicado cuando existe una versión para lectores.',
        'TOM — The Order Matters — reúne trabajo narrativo y reflexivo sobre la secuencia, las consecuencias y lo que llevamos adelante.',
        'Crime Syndicate reúne ficción criminal, noir y las personas que se mueven entre sus sombras.',
        'TCSQ — The Crime Syndicate Quarry — es la cantera más profunda de personajes, fragmentos y materiales conectados de ese mundo.',
      ],
      readLabel: 'Abrir colección en Blogger',
    },
    details: [
      {
        title: 'Sin catalogo muerto',
        desc: 'Las obras ilegibles o no seleccionadas no se anuncian como publicaciones activas.',
      },
      {
        title: 'Superficie publica limpia',
        desc: 'Los sistemas de origen, estados internos y maquinaria editorial privada quedan fuera de la experiencia del lector.',
      },
      {
        title: 'Lista para expandirse',
        desc: 'La estructura ya tiene una ruta real de publicaciones y puede agregar paginas de obra una por una.',
      },
    ],
  },

  cta: {
    title: 'Empezar desde la estructura real.',
    body:
      'El siguiente paso util es identificar la rama activa, la ruta que necesita y la superficie funcional mas pequena en la que se pueda confiar.',
    action: 'Contacto',
  },
};
