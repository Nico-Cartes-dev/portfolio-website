export type Project = {
  title: string
  description: string
  tags: string[]
  /** Live demo URL. Leave as "" to hide the link. */
  liveUrl: string
  /** Source code URL. Leave as "" to hide the link. */
  repoUrl: string
}

/**
 * Edit this list to add, remove, or update your projects.
 * Each project shows up as a card in the Projects section.
 */
export const projects: Project[] = [
  {
    title: 'Sistema de Gestión para Taller de Bicicletas',
    description:
      'Solución que digitalizó la atención del taller, permitiendo gestionar clientes, órdenes de trabajo e inventario de forma centralizada y eficiente.',
    tags: ['Electron', 'React', 'Flask', 'SQLite'],
    liveUrl: '',
    repoUrl: '',
  },
  {
    title: 'Bot para Recursos Humanos – Verisure',
    description:
      'Automatización de procesos de RRHH mediante Microsoft 365, Copilot y Power BI.',
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
    repoUrl: '',
  },
]
