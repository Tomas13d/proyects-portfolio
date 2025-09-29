import type { ReactNode } from "react";

interface Technology {
  name: string;
  icon?: ReactNode;
}

interface Result {
  value: string;
  label: string;
}

interface Project {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  tags: string[];
  year: string;
  client: string;
  featuredImage: string;
  solutionImage: string;
  overview: string;
  challenge: string;
  solution: string;
  technologies: Technology[];
  results: Result[];
  resultsDescription: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}
export type MasonryHeight = "tall" | "short" | "auto";
export interface ProjectCard {
  id: number;
  slug: string;
  title: string;
  category: string[]; // p.ej. "crm", "automation", "mobile-apps", "websites", "saas"
  industry: string; // p.ej. "proptech", "seguros", "e-commerce", etc.
  client: string;
  year: string; // "2023"
  duration: string; // "4 meses"
  height?: MasonryHeight; // Para masonry
  image: string; // URL o path
  gradient: string; // Tailwind: "from-emerald-500 to-teal-600"
  bgColor: string; // Tailwind: "bg-emerald-50"
  accentColor: string; // Tailwind: "text-emerald-600"
  description: string;
  challenge: string;
  result: string;
  roi: string; // p.ej. "400% ROI" o "ROI positivo en 6 meses"
  technologies: string[];
  metrics: ProjectMetric[]; // pares label/value
}

type ProjectsData = {
  [key: string]: Project[];
};

type ProjectsDataResume = {
  [key: string]: ProjectCard[];
};

