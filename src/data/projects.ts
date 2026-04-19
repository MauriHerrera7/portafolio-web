export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  status: "COMPLETED" | "DEPLOYED" | "ACTIVE" | "BETA";
  category: "FULLSTACK" | "BACKEND API" | "FRONTEND" | "DATA" | "AI";
  features: string[];
}

export const projects: Project[] = [
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
    github: "", // Add GitHub link if available
    demo: "",   // Add Demo link if available
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
