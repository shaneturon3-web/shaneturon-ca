export const esArchitecture = {
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
    };
