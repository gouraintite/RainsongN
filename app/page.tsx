import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { ServicesSection } from "@/components/services-section"
import Bg from '../public/Bg-gradient.png'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <main className="min-h-screen" >
        <Header />
        <HeroSection />
        <SkillsSection />
        <ServicesSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />

        <div className="fixed inset-0 z-[-1] rotate-45">
          <Image className="fixed top-0" src={Bg} alt="Description of image" />
        </div>

        {/* Footer */}
        <footer className="bg-muted/30 py-8">
          <div className="container mx-auto px-6 text-center">
            <p className="text-muted-foreground">© 2025 Rainsong Ngoutsop. Made With Care.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}
