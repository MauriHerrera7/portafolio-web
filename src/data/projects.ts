export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  status: "COMPLETED" | "DEPLOYED" | "ACTIVE" | "BETA" | "PASANTÍA";
  category: "FULLSTACK" | "BACKEND API" | "FRONTEND" | "DATA" | "AI";
  features: string[];
}

export const projects: Project[] = [
  {
    id: 12,
    title: "FLUXERA",
    description:
      "Motor de procesamiento asíncrono de eventos: sistema backend resiliente, idempotente y escalable con NestJS, PostgreSQL, Redis y BullMQ.",
    longDescription:
      "Fluxera es un sistema backend robusto diseñado para gestionar flujos de eventos de forma asíncrona, tolerante a fallos y altamente escalable. Construido sobre una arquitectura modular limpia, el sistema garantiza la consistencia de los datos mediante un control estricto de idempotencia, asegurando que ninguna transacción se procese por duplicado.\n\n• Procesamiento Asíncrono Resiliente: Integración con Redis y BullMQ para la gestión de colas de trabajo, desacoplando la recepción del evento de su ejecución.\n\n• Control de Idempotencia: Uso de PostgreSQL como única fuente de la verdad para interceptar y neutralizar solicitudes duplicadas en milisegundos.\n\n• Manejo de Ciclo de Vida y Reintentos: Máquina de estados automatizada (PENDING -> PROCESSING -> PROCESSED / FAILED) con políticas de reintento inteligente basadas en backoff exponencial.\n\n• Calidad y Fiabilidad: Cobertura de pruebas unitarias y End-to-End (E2E) con Vitest, además de despliegue contenerizado vía Docker.",
    image:
      "https://res.cloudinary.com/dry6dvzoj/image/upload/v1789866506/NestJS_x7ewpx.jpg",
    technologies: [
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "TypeORM",
      "Redis",
      "BullMQ",
      "Docker",
      "Vitest",
    ],
    github: "https://github.com/MauriHerrera7/Fluxera",
    demo: "https://github.com/MauriHerrera7/Fluxera",
    status: "COMPLETED",
    category: "BACKEND API",
    features: [
      "Procesamiento asíncrono resiliente con Redis y BullMQ",
      "Desacople entre recepción del evento y su ejecución",
      "Idempotencia con PostgreSQL como fuente de la verdad",
      "Neutralización de solicitudes duplicadas en milisegundos",
      "Máquina de estados: PENDING → PROCESSING → PROCESSED / FAILED",
      "Reintentos inteligentes con backoff exponencial",
      "Arquitectura modular limpia y escalable",
      "Pruebas unitarias y E2E con Vitest",
      "Despliegue contenerizado con Docker",
    ],
  },
  {
    id: 11,
    title: "ECOMMERCE API",
    description:
      "API REST lista para producción que cubre el ciclo completo de una tienda: autenticación JWT, catálogo con paginación, checkout transaccional con bloqueo pesimista, idempotencia, subida de imágenes y pipeline CI/CD.",
    longDescription:
      "Una API REST lista para producción que cubre el ciclo completo de una tienda:\n\n• Usuarios y autenticación — registro, login con JWT, roles de cliente y administrador\n\n• Catálogo — productos y categorías con paginación\n\n• Checkout transaccional — las órdenes se crean dentro de una transacción PostgreSQL con bloqueo pesimista de filas, garantizando que el stock nunca queda negativo aunque lleguen dos requests al mismo tiempo\n\n• Idempotencia — si el cliente reintenta una compra (por ejemplo por timeout de red), el sistema detecta que ya la procesó y devuelve la misma orden sin cobrar dos veces ni descontar stock de nuevo\n\n• Imágenes — subida de fotos de producto a Cloudinary\n\n• Observabilidad — health checks, logs estructurados en JSON, rate limiting\n\n• DevOps — Docker multi-stage, pipeline CI/CD en GitHub Actions, despliegue automatizado en Render con migraciones incluidas",
    image:
      "https://res.cloudinary.com/dry6dvzoj/image/upload/v1789866506/NestJS_x7ewpx.jpg",
    technologies: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "JWT",
      "Docker",
      "Cloudinary",
      "GitHub Actions",
      "Swagger",
      "Render",
    ],
    github: "https://github.com/MauriHerrera7/E-commerce-api",
    demo: "https://e-commerce-api-sm5d.onrender.com/api#/",
    status: "DEPLOYED",
    category: "BACKEND API",
    features: [
      "Autenticación JWT con roles de cliente y administrador",
      "Catálogo de productos y categorías con paginación",
      "Checkout transaccional con bloqueo pesimista de filas (stock seguro)",
      "Idempotencia: reintentos de compra sin doble cobro ni doble descuento",
      "Subida de imágenes de producto a Cloudinary",
      "Health checks, logs estructurados en JSON y rate limiting",
      "Docker multi-stage para build optimizado",
      "Pipeline CI/CD en GitHub Actions",
      "Despliegue automatizado en Render con migraciones incluidas",
      "Documentación con Swagger",
    ],
  },
  {
    id: 8,
    title: "LINKDEV",
    description:
      "Aplicación que se conecta a GitHub, analiza la actividad de un repositorio y utiliza IA para generar publicaciones atractivas listas para LinkedIn.",
    longDescription:
      "Linkdev es una plataforma inteligente que se conecta directamente a la API de GitHub para analizar la actividad, commits, pull requests y lanzamientos de cualquier repositorio de software. Mediante modelos avanzados de Inteligencia Artificial, interpreta el progreso del proyecto y genera publicaciones optimizadas, claras y profesionales listas para compartir en LinkedIn, ayudando a desarrolladores a documentar y visibilizar su trabajo sin esfuerzo. Construida con una arquitectura robusta fullstack utilizando Python, Django y PostgreSQL en el backend, y Next.js con React en el frontend.",
    image: "/projects/linkdev.png",
    technologies: [
      "Python",
      "Django",
      "PostgreSQL",
      "Next.js",
      "React",
      "IA",
      "GitHub API",
    ],
    github: "https://github.com/MauriHerrera7/Linkdev",
    demo: "https://linkdevapp.vercel.app/",
    status: "DEPLOYED",
    category: "AI",
    features: [
      "Conexión e integración con GitHub API",
      "Análisis automatizado de actividad y commits en repositorios",
      "Generación de publicaciones para LinkedIn impulsada por IA",
      "Configuración personalizada de tono, estilo y hashtags",
      "Backend escalable y seguro con Python y Django",
      "Persistencia de datos con base de datos PostgreSQL",
      "Frontend rápido y dinámico con Next.js y React",
    ],
  },
  {
    id: 13,
    title: "TATL IA FRONTEND",
    description:
      "Landing cinematográfica del producto TATL IA: experiencia 3D interactiva, storytelling de marca y una interfaz pensada para convertir visitas en demos.",
    longDescription:
      "Frontend de TATL IA desplegado en Vercel: una landing de producto que vende el agente de agendamiento con una experiencia visual de alto impacto.\n\n• Experiencia 3D: escena interactiva construida con Spline (WebGL), con carga cinematográfica y composición tipo estudio alrededor del producto.\n\n• Dirección visual: tipografía editorial a gran escala, paleta oscura, microcopy de marca y jerarquía clara para comunicar valor en segundos.\n\n• Storytelling de producto: secciones que explican el asistente 24/7, la integración con WhatsApp, Google Sheets y Calendar, y el flujo de turnos sin fricción.\n\n• Conversión: CTAs de contacto, enlaces a LinkedIn, GitHub y portfolio, y un cierre orientado a agendar una demo.\n\n• Front-end moderno: React + Vite, animaciones de interfaz y despliegue en Vercel.",
    image: "https://res.cloudinary.com/dry6dvzoj/image/upload/v1776592082/tatl_ai_pcobsj.png",
    technologies: [
      "React",
      "Vite",
      "Spline",
      "Three.js",
      "CSS3",
      "Vercel",
    ],
    github: "",
    demo: "https://tatl-ai.vercel.app/",
    status: "DEPLOYED",
    category: "FRONTEND",
    features: [
      "Landing cinematográfica con carga de experiencia 3D",
      "Escena interactiva en Spline / WebGL",
      "Composición visual tipo estudio y tipografía editorial",
      "Storytelling de producto (WhatsApp, Sheets y Calendar)",
      "CTAs de contacto y conversión a demo",
      "Interfaz responsive de alto impacto",
      "Build con React + Vite y deploy en Vercel",
    ],
  },
  {
    id: 7,
    title: "TATL IA BACKEND",
    description:
      "Chatbot inteligente que automatiza la agenda de turnos, responde información de la empresa y gestiona precios, guardando todo en Google Sheets para un control total.",
    longDescription:
      "TATL IA es una solución de vanguardia diseñada para automatizar la interacción con clientes y la gestión de citas. Capaz de agendar, cancelar y reprogramar turnos de forma autónoma, el chatbot también maneja consultas sobre precios y detalles de la empresa. Una de sus funcionalidades clave es la integración con Google Sheets, donde se registran automáticamente todos los turnos agendados, permitiendo al dueño del negocio tener una planilla organizada y accesible en tiempo real. Su esencia es ahorrar tiempo y agilizar los procesos operativos, liberando al usuario de la necesidad de estar pendiente del celular permanentemente.",
    image: "https://res.cloudinary.com/dry6dvzoj/image/upload/v1776592082/tatl_ai_pcobsj.png",
    technologies: [
      "Python",
      "OpenAI API",
      "WhatsApp API",
      "Google Sheets API",
      "Django",
      "PostgreSQL",
    ],
    github: "https://github.com/MauriHerrera7/tatl-ai",
    demo: "",
    status: "ACTIVE",
    category: "AI",
    features: [
      "Agenda y cancelación de turnos automática",
      "Sincronización en tiempo real con Google Sheets",
      "Registro detallado de turnos en planilla Excel",
      "Respuestas inteligentes sobre la empresa",
      "Gestión de lista de precios actualizada",
      "Disponibilidad 24/7 sin intervención humana",
      "Integración directa con WhatsApp API",
    ],
  },


  {
    id: 4,
    title: "PSYMATCH",
    description:
      "Plataforma integral para psicólogos con autenticación avanzada, gestión de turnos, pasarela de pagos, dashboards personalizados y panel administrativo completo.",
    longDescription:
      "PsyMatch es una plataforma moderna y completa para la gestión de servicios psicológicos que incluye autenticación tradicional y OAuth2, sistema de pagos integrado, gestión avanzada de usuarios y turnos, dashboards diferenciados para psicólogos y usuarios, panel administrativo con métricas y gráficos, sistema de aprobación/rechazo de psicólogos, control de accesos con sistema de baneo, y páginas estáticas optimizadas para SEO.",
    image:
      "https://res.cloudinary.com/dry6dvzoj/image/upload/v1756620795/WhatsApp_Image_2025-08-31_at_03.12.58_smmum5.jpg",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "Flowbite",
      "TypeScript",
      "OAuth2",
      "Stripe",
      "Render",
    ],
    github: "https://github.com/PsyMatch/PsyMatch-Frontend",
    demo: "https://psy-match-frontend.vercel.app/",
    status: "DEPLOYED",
    category: "FRONTEND",
    features: [
      "Autenticación tradicional y OAuth2",
      "Pasarela de pagos integrada",
      "Gestión completa de usuarios",
      "Sistema de gestión de turnos",
      "Dashboard para psicólogos con estadísticas",
      "Dashboard para usuarios con historial",
      "Panel administrativo con métricas",
      "Sistema de aprobación de psicólogos",
      "Control de accesos y baneo",
      "Páginas estáticas optimizadas",
      "Interfaz responsive moderna",
    ],
  },
  {
    id: 5,
    title: "PSYMATCH BACKEND",
    description:
      "API backend robusta para plataforma de salud mental que conecta pacientes con psicólogos, con recomendaciones personalizadas y sistema de pagos.",
    longDescription:
      "Plataforma digital enfocada en salud mental que conecta pacientes con psicólogos según sus necesidades específicas. Resuelve la dificultad actual de encontrar un profesional adecuado ofreciendo recomendaciones personalizadas basadas en síntomas, filtros detallados y agendamiento con pago online. Además, permite a los psicólogos gestionar eficientemente sus consultas y pacientes.",
    image:
      "https://res.cloudinary.com/dry6dvzoj/image/upload/v1756622023/WhatsApp_Image_2025-08-31_at_03.33.21_ipp7vr.jpg",
    technologies: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Swagger",
      "JWT",
      "Docker",
    ],
    github: "https://github.com/PsyMatch/PsyMatch-Backend",
    demo: "https://psymatch-backend-app.onrender.com/api",
    status: "DEPLOYED",
    category: "BACKEND API",
    features: [
      "API RESTful con NestJS",
      "Sistema de recomendaciones personalizado",
      "Autenticación JWT segura",
      "Base de datos PostgreSQL",
      "Documentación Swagger automática",
      "Filtros detallados para psicólogos",
      "Sistema de agendamiento",
      "Integración de pagos online",
      "Gestión de consultas y pacientes",
      "Contenedorización con Docker",
    ],
  },
  {
    id: 6,
    title: "FORCEGYM",
    description:
      "Aplicación web fullstack para la gestión de gimnasios que permite administrar miembros, planes, pagos y generar rutinas de entrenamiento con selector de músculos.",
    longDescription:
      "FORCEGYM es una aplicación web fullstack desarrollada para optimizar la administración de gimnasios y mejorar la experiencia de entrenamiento de los usuarios. La plataforma permite gestionar miembros, planes de suscripción y pagos desde un panel administrativo moderno e intuitivo.\n\nUna de sus funcionalidades destacadas es el selector de músculos, que permite a los usuarios elegir grupos musculares específicos y visualizar ejercicios recomendados para cada uno, facilitando la creación de rutinas de entrenamiento personalizadas.\n\nEl frontend fue desarrollado con React y Next.js, ofreciendo una interfaz rápida, moderna y responsive. El backend utiliza Django y Django REST Framework, proporcionando una API robusta y escalable que gestiona la lógica del sistema. Los datos se almacenan en PostgreSQL, garantizando confiabilidad y rendimiento.\n\nLa arquitectura desacoplada entre frontend y backend permite escalar la aplicación y mantener una estructura limpia y mantenible.",
    image:
      "https://res.cloudinary.com/dry6dvzoj/image/upload/v1757705905/Forcegym_nwhlvh.png",
    technologies: [
      "React",
      "Next.js",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "TailwindCSS",
    ],
    github: "",
    demo: "https://forcegym.online",
    status: "DEPLOYED",
    category: "FULLSTACK",
    features: [
      "Gestión de miembros del gimnasio",
      "Administración de planes de suscripción",
      "Registro y control de pagos",
      "Panel de administración",
      "Selector de músculos para explorar ejercicios",
      "Visualización de ejercicios por grupo muscular",
      "API REST con Django REST Framework",
      "Base de datos PostgreSQL",
      "Interfaz moderna y responsive",
      "Arquitectura Fullstack desacoplada"
    ],
  },
];
