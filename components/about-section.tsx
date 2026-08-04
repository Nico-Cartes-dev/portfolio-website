const skills = [
  'Python',
  'Java',
  'SQL',
  'React',
  'Django',
  'Flask',
  'Node.js',
  'Electron',
  'Ionic',
  'PostgreSQL',
  'MySQL',
  'SQLite',
  'Git',
  'Power BI',
  'Microsoft 365',
]

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16 sm:py-24">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="font-mono text-sm text-primary">{'// sobre mí'}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">Sobre mí</h2>
        </div>
        <div className="space-y-5 text-pretty leading-relaxed text-muted-foreground">
          <p>
            Soy estudiante de Ingeniería Informática próximo a finalizar la carrera
            y busco desarrollar mi práctica profesional. Cuento con experiencia
            construyendo aplicaciones Full Stack con React, Python y bases de datos
            relacionales, aplicando estos conocimientos en proyectos reales de
            gestión y automatización.
          </p>
          <p>
            Destaco por mi capacidad de aprendizaje continuo, adaptabilidad y
            trabajo colaborativo en equipo, siempre enfocado en entregar soluciones
            útiles, escalables y bien estructuradas.
          </p>
          <div className="pt-2">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
              Herramientas y tecnologías
            </h3>
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-border bg-card px-3 py-1 font-mono text-xs text-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
