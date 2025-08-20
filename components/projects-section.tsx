"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function ProjectsSection() {
  const projects = [
    {
      title: "ADMIRAL AI",
      description:
        "This is a project I worked on as a Frontend Engineer at Admiral AI, where I developed a user-friendly interface for managing AI models and data.",
      image: "/l5.png",
      technologies: ["React.js", "TanStack", "TypeScript"],
      liveUrl: "https://fa-preprod.l5fleet.com/login?from=https://fleetai-preprod.l5fleet.com/fleet-chat",
      githubUrl: "#",
    },
    {
      title: "TRADUCT",
      description:
        "A translation platform I built to help users to learn cameroon mothal tongue wi text and audio with ease.",
      image: "/traduct.png",
      technologies: ["React.js", "JavaScript", "CSS", "Responsive Design"],
      liveUrl: "https://traduct-s8kx-hygj41hqb-rainsongs-projects.vercel.app/",
      githubUrl: "#",
    },
    {
      title: "Hano",
      description: "Template of Product Designer and UI/UX in Tokyo. Available in the RasenganJs framework showcase.",
      image: "/hano.png",
      technologies: ["Rasengan.js", "TypeScript"],
      liveUrl: "https://www.hub.rasengan.dev/preview/rh_saas-hano",
      githubUrl: "#",
    },
    {
      title: "MAULOTO",
      description:
        "Car rental platform I built to help users to rent cars with ease.",
      image: "/mauloto.png",
      technologies: ["Nextjs", "TypeScript", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and contributions to various projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="animate-fade-in-up hover:shadow-lg transition-all duration-300 group pt-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={400}
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>

              <CardHeader>
                <CardTitle className="font-sans text-xl">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-2">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <Link href={project.liveUrl} target="_blank" className={`flex-1`}>
                      <Button size="sm" disabled={project.liveUrl === "#"} className={`w-full ${project.liveUrl === "#" ? "cursor-not-allowed" : "cursor-pointer"}`}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                  </Link>
                  <Button variant="outline" disabled={project.githubUrl === "#"} size="sm" className={`flex-1 bg-transparent ${project.githubUrl === "#" ? "cursor-not-allowed" : "cursor-pointer"}`}>
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
