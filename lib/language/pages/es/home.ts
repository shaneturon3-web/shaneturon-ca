export const esHome = {
  hero: {
    badge: 'Sistemas en operacion',
    title: 'Arquitectura',
    accent: 'Operativa',
    intro:
      'Interfaces publicas, marcos escritos y estructuras funcionales para trabajo complejo.',
    pattern: ['Sistemas', 'Escritura', 'Arquitectura', 'Publicaciones', 'Operaciones', 'Estructura'],
    primaryCta: 'Ver sistemas',
    secondaryCta: 'Ver publicaciones',
  },

  status: {
    label: 'Areas activas',
    items: [
      { label: 'Sistemas', href: '/systems' },
      { label: 'Publicaciones', href: '/#writing' },
      { label: 'Contacto', href: '/contact' },
    ],
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
        href: '/#writing',
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
      title: 'Libros, ensayos, historias, chistes, guias y notas',
      desc: 'La escritura se trata como una rama principal del sitio publico. Los elementos aparecen cuando estan seleccionados, legibles y presentados limpiamente.',
      items: ['Libros', 'Ensayos', 'Historias', 'Guias', 'Chistes', 'Notas publicas'],
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
        desc: 'La estructura puede convertirse en una ruta completa de Escritura cuando el catalogo y las obras seleccionadas esten listos.',
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
