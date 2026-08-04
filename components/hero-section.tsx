'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

export function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 260
      const progress = Math.min(1, window.scrollY / maxScroll)
      setScrollProgress(progress)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const opacity = Math.max(0, 1 - scrollProgress)
  const translateY = -scrollProgress * 32

  return (
    <section
      id="top"
      className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24"
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
        pointerEvents: opacity > 0.05 ? 'auto' : 'none',
      }}
    >
      <p className="mb-4 font-mono text-sm text-primary">{'> _ desarrollador full stack'}</p>
      <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">
        Nicolás Anakin Cartes González
      </h1>
      <p className="mt-3 text-lg font-medium text-primary">
        Desarrollador Full Stack | Estudiante de Ingeniería Informática
      </p>
      <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
        Estudiante de Ingeniería Informática próximo a finalizar la carrera,
        con experiencia en desarrollo Full Stack usando React, Python y bases de
        datos relacionales para proyectos de gestión y automatización.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button nativeButton={false} render={<a href="#projects" />}>
          Ver mis proyectos
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
        <Button nativeButton={false} variant="outline" render={<a href="#contact" />}>
          Contáctame
        </Button>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <a
          href="https://github.com/Nico-Cartes-dev"
          aria-label="GitHub"
          className="text-muted-foreground transition-colors hover:text-primary"
        >
          <GithubIcon className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/"
          aria-label="LinkedIn"
          className="text-muted-foreground transition-colors hover:text-primary"
        >
          <LinkedinIcon className="h-5 w-5" />
        </a>
        <a
          href="mailto:nicolascartes90@gmail.com"
          aria-label="Email"
          className="text-muted-foreground transition-colors hover:text-primary"
        >
          <Mail className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