export const projectsData: ProjectsData = {
  es: [
    {
      id: 1,
      slug: "proptech-crm-suite",
      title: "CRM Inmobiliario — Automatización End-to-End",
      shortDescription: "Suite CRM para alquileres y ventas con scoring, IA y BI",
      tags: ["SaaS", "CRM", "Automatización", "IA", "Analytics"],
      year: "2024",
      client: "PropTech Suite",
      featuredImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FCrm%20Inmobiliario.png?alt=media&token=16f6b773-d4e2-4372-acdb-1b9333d77bb0",
      solutionImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FCrm%20Inmobiliario.png?alt=media&token=16f6b773-d4e2-4372-acdb-1b9333d77bb0",
      overview:
        "En real estate, cada hora de demora es una oportunidad perdida. Construimos una plataforma CRM que ordena el pipeline, prioriza por valor con IA y muestra métricas accionables para decidir rápido y bien.",
      challenge:
        "Pipeline desordenado, cobranzas manuales y seguimiento tardío que diluían la conversión y la experiencia del cliente.",
      solution:
        "Scoring con IA, automatización de follow-ups y campañas; paneles por agente con KPIs claros y geolocalización para priorizar acciones de alto impacto.",
      technologies: [
        { name: "Next.js" }, { name: "Node.js" }, { name: "PostgreSQL" }, { name: "OpenAI" }, { name: "Mapbox" }
      ],
      results: [
        { value: "↓", label: "Tiempo de cierre" },
        { value: "↑", label: "Follow-up a tiempo" },
        { value: "↓", label: "Mora" }
      ],
      resultsDescription:
        "Operación ordenada de punta a punta, con foco en valor y cierres más ágiles gracias a trazabilidad real y reportes por agente.",
    },

    {
      id: 2,
      slug: "assurex-crm-ia",
      title: "AssureX — CRM con IA & Automatización",
      shortDescription: "Omnicanalidad 24/7 con WhatsApp, voz e IA",
      tags: ["Seguros", "CRM", "IA", "WhatsApp", "Telefonía", "Automatización"],
      year: "2025",
      client: "AssureX",
      featuredImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FAssureX.png?alt=media&token=3c79b430-022b-4b7c-82b7-433511975143",
      solutionImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FAssureX.png?alt=media&token=3c79b430-022b-4b7c-82b7-433511975143",
      overview:
        "La inmediatez define la venta en seguros. Unificamos WhatsApp, telefonía y CRM con agentes de IA para respuestas consistentes 24/7 y una vista única del cliente.",
      challenge:
        "Atención dispersa entre canales, sin prioridad por valor ni trazabilidad confiable del funnel.",
      solution:
        "Lead scoring con IA, bots de WhatsApp, IVR inteligente, recordatorios automáticos y dashboards en tiempo real embebidos en el CRM.",
      technologies: [
        { name: "Node.js" }, { name: "Next.js" }, { name: "n8n" }, { name: "PostgreSQL" },
        { name: "WhatsApp Cloud API" }, { name: "Twilio Voice" }, { name: "OpenAI" }
      ],
      results: [
        { value: "↓", label: "Tiempo de respuesta" },
        { value: "↑", label: "Conversión" },
        { value: "24/7", label: "Cobertura" }
      ],
      resultsDescription:
        "Respuestas más veloces, mayor conversión y operación continua sin incrementar la dotación de soporte.",
    },

    {
      id: 3,
      slug: "asegura360-mexico-automatizacion-omnicanal",
      title: "Asegura360 México — Automatización Omnicanal con IA",
      shortDescription: "Workflows de ventas y soporte con IA y bots",
      tags: ["Seguros", "CRM", "IA", "Automatización"],
      year: "2024",
      client: "Asegura360 México",
      featuredImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FAsegura360.png?alt=media&token=1c54cae2-1381-4754-9e43-f94891315803",
      solutionImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FAsegura360.png?alt=media&token=1c54cae2-1381-4754-9e43-f94891315803",
      overview:
        "Cuando el volumen sube, la priorización marca la diferencia. Diseñamos workflows que enfocan al equipo en lo que mueve la aguja y automatizan el resto.",
      challenge:
        "Alto volumen de consultas sin ruteo ni escalamiento eficiente: esperas largas y oportunidades perdidas.",
      solution:
        "Lead scoring con IA, bots omnicanal y paneles de performance en tiempo real para operar por SLA y tomar decisiones informadas.",
      technologies: [
        { name: "NestJS" }, { name: "Node.js" }, { name: "n8n" }, { name: "Redis" },
        { name: "WhatsApp API" }, { name: "Twilio" }, { name: "OpenAI" }
      ],
      results: [
        { value: "↑", label: "SLA" },
        { value: "↓", label: "Tiempos de atención" },
        { value: "↑", label: "Cierres" }
      ],
      resultsDescription:
        "Los leads correctos reciben prioridad, el autoservicio reduce la espera y el equipo cierra más y mejor.",
    },

    {
      id: 4,
      slug: "pagebuilder-pro-saas-forms",
      title: "PageBuilder Pro — SaaS de Formularios Automatizados",
      shortDescription: "Generador de pantallas con validaciones y QA continuo",
      tags: ["Plataforma", "Automatización", "Testing", "Forms"],
      year: "2021",
      client: "PageBuilder Pro",
      featuredImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FPageBuilderPro.png?alt=media&token=3d1ceb01-cd22-43f8-82ed-bb67722285cc",
      solutionImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FPageBuilderPro.png?alt=media&token=3d1ceb01-cd22-43f8-82ed-bb67722285cc",
      overview:
        "Cada fricción en un formulario cuesta dinero. Creamos un generador de pantallas con validaciones inteligentes y QA continuo para acelerar entregas con menos retrabajo.",
      challenge:
        "Conversiones bajas y validaciones manuales que introducían errores y demoras.",
      solution:
        "Captura automatizada, verificación de email/teléfono, ruteo por equipo y pipeline de QA con pruebas en cada despliegue.",
      technologies: [
        { name: "Next.js" }, { name: "TypeScript" }, { name: "Node.js" }, { name: "Cypress" }, { name: "n8n" }
      ],
      results: [
        { value: "↑", label: "Tasa de conversión" },
        { value: "↓", label: "Errores de datos" },
        { value: "Continua", label: "Cobertura de QA" }
      ],
      resultsDescription:
        "Más velocidad al negocio y datos confiables desde el origen, con ahorros directos en soporte y rework.",
    },

    {
      id: 5,
      slug: "dwilliams-real-estate-crm",
      title: "D’ Williams — CRM Inmobiliario & Digitalización",
      shortDescription: "Sitio y CRM con mapas, filtros y tareas automatizadas",
      tags: ["CRM", "Automatización", "BI", "PropTech"],
      year: "2024",
      client: "D’ Williams Real Estate",
      featuredImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FDWilliams%20(2).png?alt=media&token=a46e929f-d1c5-4f28-a27b-be0bb88e05db",
      solutionImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FDWilliams%20(2).png?alt=media&token=a46e929f-d1c5-4f28-a27b-be0bb88e05db",
      overview:
        "De la gestión manual al control total del pipeline. Unificamos sitio y CRM para priorizar oportunidades, accionar a tiempo y medir resultados sin fricción.",
      challenge:
        "Seguimiento manual sin priorización ni recordatorios confiables; poca visibilidad por propiedad.",
      solution:
        "Scoring por interés, campañas automáticas, vistas por propiedad con geolocalización y recordatorios por SLA.",
      technologies: [
        { name: "NextJs" }, { name: "NodeJs" }, { name: "Firebase" }
      ],
      results: [
        { value: "↓", label: "Tiempo de cierre" },
        { value: "↑", label: "Follow-up puntual" },
        { value: "↑", label: "Visibilidad del pipeline" }
      ],
      resultsDescription:
        "Organización, foco y velocidad comercial: el equipo sabe qué hacer, cuándo y por qué.",
    },

    {
      id: 6,
      slug: "lemur-school-e-learning-platform",
      title: "Lemur School — Plataforma de Cursos Online",
      shortDescription: "Cursos con pagos, módulos y recordatorios automatizados",
      tags: ["E-Learning", "Pagos", "Automatización", "Video"],
      year: "2023",
      client: "Lemur School",
      featuredImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FLemurSchool.png?alt=media&token=e706504e-cfbb-418e-b165-b9ede5743c34",
      solutionImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FLemurSchool.png?alt=media&token=e706504e-cfbb-418e-b165-b9ede5743c34",
      overview:
        "Escalar educación exige automatizar el ciclo del alumno. Integramos pagos, progreso y comunicaciones para maximizar finalización y recurrencia.",
      challenge:
        "Cursos dispersos sin pagos integrados ni seguimiento automatizado del avance.",
      solution:
        "Portal unificado con checkout, tracking de progreso y recordatorios automáticos; reportes por cohorte y por alumno.",
      technologies: [
        { name: "Next.js" }, { name: "Node.js" }, { name: "Stripe" }, { name: "PostgreSQL" }, { name: "Firebase Storage" }
      ],
      results: [
        { value: "80+", label: "Módulos activos" },
        { value: "1.000+", label: "Estudiantes" },
        { value: "↑ 35%", label: "Tasa de finalización" }
      ],
      resultsDescription:
        "Retención y satisfacción en alza con menos carga operativa gracias a automatización de onboarding y seguimiento.",
    },

    {
      id: 7,
      slug: "twilio-voice-agent-rt",
      title: "Twilio Voice Agent — Atención en Tiempo Real",
      shortDescription: "Agente de voz con IA, function calling y CRM logging",
      tags: ["IA", "Voz", "Telefonía", "Automatización"],
      year: "2025",
      client: "AI Voice Agent",
      featuredImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FAIVoiceAgent.png?alt=media&token=ac2876fb-4fa9-4509-a584-c1ebb3fc3b77",
      solutionImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FAIVoiceAgent.png?alt=media&token=ac2876fb-4fa9-4509-a584-c1ebb3fc3b77",
      overview:
        "La voz sigue siendo el canal más crítico. Diseñamos un agente con IA que entiende, califica y registra, reduciendo tiempos y elevando la experiencia.",
      challenge:
        "Picos de llamadas, respuestas inconsistentes y baja trazabilidad en CRM.",
      solution:
        "Function calling para respuestas precisas, scoring automático y logging completo en CRM con métricas de desempeño y SLA.",
      technologies: [
        { name: "Twilio" }, { name: "Node.js" }, { name: "WebSockets" }, { name: "OpenAI Realtime" }, { name: "CRM API" }
      ],
      results: [
        { value: "5.000+", label: "Llamadas/mes" },
        { value: "↓ 25%", label: "AHT" },
        { value: "↑", label: "SLA" }
      ],
      resultsDescription:
        "Menos tiempo por llamada, más consistencia y trazabilidad total para decisiones operativas.",
    },

    {
      id: 8,
      slug: "hornero-proptech-app",
      title: "Hornero — Gestión Inteligente de Coworking",
      shortDescription: "Reservas de salas/escritorios con IA y panel de ocupación",
      tags: ["PropTech", "Mobile", "Automatización", "IA"],
      year: "2022",
      client: "Hornero",
      featuredImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2Fhornero%20(1).png?alt=media&token=178c5a18-1a5e-43c4-b787-50619fd069c3",
      solutionImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2Fhornero%20(1).png?alt=media&token=178c5a18-1a5e-43c4-b787-50619fd069c3",
      overview:
        "Espacio y tiempo son costos. Digitalizamos reservas con IA y visibilidad de ocupación para usar mejor cada metro cuadrado.",
      challenge:
        "Gestión manual de espacios y amenities, sin trazabilidad ni métricas de uso.",
      solution:
        "Automatización de reservas, calendario inteligente y reglas de ocupación; métricas por equipo/área en tiempo real.",
      technologies: [
        { name: "React" }, { name: "Redux" }, { name: "Node.js" }, { name: "MongoDB" }, { name: "AI/ML" }
      ],
      results: [
        { value: "500+", label: "Escritorios" },
        { value: "15h/sem", label: "Tiempo ahorrado" },
        { value: "+", label: "Interacción entre colaboradores" }
      ],
      resultsDescription:
        "Menos coordinación manual y mejor utilización de amenities con analítica de ocupación.",
    },

    {
      id: 9,
      slug: "palermo-bajo-rugby-app",
      title: "Palermo Bajo Rugby — App & Automatización",
      shortDescription: "Partidos, resultados live y notificaciones segmentadas",
      tags: ["Apps Móviles", "Automatización", "Realtime"],
      year: "2025",
      client: "Club Palermo Bajo",
      featuredImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FPalermoBajo.png?alt=media&token=3a223ffd-f284-4f9c-9328-b7652f0c7746",
      solutionImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FPalermoBajo.png?alt=media&token=3a223ffd-f284-4f9c-9328-b7652f0c7746",
      overview:
        "El fan espera resultados en vivo, el club necesita orden y alcance. Automatizamos publicación y notificaciones para que la comunidad se mantenga conectada.",
      challenge:
        "Fixtures y difusión manual, con demoras y baja visibilidad por división/equipo.",
      solution:
        "Carga simple, resultados en vivo y alertas automáticas por preferencia (equipo/división/categoría).",
      technologies: [
        { name: "Next.js" }, { name: "Firebase/Firestore" }, { name: "Cloud Functions" }, { name: "FCM" }, { name: "Tailwind" }
      ],
      results: [
        { value: "1.200+", label: "Partidos publicados" },
        { value: "2000+", label: "Suscriptores a notificaciones" },
        { value: "↓ 80%", label: "Tiempo de publicación" }
      ],
      resultsDescription:
        "Más alcance, participación y experiencia en tiempo real sin sobrecargar al staff.",
    },

    {
      id: 10,
      slug: "sky-eleven-copy-trading-telegram",
      title: "Sky Eleven — Copy Trading Automatizado con Telegram",
      shortDescription: "Señales → validación → ejecución en broker con reportes",
      tags: ["FinTech", "Automatización", "Bots", "Trading"],
      year: "2022",
      client: "Sky Eleven Solutions",
      featuredImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FSkyEleven%20(2).png?alt=media&token=c90579db-1224-4b97-9c96-942cd4ee0673",
      solutionImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FSkyEleven%20(2).png?alt=media&token=c90579db-1224-4b97-9c96-942cd4ee0673",
      overview:
        "En trading, la latencia es costo. Orquestamos un pipeline de señales con bots que validan, gestionan riesgo y ejecutan en el broker en segundos.",
      challenge:
        "Señales dispersas, ejecución manual y control de riesgo inconsistente.",
      solution:
        "Flujo end-to-end: señales → validaciones → sizing de posición → orden al broker → confirmación en Telegram, con métricas y auditoría.",
      technologies: [
        { name: "Node.js" }, { name: "TypeScript" }, { name: "Telegram Bot API" },
        { name: "Broker REST/WebSocket API" }, { name: "Webhooks (TradingView)" }, { name: "PostgreSQL" }
      ],
      results: [
        { value: "↓", label: "Latencia señal→orden" },
        { value: "↑", label: "Ejecuciones automatizadas" },
        { value: "↓ 60%", label: "Tiempo operativo manual" }
      ],
      resultsDescription:
        "Menos errores y latencia; más consistencia y trazabilidad para auditar y mejorar la estrategia.",
    },

    {
      id: 11,
      slug: "vskins-ventas-soporte-ia",
      title: "Vskins — Ventas & Soporte con IA",
      shortDescription: "Agentes de IA en WhatsApp e Instagram con handoff humano",
      tags: ["E-commerce", "IA", "WhatsApp", "Automatización"],
      year: "2025",
      client: "Vskins",
      featuredImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FVskins.png?alt=media&token=c6b0ceca-c3e1-47a1-9ae3-eb2235f97795",
      solutionImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FVskins.png?alt=media&token=c6b0ceca-c3e1-47a1-9ae3-eb2235f97795",
      overview:
        "Los carritos no esperan. Implementamos agentes de IA que venden y asisten en WhatsApp e Instagram, y derivan al humano con contexto cuando suma.",
      challenge:
        "Picos fuera de horario y respuestas tardías que se transformaban en ventas perdidas.",
      solution:
        "Cobertura 24/7, recomendaciones asistidas por IA y handoff eficiente con historial y objetivos claros.",
      technologies: [
        { name: "Next.js" }, { name: "Node.js" }, { name: "n8n" }, { name: "WhatsApp Cloud API" }, { name: "OpenAI" }
      ],
      results: [
        { value: "24/7", label: "Cobertura" },
        { value: "↑", label: "Satisfacción (CSAT)" },
        { value: "↓", label: "Costo de atención" }
      ],
      resultsDescription:
        "Más ventas fuera de horario y mejor experiencia con una operación ágil y escalable.",
    },

    {
      id: 12,
      slug: "insurance-community-app",
      title: "Insurance Community — App de Comunidad",
      shortDescription: "Salas temáticas, chat, foros y knowledge base con IA",
      tags: ["Apps Móviles", "Comunidad", "IA"],
      year: "2023",
      client: "Insurance Community",
      featuredImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FClubInsurance.png?alt=media&token=e483dd49-e821-409c-a3c4-448c9821007a",
      solutionImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FClubInsurance.png?alt=media&token=e483dd49-e821-409c-a3c4-448c9821007a",
      overview:
        "Una comunidad informada reduce tickets. Lanzamos app con foros, chat y base de conocimiento asistida por IA para autoservicio real.",
      challenge:
        "Soporte saturado, respuestas repetidas y conocimiento disperso en canales no oficiales.",
      solution:
        "Búsqueda inteligente, moderación asistida y FAQs dinámicas para resolver rápido y sin cuello de botella.",
      technologies: [
        { name: "React Native" }, { name: "Firebase" }, { name: "Firestore" }, { name: "Cloud Functions" }, { name: "OpenAI" }
      ],
      results: [
        { value: "+", label: "Interacción entre asegurados" },
        { value: "15.000+", label: "Mensajes/mes" },
        { value: "↑ 30%", label: "Desvío de tickets" }
      ],
      resultsDescription:
        "Más autoservicio, menos tiempos de espera y un helpdesk enfocado en casos de valor.",
    },

    {
      id: 13,
      slug: "scatola-box-industry-automation",
      title: "Scatola — Automatización de Planta y Trazabilidad",
      shortDescription: "Carga de procesos y bobinas con KPIs y costos en tiempo real",
      tags: ["Manufactura", "Automatización", "Trazabilidad", "BI"],
      year: "2024",
      client: "Scatola S.A.",
      featuredImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FScatola.png?alt=media&token=2455a943-921a-4073-8636-ef308b0ef307",
      solutionImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FScatola.png?alt=media&token=2455a943-921a-4073-8636-ef308b0ef307",
      overview:
        "Sin datos de planta en tiempo real, no hay mejora continua. Digitalizamos la línea para decidir con evidencia, no con suposiciones.",
      challenge:
        "Planillas en papel, poca trazabilidad y nula visibilidad del costo por orden/insumo.",
      solution:
        "Flujos digitalizados, KPIs de planta y dashboards de costos por orden y lote, con alertas para accionar a tiempo.",
      technologies: [
        { name: "Next.js" }, { name: "Node.js" }, { name: "PostgreSQL" }, { name: "Prisma" }, { name: "Charts" }
      ],
      results: [
        { value: "100%", label: "Trazabilidad de lotes" },
        { value: "↓ 60%", label: "Tiempo de carga" },
        { value: "↑", label: "Precisión de costos" }
      ],
      resultsDescription:
        "Menos paradas no planificadas y decisiones más rápidas con una operación visible minuto a minuto.",
    },

    {
      id: 14,
      slug: "nico-maggi-fitness-courses",
      title: "Nico Maggi — Web + Cursos Automatizados",
      shortDescription: "Embudo de cursos con pagos y recordatorios automáticos",
      tags: ["E-Learning", "Automatización", "Creator"],
      year: "2023",
      client: "Nico Maggi",
      featuredImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FNicoMaggi.png?alt=media&token=8382c7e7-3b85-4add-a99f-4a53b4e53e7a",
      solutionImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FNicoMaggi.png?alt=media&token=8382c7e7-3b85-4add-a99f-4a53b4e53e7a",
      overview:
        "El creador crece cuando automatiza. Diseñamos un embudo que vende, cobra y comunica sin fricción para que el foco sea el contenido.",
      challenge:
        "Dependencia de redes y procesos manuales para comercializar y dictar cursos.",
      solution:
        "Captación, checkout, calendario y comunicaciones automáticas; reportes por ventas y progreso.",
      technologies: [
        { name: "Next.js" }, { name: "Stripe" }, { name: "Calendly API" }, { name: "PostgreSQL" }, { name: "Email Automation" }
      ],
      results: [
        { value: "↑ 120%", label: "Leads" },
        { value: "↓ 30%", label: "No-show" },
        { value: "↓", label: "Tiempo operativo" }
      ],
      resultsDescription:
        "Más ingresos por curso y menos tareas repetitivas con un flujo end-to-end automatizado.",
    },

    {
      id: 15,
      slug: "chimpance-portfolio-ia",
      title: "Chimpancé — Portfolio Optimizado con IA",
      shortDescription: "Performance, SEO y contenido asistido por IA",
      tags: ["Web", "Performance", "SEO", "IA"],
      year: "2022",
      client: "Chimpancé",
      featuredImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FChimpance%20(2).png?alt=media&token=b446a60c-d525-4de5-b33f-d430896eaf3f",
      solutionImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FChimpance%20(2).png?alt=media&token=b446a60c-d525-4de5-b33f-d430896eaf3f",
      overview:
        "La visibilidad orgánica depende de velocidad y relevancia. Mejoramos Web Vitals y activamos un pipeline de contenido asistido por IA.",
      challenge:
        "Sitio lento, alto costo de mantenimiento y SEO afectado por procesos manuales.",
      solution:
        "Next.js optimizado, imágenes responsivas y metadatos/snippets generados por IA para sostener SEO a menor costo.",
      technologies: [
        { name: "React" }, { name: "Node.js" }, { name: "OpenAI" }, { name: "Vercel" }
      ],
      results: [
        { value: "↑", label: "Core Web Vitals" },
        { value: "+70%", label: "Tráfico orgánico" },
        { value: "-50%", label: "Costo de mantenimiento" }
      ],
      resultsDescription:
        "Mejor ranking, mejor experiencia y una operación de contenido más eficiente.",
    },

    {
      id: 16,
      slug: "agrominera-montebello",
      title: "Agrominera Montebello — Digitalización & Web Vitals",
      shortDescription: "Catálogo B2B con cotización y SEO técnico",
      tags: ["Web", "Digitalización", "SEO", "Automatización"],
      year: "2024",
      client: "Agrominera Montebello",
      featuredImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FAgromineraMontebello.png?alt=media&token=4571588b-d68f-4d80-a5fa-97917855bb12",
      solutionImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FAgromineraMontebello.png?alt=media&token=4571588b-d68f-4d80-a5fa-97917855bb12",
      overview:
        "Para captar demanda B2B hay que cargar rápido y responder antes. Digitalizamos catálogo y cotización con SEO técnico y tiempos de carga sobresalientes.",
      challenge:
        "Baja visibilidad online y captación manual de oportunidades.",
      solution:
        "Core Web Vitals optimizados, formularios de cotización y flujos automáticos hacia ventas.",
      technologies: [
        { name: "Next.js" }, { name: "Vercel" }, { name: "CMS Headless" }, { name: "Analytics" }, { name: "reCAPTCHA" }
      ],
      results: [
        { value: "↑", label: "Core Web Vitals" },
        { value: "↑ 90%", label: "Leads orgánicos" },
        { value: "<1s", label: "LCP" }
      ],
      resultsDescription:
        "Mayor visibilidad, mejores tiempos y más leads calificados con el mismo presupuesto.",
    },

    {
      id: 17,
      slug: "oracle-forms-migration-automation",
      title: "Legacy Oracle Forms — Migración Automatizada",
      shortDescription: "Pipeline n8n + IA para modernizar backend y frontend",
      tags: ["Automatización", "IA", "Migración"],
      year: "2025",
      client: "Sector Público/Enterprise",
      featuredImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FlegactOracleForms.png?alt=media&token=0f741706-56d1-491a-a543-94e7ce5a38cb",
      solutionImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FlegactOracleForms.png?alt=media&token=0f741706-56d1-491a-a543-94e7ce5a38cb",
      overview:
        "Modernizar sin frenar el negocio exige automatizar. Creamos un pipeline que extrae lógica de Forms/PLSQL y genera artefactos modernos en Node/Nest y Angular.",
      challenge:
        "Monolito legacy con deuda técnica, ciclos lentos y costos crecientes.",
      solution:
        "Automatización del análisis, documentación y scaffolding; pruebas y despliegues iterativos para bajar riesgo y tiempos.",
      technologies: [
        { name: "n8n" }, { name: "Node.js" }, { name: "NestJS" }, { name: "Express" }, { name: "TypeORM" },
        { name: "Angular" }, { name: "PostgreSQL" }, { name: "OpenAI" }
      ],
      results: [
        { value: "200+", label: "Formularios migrados" },
        { value: "60–80%", label: "Cobertura automatizada" },
        { value: "↓ 70%", label: "Time-to-deliver" }
      ],
      resultsDescription:
        "Menos riesgo y menor costo de mantenimiento con una plataforma lista para escalar.",
    },

    {
      id: 18,
      slug: "gamify-agents-sales",
      title: "Gamify Agents Sales — Ventas Gamificadas con IA",
      shortDescription: "Podios, retos y recompensas con nudges automáticos",
      tags: ["Ventas", "Gamificación", "IA", "Automatización"],
      year: "2023",
      client: "AssureX Agents",
      featuredImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FSalesGames.png?alt=media&token=283f9203-290e-4797-ba1d-bf3e1b9bcfd4",
      solutionImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FSalesGames.png?alt=media&token=283f9203-290e-4797-ba1d-bf3e1b9bcfd4",
      overview:
        "Lo que no se mide no mejora; lo que se celebra se acelera. Gamificamos la operación comercial con IA para foco, ritmo y cierres.",
      challenge:
        "Baja motivación, poca visibilidad de avances y tiempos lentos en el contacto con leads.",
      solution:
        "Objetivos claros por agente, feedback en tiempo real y nudges automáticos que impulsan la acción correcta a tiempo.",
      technologies: [
        { name: "Next.js" }, { name: "Node.js" }, { name: "PostgreSQL" }, { name: "OpenAI" }, { name: "Supabase Realtime" }
      ],
      results: [
        { value: "↑ 40%", label: "Participación" },
        { value: "↓ 35%", label: "Tiempo de respuesta" },
        { value: "↑ 18%", label: "Tasa de cierre" }
      ],
      resultsDescription:
        "Comportamientos alineados al objetivo, con impacto directo en conversión y velocidad.",
    },

    {
      id: 19,
      slug: "techtools-ecommerce-internal",
      title: "E-commerce Técnico — Reposición de Herramientas",
      shortDescription: "Tienda interna con aprobaciones y stock sincronizado",
      tags: ["E-commerce", "Automatización", "Inventario"],
      year: "2023",
      client: "TechTools (Interno)",
      featuredImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FEcommerceTools.png?alt=media&token=980b26f0-ba0d-41fc-b559-eb0c54e5e9ff",
      solutionImage: "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FEcommerceTools.png?alt=media&token=980b26f0-ba0d-41fc-b559-eb0c54e5e9ff",
      overview:
        "Cuando el técnico no tiene herramienta, la operación se detiene. Digitalizamos la reposición con trazabilidad y aprobaciones automáticas.",
      challenge:
        "Pedidos por planillas, demoras en autorizaciones y cero visibilidad del stock.",
      solution:
        "Catálogo interno, carrito, aprobaciones por workflow y stock sincronizado con reportes por área/proyecto.",
      technologies: [
        { name: "Next.js" }, { name: "Node.js" }, { name: "PostgreSQL" }, { name: "Stripe" }, { name: "NextAuth" }
      ],
      results: [
        { value: "500+", label: "Órdenes/mes" },
        { value: "↓ 45%", label: "Tiempo de ciclo" },
        { value: "↓", label: "Errores de inventario" }
      ],
      resultsDescription:
        "Reposición más rápida y menos errores con control de punta a punta del proceso.",
    },
  ],
};


