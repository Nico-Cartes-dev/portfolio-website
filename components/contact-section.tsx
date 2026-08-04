'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

export function ContactSection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('nicolas.cartesg@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16 sm:py-24">
      <div className="rounded-lg border border-border bg-card p-8 sm:p-12">
        <p className="font-mono text-sm text-primary">{'// contacto'}</p>
        <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Construyamos algo juntos
        </h2>
        <p className="mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
          Si tienes un proyecto en mente o simplemente quieres conversar, estaré
          feliz de conectar.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {copied ? 'Correo copiado' : 'nicolas.cartesg@gmail.com'}
          </button>
          <Button
            nativeButton={false}
            variant="outline"
            render={<a href="https://github.com/Nico-Cartes-dev" />}
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </Button>
          <Button
            nativeButton={false}
            variant="outline"
            render={<a href="https://www.linkedin.com/in/nicolas-cartes-gonzalez-601a31292/" />}
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  )
}
