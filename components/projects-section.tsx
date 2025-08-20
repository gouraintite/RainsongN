"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "MAULOTO",
      description:
        "Site d'annonces et d'achats de voitures développé avec Next.js. Plateforme complète pour la vente et l'achat de véhicules.",
      image: "/car-marketplace.png",
      technologies: ["Next.js", "React.js", "TanStack", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Alouer Platform",
      description:
        "Plateforme de location développée pour Yaknema SARL. Interface moderne et responsive pour la gestion des locations.",
      image: "/rental-platform-website.png",
      technologies: ["React.js", "JavaScript", "CSS", "Responsive Design"],
      liveUrl: "https://alouer.yaknema.com/fr/",
      githubUrl: "#",
    },
    {
      title: "Avendre Platform",
      description: "Site de vente en ligne avec interface utilisateur optimisée et expérience d'achat fluide.",
      image: "/ecommerce-website-homepage.png",
      technologies: ["React.js", "JavaScript", "HTML/CSS", "UX Design"],
      liveUrl: "https://avendre.yaknema.com/",
      githubUrl: "#",
    },
    {
      title: "Sophie Chatbot",
      description:
        "Chatbot intelligent pour faciliter l'achat de billets de voyage. Développé en collaboration avec une équipe internationale.",
      image: "/travel-chatbot-interface.png",
      technologies: ["JavaScript", "Chatbot API", "UI/UX", "Team Collaboration"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and contributions to various projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="animate-fade-in-up hover:shadow-lg transition-all duration-300 group">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              <CardHeader>
                <CardTitle className="font-sans text-xl">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
