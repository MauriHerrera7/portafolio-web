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
    id: 10,
    title: "ADBIZE",
    description:
      "[Pasantía] Sistema de certificación digital, validación con códigos QR, generación dinámica de PDFs y rediseño de interfaz de alto rendimiento para el proyecto COMA.",
    longDescription:
      "Durante mi pasantía profesional en Adbize, formé parte del desarrollo de un sistema de certificación digital y colaboré activamente en el proyecto COMA, aplicando y fortaleciendo competencias avanzadas en desarrollo web fullstack y arquitectura de software.\n\n• Registro y Gestión de Usuarios: Implementación de flujos de registro con foto de perfil, autenticación segura con NextAuth.js y persistencia en PostgreSQL mediante Prisma ORM.\n\n• Edición y Personalización de Certificados: Herramienta interactiva para la edición de plantillas y certificados digitales con Konva.js y TypeScript.\n\n• Validación con Códigos QR: Generación e integración de códigos QR dinámicos para verificar la autenticidad y validez de cada certificado emitido.\n\n• Formularios y Validaciones: Creación de formularios reactivos con validaciones dinámicas y manejo de estados complejos.\n\n• Generación y Exportación de PDFs: Procesamiento y renderizado de archivos PDF optimizados para descarga y envío automatizado con Nodemailer.\n\n• Rediseño Visual y Rendimiento (COMA): Rediseño integral de la interfaz de usuario de la plataforma COMA, logrando mayor atractivo visual, usabilidad y resolviendo problemas técnicos y de rendimiento.",
    image: "/projects/adbize.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Material-UI",
      "AWS S3",
      "Konva.js",
      "NextAuth.js",
      "Cloudinary",
    ],
    github: "",
    demo: "",
    status: "PASANTÍA",
    category: "FULLSTACK",
    features: [
      "Experiencia y contribución en pasantía profesional",
      "Sistema de certificación digital interactivo con Konva.js",
      "Validación de certificados mediante códigos QR dinámicos",
      "Generación y exportación de archivos PDF",
      "Registro de usuarios con foto de perfil y NextAuth.js",
      "Persistencia con Prisma ORM y base de datos PostgreSQL",
      "Almacenamiento multimedia en la nube con AWS S3 y Cloudinary",
      "Rediseño visual y optimización de rendimiento en proyecto COMA",
    ],
  },
  {
    id: 9,
    title: "OBROK",
    description:
      "[Pasantía / Colaboración] Desarrollo Full Stack e integración de agentes de IA autónomos (LangGraph/LangChain), chat omnicanal en tiempo real e ingeniería inversa de APIs.",
    longDescription:
      "Durante mi pasantía en OBROK, colaboré activamente en el desarrollo y arquitectura de la plataforma, aportando en áreas críticas de desarrollo backend, agentes de inteligencia artificial y conectividad en tiempo real:\n\n• Desarrollo Core y Arquitectura: Construcción de un backend robusto y altamente escalable utilizando Python y Django REST Framework (DRF), gestionando múltiples capas de servicios complejos bajo principios de código limpio y buenas prácticas de ingeniería.\n\n• Integración de Agentes de IA: Diseño e implementación de agentes inteligentes con LangGraph y LangChain para la automatización de procesos clave del negocio, orquestando flujos interactivos donde la IA participa tanto de forma pasiva como activa.\n\n• Ingeniería Inversa y APIs: Integración intensiva con múltiples APIs de terceros y capacidad demostrada para realizar ingeniería inversa en APIs sin documentación pública, logrando integraciones estables y creando documentación técnica propia desde cero.\n\n• Tiempo Real y Omnicanalidad: Implementación de sistemas de chat omnicanal e integración fluida para la comunicación de alta concurencia en tiempo real.",
    image: "/projects/obrok.png",
    technologies: [
      "Python",
      "Django REST Framework",
      "LangGraph",
      "LangChain",
      "IA",
      "WebSockets",
      "APIs & Reverse Eng",
    ],
    github: "",
    demo: "",
    status: "PASANTÍA",
    category: "AI",
    features: [
      "Colaboración y desarrollo en pasantía profesional",
      "Backend Core robusto con Python y Django REST Framework (DRF)",
      "Agentes de IA autónomos diseñados con LangGraph y LangChain",
      "Orquestación de flujos de IA activos y pasivos",
      "Ingeniería inversa en APIs de terceros sin documentación pública",
      "Creación de documentación técnica propia desde cero",
      "Chat omnicanal y comunicación en tiempo real",
      "Arquitectura limpia por capas y servicios escalables",
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
    github: "",
    demo: "",
    status: "ACTIVE",
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
    id: 7,
    title: "CHAT BOT TATL IA",
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
    github: "", 
    demo: "https://tatl-ai.vercel.app/",   
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
    status: "COMPLETED",
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