export const projectsDataResume: ProjectsDataResume = {
  es: [
    {
      id: 1,
      slug: "proptech-crm-suite",
      title: "CRM Inmobiliario — Automatización End-to-End",
      category: [
        "SaaS",
        "CRM",
        "Automatización",
        "Agentes de IA",
        "Analytics & BI",
        "Plataforma",
      ],
      industry: "Bienes Raíces",
      client: "Grupo Banker Suite",
      year: "2024",
      duration: "6 meses",
      height: "tall",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-tomas-demo.firebasestorage.app/o/GrupoBanker.jpg?alt=media&token=98d891cd-20ce-4e0e-98bb-bf0900c64041",
      gradient: "from-rose-500 to-red-600",
      bgColor: "bg-rose-50",
      accentColor: "text-rose-600",
      description:
        "CRM para alquileres y ventas con scoring de oportunidades, objetivos de agentes, chat con bot IA y reportes de facturación.",
      challenge:
        "Pipeline desordenado, cobranzas manuales y bajo seguimiento a tiempo.",
      result:
        "Prioridad por valor, automatización de follow-ups y paneles de rendimiento por agente.",
      roi: "Cierres más rápidos",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "OpenAI", "Express", "Docker"],
      metrics: [
        { label: "Tiempo de cierre", value: "↓" },
        { label: "Follow-up a tiempo", value: "↑" },
        { label: "Mora", value: "↓" },
      ],
    },
    {
      id: 2,
      slug: "insurance-boosters-crm-ia",
      title: "Insurance Boosters — CRM con IA & Automatización",
      category: [
        "SaaS",
        "CRM",
        "Automatización",
        "Agentes de IA",
        "Analytics & BI",
        "Plataforma",
      ],
      industry: "Seguros",
      client: "Insurance Boosters SaaS",
      year: "2025",
      duration: "8 meses",
      height: "short",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-tomas-demo.firebasestorage.app/o/InsuranceBoosters.jpg?alt=media&token=f9f0b5d5-c0fc-46d7-b987-64d36ce692da",
      gradient: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50",
      accentColor: "text-indigo-600",
      description:
        "CRM unificado con lead scoring por IA, bots de WhatsApp y IVR inteligente para ventas y soporte 24/7.",
      challenge:
        "Procesos comerciales dispersos y tiempos de respuesta elevados entre canales.",
      result:
        "Omnicanalidad automatizada con trazabilidad end-to-end y respuestas inmediatas.",
      roi: "↑ Conversión • ↓ TTR",
      technologies: [
        "Node.js",
        "Next.js",
        "n8n",
        "PostgreSQL",
        "WhatsApp Cloud API",
        "Twilio Voice",
        "OpenAI",
      ],
      metrics: [
        { label: "Tiempo de respuesta", value: "↓" },
        { label: "Conversión", value: "↑" },
        { label: "Cobertura", value: "24/7" },
      ],
    },
    {
      id: 3,
      slug: "clupp-mexico-automatizacion-omnicanal",
      title: "Clupp — Automatización Omnicanal con IA",
      category: ["CRM", "Automatización", "Agentes de IA", "Plataforma"],
      industry: "Seguros",
      client: "Clupp YCombinator México",
      year: "2024",
      duration: "6 meses",
      height: "short",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-tomas-demo.firebasestorage.app/o/Clupp.jpg?alt=media&token=d288f2fa-af38-4a14-87c7-7e2652b62a0b",
      gradient: "from-cyan-500 to-emerald-600",
      bgColor: "bg-cyan-50",
      accentColor: "text-cyan-600",
      description:
        "Workflows de ventas y soporte con IA: priorización de leads, respuestas contextuales y ruteo automático.",
      challenge:
        "Alto volumen de consultas sin priorización ni escalamiento eficiente.",
      result:
        "Lead scoring con IA, bots omnicanal y paneles de performance en tiempo real.",
      roi: "ROI positivo",
      technologies: [
        "NestJS",
        "Node.js",
        "n8n",
        "WhatsApp API",
        "Twilio",
        "OpenAI",
        "React.js"
      ],
      metrics: [
        { label: "SLA", value: "↑" },
        { label: "Tiempos de atención", value: "↓" },
        { label: "Cierres", value: "↑" },
      ],
    },
    {
      id: 4,
      slug: "pagebuilder-pro-saas-forms",
      title: "PageBuilder Pro — SaaS de Formularios Automatizados",
      category: ["Automatización", "Plataforma"],
      industry: "Logística",
      client: "Net Global",
      year: "2021",
      duration: "6 meses",
      height: "tall",
      image:
        "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FPageBuilderPro.png?alt=media&token=3d1ceb01-cd22-43f8-82ed-bb67722285cc",
      gradient: "from-teal-500 to-emerald-600",
      bgColor: "bg-teal-50",
      accentColor: "text-teal-600",
      description:
        "Generador de pantallas y formularios con validaciones dinámicas y QA automatizado.",
      challenge:
        "Baja conversión y validaciones manuales que demoraban entregas.",
      result:
        "Automatización de captura, verificación de email/teléfono y ruteo por equipo.",
      roi: "↑ CR = ROI positivo",
      technologies: ["Next.js", "TypeScript", "Node.js", "Cypress", "MongoDB"],
      metrics: [
        { label: "Tasa de conversión", value: "↑" },
        { label: "Errores de datos", value: "↓" },
        { label: "Cobertura de QA", value: "Continua" },
      ],
    },
    {
      id: 5,
      slug: "dwilliams-real-estate-crm",
      title: "D’ Williams — CRM Inmobiliario & Digitalización",
      category: ["CRM", "Automatización", "Analytics & BI", "Plataforma"],
      industry: "Bienes Raíces",
      client: "D’ Williams Real Estate",
      year: "2024",
      duration: "7 semanas",
      height: "auto",
      image:
        "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FDWilliams%20(2).png?alt=media&token=a46e929f-d1c5-4f28-a27b-be0bb88e05db",
      gradient: "from-rose-500 to-red-600",
      bgColor: "bg-rose-50",
      accentColor: "text-rose-600",
      description:
        "Sitio y CRM con fichas unificadas, filtros dinámicos, mapas y automatización de tareas comerciales.",
      challenge: "Pipeline desordenado y seguimiento manual sin priorización.",
      result:
        "Scoring por interés, campañas automáticas y vistas por propiedad con geolocalización.",
      roi: "Cierres más rápidos",
      technologies: ["NextJs", "NodeJs", "Firebase", "Cloud Run", "Cloud Functions"],
      metrics: [
        { label: "Tiempo de cierre", value: "↓" },
        { label: "Follow-up puntual", value: "↑" },
        { label: "Visibilidad del pipeline", value: "↑" },
      ],
    },
    {
      id: 6,
      slug: "lemur-school-e-learning-platform",
      title: "Lemur School — Plataforma de Cursos Online",
      category: ["Plataforma", "Automatización"],
      industry: "E-Learning",
      client: "Lemur School",
      year: "2023",
      duration: "3 meses",
      height: "auto",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-tomas-demo.firebasestorage.app/o/LemurSchool.jpg?alt=media&token=f55f7e82-3dcd-4ffe-8162-34c6e9cf0a10",
      gradient: "from-violet-600 to-indigo-700",
      bgColor: "bg-violet-50",
      accentColor: "text-violet-700",
      description:
        "Plataforma e-learning con pasarela de pagos, login, módulos, lecciones en video y automatizaciones de onboarding y recordatorios.",
      challenge:
        "Cursos dispersos sin pagos integrados ni seguimiento automatizado del alumno.",
      result:
        "Portal unificado con pagos, tracking de progreso y comunicaciones automáticas para mejorar finalización y retención.",
      roi: "ROI positivo en 3 meses",
      technologies: [
        "Next.js",
        "Node.js",
        "Stripe",
        "PostgreSQL",
        "Firebase Storage",
        "Cloud Functions",
        "Cloud Run"
      ],
      metrics: [
        { label: "Modulos activos", value: "80+" },
        { label: "Estudiantes", value: "1.000+" },
        { label: "Tasa de finalización", value: "↑ 35%" },
      ],
    },
    {
      id: 7,
      slug: "twilio-voice-agent-rt",
      title: "Twilio Voice Agent — Atención en Tiempo Real",
      category: ["Automatización", "Agentes de IA"],
      industry: "IA Agents",
      client: "AI Voice Agent",
      year: "2025",
      duration: "4 semanas",
      height: "short",
      image:
        "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FAIVoiceAgent.png?alt=media&token=ac2876fb-4fa9-4509-a584-c1ebb3fc3b77",
      gradient: "from-red-600 to-rose-700",
      bgColor: "bg-rose-50",
      accentColor: "text-rose-700",
      description:
        "Agente de voz con IA (Twilio Conversation Relay) y function calling para soporte y ventas en tiempo real.",
      challenge:
        "Altos picos de llamadas, respuestas inconsistentes y poca trazabilidad en CRM.",
      result:
        "Calificación automática, respuestas naturales y registro completo en CRM para medir desempeño.",
      roi: "↓ AHT • ↑ SLA",
      technologies: [
        "Twilio",
        "Node.js",
        "WebSockets",
        "OpenAI Realtime",
        "CRM API",
        "Conversation Relay"
      ],
      metrics: [
        { label: "Llamadas/mes", value: "5.000+" },
        { label: "AHT", value: "↓ 25%" },
        { label: "SLA", value: "↑" },
      ],
    },
    {
      id: 8,
      slug: "hornero-proptech-app",
      title: "Hornero — Gestión Inteligente de Coworking",
      category: ["Apps Móviles", "Automatización"],
      industry: "Bienes Raíces",
      client: "Globant",
      year: "2022",
      duration: "2 meses",
      height: "tall",
      image:
        "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2Fhornero%20(1).png?alt=media&token=178c5a18-1a5e-43c4-b787-50619fd069c3",
      gradient: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      accentColor: "text-emerald-600",
      description:
        "App mobile-first para reservar salas y escritorios con recomendaciones, panel de ocupación en tiempo real.",
      challenge: "Gestión manual de espacios y amenities sin trazabilidad.",
      result:
        "Automatización de reservas, calendar inteligente y métricas de uso.",
      roi: "400% ROI",
      technologies: ["React", "Redux", "Node.js", "MongoDB", "AI/ML"],
      metrics: [
        { label: "Escritorios", value: "500+" },
        { label: "Comunidad", value: "+ Interación entre colaboradores" },
        { label: "Tiempo ahorrado", value: "15h/sem" },
      ],
    },
    {
      id: 9,
      slug: "palermo-bajo-rugby-app",
      title: "Palermo Bajo Rugby — App & Automatización",
      category: ["Apps Móviles", "Automatización"],
      industry: "Deportes",
      client: "Club Palermo Bajo",
      year: "2025",
      duration: "6 semanas",
      height: "tall",
      image:
        "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FPalermoBajo.png?alt=media&token=3a223ffd-f284-4f9c-9328-b7652f0c7746",
      gradient: "ligth",
      bgColor: "bg-emerald-50",
      accentColor: "text-emerald-700",
      description:
        "App para carga de partidos, resultados en tiempo real y notificaciones segmentadas. Automatiza publicación y comunicación con la comunidad.",
      challenge:
        "Gestión manual de fixtures y difusión dispersa generaban demoras y baja visibilidad.",
      result:
        "Carga simple, resultados live y alertas automáticas por división/equipo para aumentar alcance y engagement.",
      roi: "↑ Engagement de la comunidad",
      technologies: [
        "Next.js",
        "Firebase/Firestore",
        "Cloud Functions",
        "FCM",
        "Tailwind",
        "Mobile-first",
        "PWA"
      ],
      metrics: [
        { label: "Partidos publicados", value: "1.200+" },
        { label: "Suscriptores a notificaciones", value: "2000+" },
        { label: "Tiempo de publicación", value: "↓ 80%" },
      ],
    },
    {
      id: 10,
      slug: "sky-eleven-copy-trading-telegram",
      title: "Sky Eleven — Copy Trading Automatizado con Telegram",
      category: ["Agentes de IA", "Automatización"],
      industry: "Finanzas",
      client: "Sky Eleven Solutions",
      year: "2022",
      duration: "6 semanas",
      height: "auto",
      image:
        "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FSkyEleven%20(2).png?alt=media&token=c90579db-1224-4b97-9c96-942cd4ee0673",
      gradient: "from-sky-500 to-blue-600",
      bgColor: "bg-sky-50",
      accentColor: "text-sky-600",
      description:
        "Automatizamos copy trading con bots de Telegram: recepción de señales, validación, gestión de riesgo y ejecución en broker, todo en tiempo real. Notificaciones, bitácora de operaciones y reportes automáticos.",
      challenge:
        "Operativa manual con señales dispersas, latencia humana en la ejecución y bajo control de riesgo.",
      result:
        "Pipeline end-to-end: señales → validaciones → tamaño de posición → orden al broker → confirmación en Telegram, con métricas y auditoría.",
      roi: "ROI positivo por reducción de latencia y errores",
      technologies: [
        "Node.js",
        "TypeScript",
        "Telegram Bot API",
        "Broker REST/WebSocket API",
        "Webhooks (TradingView)",
        "PostgreSQL",
        "n8n"
      ],
      metrics: [
        { label: "Latencia señal → orden", value: "↓" },
        { label: "Ejecuciones automatizadas", value: "↑" },
        { label: "Tiempo operativo manual", value: "↓ 60%" },
      ],
    },
    {
      id: 11,
      slug: "vskins-ventas-soporte-ia",
      title: "Vskins — Ventas & Soporte con IA",
      category: ["Agentes de IA", "Automatización"],
      industry: "Ecommerce",
      client: "Vskins",
      year: "2025",
      duration: "2 meses",
      height: "short",
      image:
        "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FVskins.png?alt=media&token=c6b0ceca-c3e1-47a1-9ae3-eb2235f97795",
      gradient: "from-fuchsia-500 to-pink-600",
      bgColor: "bg-fuchsia-50",
      accentColor: "text-fuchsia-600",
      description:
        "Agente de IA en WhatsApp e Instagram que responde FAQs, recomienda productos y deriva a humano con contexto.",
      challenge: "Picos de consultas y pérdidas de ventas fuera de horario.",
      result:
        "Cobertura 24/7 con autoservicio inteligente y handoff eficiente.",
      roi: "↑ Ventas • ↑ CSAT",
      technologies: [
        "n8n",
        "WhatsApp Cloud API",
        "OpenAI",
      ],
      metrics: [
        { label: "Cobertura", value: "24/7" },
        { label: "Satisfacción", value: "↑" },
        { label: "Costo de atención", value: "↓" },
      ],
    },
    {
      id: 12,
      slug: "insurance-community-app",
      title: "Clupp Insurance Community — App de Comunidad",
      category: ["Apps Móviles"],
      industry: "Seguros",
      client: "Clupp - Insurance Community",
      year: "2023",
      duration: "7 semanas",
      height: "auto",
      image:
        "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FClubInsurance.png?alt=media&token=e483dd49-e821-409c-a3c4-448c9821007a",
      gradient: "from-cyan-600 to-emerald-700",
      bgColor: "bg-cyan-50",
      accentColor: "text-cyan-700",
      description:
        "App móvil con salas temáticas, chat, foros y base de conocimiento con IA para autoservicio.",
      challenge:
        "Soporte saturado y conocimiento disperso entre canales no oficiales.",
      result:
        "Auto-gestión, moderación y búsqueda inteligente para reducir tickets y acelerar respuestas.",
      roi: "↓ Costo por ticket",
      technologies: [
        "React",
        "Firebase",
        "Firestore",
        "Cloud Functions",
        "OpenAI",
        "PWA"
      ],
      metrics: [
        { label: "Comunidad", value: "+Interacción entre asegurados" },
        { label: "Mensajes/mes", value: "15.000+" },
        { label: "Desvío de tickets", value: "↑ 30%" },
      ],
    },
    {
      id: 13,
      slug: "scatola-box-industry-automation",
      title: "Scatola — Automatización de Planta y Trazabilidad",
      category: ["Apps Móviles", "Automatización"],
      industry: "Manufactura",
      client: "Scatola S.A. - NetGlobal",
      year: "2024",
      duration: "2 meses",
      height: "tall",
      image:
        "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FScatola.png?alt=media&token=2455a943-921a-4073-8636-ef308b0ef307",
      gradient: "from-emerald-700 to-lime-600",
      bgColor: "bg-lime-50",
      accentColor: "text-lime-700",
      description:
        "App para carga de procesos y bobinas con trazabilidad, costos y visibilidad en tiempo real de la línea productiva.",
      challenge:
        "Datos en papel/planillas y poca visibilidad del costo por orden/insumo.",
      result:
        "Flujos digitalizados, KPIs de planta y reportes de costos para decisiones ágiles.",
      roi: "↓ Paradas no planificadas",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Charts"],
      metrics: [
        { label: "Trazabilidad de lotes", value: "100%" },
        { label: "Tiempo de carga", value: "↓ 60%" },
        { label: "Precisión de costos", value: "↑" },
      ],
    },
    {
      id: 14,
      slug: "nico-maggi-fitness-courses",
      title: "Nico Maggi — Web + Cursos Automatizados",
      category: ["Aplicaciones Web", "Automatización"],
      industry: "E-Learning",
      client: "Nico Maggi",
      year: "2023",
      duration: "6 semanas",
      height: "auto",
      image:
        "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FNicoMaggi.png?alt=media&token=8382c7e7-3b85-4add-a99f-4a53b4e53e7a",
      gradient: "from-rose-600 to-pink-700",
      bgColor: "bg-rose-50",
      accentColor: "text-rose-700",
      description:
        "Sitio de marca personal con embudos automatizados, cursos online, pagos y recordatorios.",
      challenge:
        "Dependencia de redes y procesos manuales para vender y dictar cursos.",
      result:
        "Captación, onboarding y calendario automatizado; más ventas con menos carga operativa.",
      roi: "↑ Ingresos por curso",
      technologies: [
        "Next.js",
        "Stripe",
        "Calendly API",
        "PostgreSQL",
        "Email Automation"
      ],
      metrics: [
        { label: "Leads", value: "↑ 120%" },
        { label: "No-show", value: "↓ 30%" },
        { label: "Tiempo operativo", value: "↓" },
      ],
    },
    {
      id: 15,
      slug: "chimpance-portfolio-ia",
      title: "Chimpancé — Portfolio Optimizado con IA",
      category: ["Aplicaciones Web"],
      industry: "IT/Software",
      client: "Chimpancé",
      year: "2022",
      duration: "4 semanas",
      height: "short",
      image:
        "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FChimpance%20(2).png?alt=media&token=b446a60c-d525-4de5-b33f-d430896eaf3f",
      gradient: "from-violet-500 to-purple-600",
      bgColor: "bg-violet-50",
      accentColor: "text-violet-600",
      description:
        "Sitio responsive con performance mejorada y pipeline de contenido para SEO.",
      challenge:
        "Velocidad baja y mantenimiento manual que afectaban la visibilidad orgánica.",
      result:
        "Next.js optimizado, metadatos/snippets generados por IA e imágenes responsivas.",
      roi: "CAC orgánico más eficiente",
      technologies: ["React", "Node.js"],
      metrics: [
        { label: "Core Web Vitals", value: "↑" },
        { label: "Tráfico orgánico", value: "+70%" },
        { label: "Costo de mantenimiento", value: "-50%" },
      ],
    },
    {
      id: 16,
      slug: "agrominera-montebello",
      title: "Agrominera Montebello — Digitalización & Web Vitals",
      category: ["Aplicaciones Web"],
      industry: "Agro",
      client: "Agrominera Montebello",
      year: "2024",
      duration: "3 semanas",
      height: "short",
      image:
        "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FAgromineraMontebello.png?alt=media&token=4571588b-d68f-4d80-a5fa-97917855bb12",
      gradient: "from-amber-700 to-stone-700",
      bgColor: "bg-amber-50",
      accentColor: "text-amber-700",
      description:
        "Sitio corporativo con catálogo de arenas, formularios de cotización y Core Web Vitals optimizados.",
      challenge: "Baja visibilidad online y captación manual de oportunidades.",
      result:
        "SEO técnico, carga veloz y flujos de contacto automatizados para ventas.",
      roi: "↑ Leads orgánicos",
      technologies: [
        "Next.js",
        "Vercel",
        "CMS Headless",
        "Analytics",
      ],
      metrics: [
        { label: "Core Web Vitals", value: "↑" },
        { label: "Leads orgánicos", value: "↑ 90%" },
        { label: "Tiempo de carga", value: "< 1s LCP" },
      ],
    },
    {
      id: 17,
      slug: "oracle-forms-migration-automation",
      title: "Legacy Oracle Forms — Migración Automatizada",
      category: ["Agentes de IA", "Automatización"],
      industry: "IT/Software",
      client: "Minfactory",
      year: "2025",
      duration: "3 meses",
      height: "tall",
      image:
        "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FlegactOracleForms.png?alt=media&token=0f741706-56d1-491a-a543-94e7ce5a38cb",
      gradient: "from-amber-600 to-orange-700",
      bgColor: "bg-amber-50",
      accentColor: "text-amber-700",
      description:
        "Pipeline n8n + IA para extraer lógica de Oracle Forms/PLSQL y generar backend Node/Nest/TypeORM y front Angular.",
      challenge:
        "Monolito legacy con alta deuda técnica, baja velocidad de entrega y costos crecientes.",
      result:
        "Automatización del análisis, documentación y scaffolding de código; reducción de tiempos y riesgos en la modernización.",
      roi: "↓ Costos de mantenimiento • ↑ Velocidad de entrega",
      technologies: [
        "n8n",
        "Node.js",
        "NestJS",
        "Express",
        "TypeORM",
        "Angular",
        "PostgreSQL",
        "OpenAI",
      ],
      metrics: [
        { label: "Formularios migrados", value: "200+" },
        { label: "Cobertura automatizada", value: "60–80%" },
        { label: "Time-to-deliver", value: "↓ 70%" },
      ],
    },
    {
      id: 18,
      slug: "gamify-agents-sales",
      title: "Gamify Agents Sales — Ventas Gamificadas con IA",
      category: ["Aplicaciones Web", "Automatización"],
      industry: "Seguros",
      client: "Clupp Agents",
      year: "2023",
      duration: "4 semanas",
      height: "short",
      image:
        "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FSalesGames.png?alt=media&token=283f9203-290e-4797-ba1d-bf3e1b9bcfd4",
      gradient: "from-fuchsia-600 to-pink-700",
      bgColor: "bg-fuchsia-50",
      accentColor: "text-fuchsia-700",
      description:
        "Tableros de podio, retos y recompensas impulsados por IA para elevar foco y velocidad comercial.",
      challenge:
        "Baja motivación, poca visibilidad de avances y respuestas tardías a leads.",
      result:
        "Agentes con objetivos claros, feedback en tiempo real y nudges automáticos para acelerar cierres.",
      roi: "↑ Conversión por campañas",
      technologies: [
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "OpenAI",
        "Supabase Realtime",
      ],
      metrics: [
        { label: "Participación", value: "↑ 40%" },
        { label: "Tiempo de respuesta", value: "↓ 35%" },
        { label: "Tasa de cierre", value: "↑ 18%" },
      ],
    },
    {
      id: 19,
      slug: "techtools-ecommerce-internal",
      title: "E-commerce Técnico — Reposición de Herramientas",
      category: ["Aplicaciones Web", "Automatización"],
      industry: "Telecomunicaciones",
      client: "DirectTV (Interno) - NetGlobal",
      year: "2023",
      duration: "2 meses",
      height: "short",
      image:
        "https://firebasestorage.googleapis.com/v0/b/dwg-app.firebasestorage.app/o/Proyectos%2FEcommerceTools.png?alt=media&token=980b26f0-ba0d-41fc-b559-eb0c54e5e9ff",
      gradient: "from-slate-600 to-indigo-700",
      bgColor: "bg-slate-50",
      accentColor: "text-slate-700",
      description:
        "Tienda interna para técnicos: catálogo, carrito y workflows de aprobación para reponer equipamiento.",
      challenge:
        "Pedidos por planillas y demoras en autorización/entrega sin visibilidad.",
      result:
        "Órdenes trazables, aprobaciones automáticas y stock sincronizado.",
      roi: "↓ Tiempo de reposición",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "NextAuth"],
      metrics: [
        { label: "Órdenes/mes", value: "500+" },
        { label: "Tiempo de ciclo", value: "↓ 45%" },
        { label: "Errores de inventario", value: "↓" },
      ],
    },
  ],
};

