export type Project = {
  title: string
  description: string
  tags: string[]
  /** Live demo URL. Leave as "" to hide the link. */
  liveUrl: string
  /** Source code URL. Leave as "" to hide the link. */
  repoUrl: string
  imageUrl?: string
}

/**
 * Edit this list to add, remove, or update your projects.
 * Each project shows up as a card in the Projects section.
 */
export const projects: Project[] = [
{
  title: 'Sistema de Gestión para Taller de Bicicletas',
  description:
    'Desarrollo freelance (ene–mar 2026) para un cliente real. Desarrollé a medida, como producto comercial, un sistema de gestión que reemplazó la atención en papel del taller: clientes, órdenes de trabajo e inventario en un solo lugar. Aplicación de escritorio en uso real; según el cliente, redujo el uso de papel en más de un 50 %. Tecnologías: Electron, React, Flask, SQLite.',
  tags: ['Electron', 'React', 'Flask', 'SQLite'],
  liveUrl: '',
  repoUrl: '',
},
  {
    title: 'Bot para Recursos Humanos – Verisure',
    description:
      'Proyecto de vinculación con el medio (CITT Duoc UC, mar–may 2024). Desarrollé de forma individual un bot de Recursos Humanos que automatizó un proceso que antes tomaba varias horas: el bot responde las preguntas frecuentes de los colaboradores de Verisure. Tecnologías: Microsoft 365, Copilot y Power BI.',
    tags: ['Microsoft 365', 'Copilot', 'Power BI', 'Automatización'],
    liveUrl: '',
    repoUrl: '',
  },
  {
    title: 'Aplicaciones Web Full Stack',
    description:
      'Desarrollo de soluciones web con React, Django, Flask y APIs REST para distintos contextos de negocio.',
    tags: ['React', 'Django', 'Flask', 'APIs REST'],
    liveUrl: '',
    repoUrl: 'https://github.com/Nico-Cartes-dev/Progra-web-final',
  },
  {
    title: 'Shelf Monitor: sistema de computer vision para control de stock en góndolas',
    description:
      'Proyecto de tesis en computer vision que automatiza el monitoreo de stock en góndolas de supermercado a partir de cámaras de seguridad de baja resolución. Mejora la imagen con técnicas clásicas (denoise, CLAHE, gamma) y detecta con YOLOv8 tanto productos como huecos en la línea, con tres modos de cálculo del porcentaje vacío/ocupado (por productos, por huecos o mixto). Incluye alertas reactivas (umbral de vacío sostenido en el tiempo) y proactivas (pronóstico de agotamiento con rolling slope, Prophet y SARIMA), un ranking semanal de repisas con mayor riesgo de quiebre y resúmenes de alertas en lenguaje natural mediante LLM, con un objetivo de latencia end-to-end de 1 s. Actualmente en desarrollo, entrenando y afinando los modelos de detección.',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'PyTorch', 'Computer Vision', 'Forecasting'],
    liveUrl: '',
    repoUrl: 'https://github.com/Nico-Cartes-dev/tesis',
    imageUrl: '/shelf-monitor-detections.png',
  },
  {
  title: 'Bot de Discord con ChatGPT',
  description:
    'Bot de Discord que integra los modelos GPT-3.5 y GPT-4 de OpenAI, permitiendo a los usuarios mantener conversaciones en lenguaje natural directamente desde un canal del servidor. Desarrollado con Node.js y discord.js, con configuración mediante variables de entorno, modo de desarrollo con recarga automática y proyecto open source bajo licencia MIT.',
  tags: ['Node.js', 'JavaScript', 'Discord.js', 'OpenAI API'],
  liveUrl: '',
  repoUrl: 'https://github.com/Nico-Cartes-dev/chat-gpt-for-discord',
  },
  {
  title: 'Proyecto de Minería de Datos: Impacto de la IA en el Mercado Laboral (2010–2025)',
  description:
    'Análisis de minería de datos en Jupyter Notebook sobre un dataset de Kaggle con 5.000 ofertas laborales (2010–2025) y 22 variables sobre salarios, intensidad de uso de IA y riesgo de automatización. Incluye limpieza y exploración de datos, codificación y escalamiento de variables, y el entrenamiento de modelos de clasificación (Random Forest, Árbol de Decisión, Regresión Logística) y regresión lineal, evaluados con F1-score, ROC-AUC, MAE y R². Los modelos supervisados mostraron un poder predictivo limitado, lo que permitió analizar los límites de las variables disponibles. El clustering K-Means (silhouette 0.58) segmentó el mercado en tres grupos: empleos en riesgo, en transición digital e impulsados por IA.',
  tags: ['Python', 'Jupyter Notebook', 'Pandas', 'Scikit-learn', 'K-Means', 'Random Forest'],
  liveUrl: '',
  repoUrl: 'https://github.com/Nico-Cartes-dev/mineria-datos',
  },
  {
  title: 'Cosas Útiles de Desarrollo: toolkit de utilidades en Python',
  description:
    'Colección de scripts reutilizables en Python que automatizan tareas comunes del desarrollo de software. Incluye verificación de integridad de archivos críticos mediante hashes SHA-256, un runner de desarrollo que reinicia la aplicación automáticamente al detectar cambios, pruebas de carga contra APIs HTTP con peticiones concurrentes y reporte de latencia, peticiones por segundo y tasa de error, además de utilidades para SQLite: un seeder que genera miles de registros aleatorios y un analizador que muestra la distribución de datos por tabla en consola.',
  tags: ['Python', 'SQLite', 'Watchdog', 'Testing', 'Automatización'],
  liveUrl: '',
  repoUrl: 'https://github.com/Nico-Cartes-dev/cosas-utiles-de-desarrollo',
  },
  {
  title: 'Integración de Plataformas: ecosistema multitecnología',
  description:
    'Proyecto de integración de plataformas que conecta cinco aplicaciones desarrolladas en distintas tecnologías: una API REST en Flask, un servicio en Spring Boot, una aplicación web en Django, un módulo de bodega en C# y un módulo de ventas en Java. Demuestra el diseño de una arquitectura heterogénea donde sistemas independientes se comunican entre sí para cubrir procesos de negocio como la gestión de bodega y las ventas.',
  tags: ['Java', 'Spring Boot', 'Python', 'Django', 'Flask', 'C#'],
  liveUrl: '',
  repoUrl: 'https://github.com/Nico-Cartes-dev/int-plataforma-final',
  },

]
