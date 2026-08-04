import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { projects } from '@/lib/projects'

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16 sm:py-24">
      <div className="mb-10">
        <p className="font-mono text-sm text-primary">{'// proyectos'}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">Proyectos destacados</h2>
        <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Algunos proyectos que reflejan mi enfoque por la automatización, la gestión
          y la construcción de soluciones útiles.
        </p>
      </div>

      <ul className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.title}
            className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
              <div className="flex items-center gap-3 text-muted-foreground">
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    aria-label={`${project.title} source code`}
                    className="transition-colors hover:text-primary"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </a>
                ) : null}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    aria-label={`${project.title} live demo`}
                    className="transition-colors hover:text-primary"
                  >
                    <ExternalLink className="h-5 w-5" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </div>
            <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
