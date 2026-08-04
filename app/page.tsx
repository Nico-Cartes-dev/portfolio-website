import { SiteNav } from '@/components/site-nav'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ProjectsSection } from '@/components/projects-section'
import { ContactSection } from '@/components/contact-section'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <HeroSection />
        <div className="mx-auto max-w-5xl px-6">
          <hr className="border-border" />
        </div>
        <AboutSection />
        <div className="mx-auto max-w-5xl px-6">
          <hr className="border-border" />
        </div>
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <p className="font-mono">{'© '}{new Date().getFullYear()} Nicolás Cartes</p>
          <p>Construido con Next.js &amp; Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}
