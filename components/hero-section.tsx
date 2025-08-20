"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-auto flex items-center justify-center pt-44 pb-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold font-sans text-foreground">
                Hi, I'm <span className="text-primary ">Rainsong <span className="text-transparent bg-clip-text bg-gradient-to-br from-35% from-primary to-65% to-gray-900 dark:to-foreground">Ngoutsop</span></span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">Software Engineer</h2>
              <p className="text-lg text-foreground max-w-2xl leading-relaxed">
                I am a software developer with over four years of experience in building interactive websites.
                I enjoy working in a team, solving problems, and constantly finding ways to grow and learn.
                I am a software developer with over four years of experience in building interactive websites.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover-effect hover:bg-primary/90 text-primary-foreground px-6 py-3 cursor-pointer"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
              <Link href="/docs/Rainsong_NGOUTSOP.pdf" download='CV_Rainsong_Ngoutsop' target="_blank">
                <Button variant="outline" className="px-6 py-3 bg-background hover-effect hover:text-primary cursor-pointer">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
                <Link href="https://github.com/gouraintite" target="_blank">
                  <Button variant="link" size="icon" className="w-10 h-10 hover:bg-primary/20 hover:text-foreground cursor-pointer">
                    <Github className="w-5 h-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>

              <Link href="https://www.linkedin.com/in/rainsong-ngoutsop-25421a215/" target="_blank">
                <Button variant="link" size="icon" className="w-10 h-10 hover:bg-primary/20 hover:text-foreground cursor-pointer">
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://x.com/devhunter254" target="_blank">
                <Button variant="link" size="icon" className="w-10 h-10 hover:bg-primary/20 hover:text-foreground cursor-pointer">
                  <X className="w-5 h-5" />
                  <span className="sr-only">X</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border-4 border-primary/20 animate-float">
                <Image
                  src="/professional-developer-portrait.jpg"
                  alt="Rainsong Ngoutsop"
                  width={400}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/10 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
