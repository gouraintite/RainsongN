"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, X, ExternalLink, ChevronRight } from "lucide-react"

interface Experience {
  title: string
  company: string
  location: string
  period: string
  type: "work" | "internship"
  description: string
  technologies: string[]
  logo: string
  detailedDescription: string
  achievements: string[]
  websiteUrl?: string
  projectLinks?: { name: string; url: string }[]
}

export function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const experiences: Experience[] = [
    {
      title: "Développeur Logiciel",
      company: "Level 5 Fleet",
      location: "Canada (Remote)",
      period: "Jan 2025 - Juin 2025",
      type: "work",
      description:
        "Mise en place des canaux de communication (tableaux de bord) pour la gestion de flottes avec des systèmes IoT embarqués.",
      technologies: ["React.js", "TypeScript", "Dashboard Development"],
      logo: "/logos/l5.png",
      detailedDescription:
        "Level5fleet est une société qui permet de sécuriser des engins (tracteurs, containers, camions, etc.) à distance et de contrôler des flottes grâce à des systèmes IOT embarqués. Mon travail consiste à mettre en place les canaux de communication (tableaux de bord permettant aux utilisateurs de gérer efficacement leur matériel) en respectant les figma designs existants.",
      achievements: [
        "Développement de tableaux de bord IoT pour la gestion de flottes",
        "Intégration de systèmes de sécurité à distance",
        "Respect des designs Figma existants",
        "Communication bilingue français/anglais",
      ],
      websiteUrl: "https://level5fleet.com",
    },
    {
      title: "Développeur Front-end",
      company: "CODING INDUSTRY",
      location: "Cameroun (Remote)",
      period: "2021-2023",
      type: "work",
      description:
        "Principal développeur front-end, création de MAULOTO (site d'annonces automobiles). Approfondissement des connaissances Next.js et TanStack.",
      technologies: ["Next.js", "TanStack", "React.js"],
      logo: "/logos/ci.png",
      detailedDescription:
        "En tant que principal développeur front-end, j'ai été amené à travailler sous pression. J'ai utilisé Next.js et ma fierté a été MAULOTO, un site d'annonces et/ou d'achats de voitures. C'est là que j'ai approfondi mes connaissances sur Next.js et TanStack.",
      achievements: [
        "Développement complet de MAULOTO (plateforme d'annonces automobiles)",
        "Maîtrise avancée de Next.js et TanStack Query",
        "Gestion de projets sous pression",
        "Architecture front-end scalable",
      ],
      projectLinks: [{ name: "MAULOTO", url: "https://mauloto.com" }],
    },
    {
      title: "Développeur Front-end et UX Design",
      company: "ACESY Cameroun",
      location: "Cameroun",
      period: "Jan - Jun 2022",
      type: "internship",
      description:
        "Amélioration de sites web existants avec React.js, conception d'interfaces UX avec Figma, travail en équipe avec méthodologie SCRUM.",
      technologies: ["React.js", "Figma", "UX Design", "SCRUM"],
      logo: "/logos/acesy.png",
      detailedDescription:
        "Au cours de ce stage, j'ai amélioré des sites web existants en utilisant React.js. J'ai également conçu des interfaces utilisateur UX avec Figma, en veillant à ce qu'elles soient toutes deux intuitives. En outre, j'ai acquis une expérience précieuse en travaillant dans un environnement d'équipe collaboratif en appliquant les techniques de gestion de projet SCRUM.",
      achievements: [
        "Amélioration de sites web existants avec React.js",
        "Conception d'interfaces UX intuitives avec Figma",
        "Application de la méthodologie SCRUM",
        "Travail collaboratif en équipe",
      ],
    },
    {
      title: "Stage en Front-end",
      company: "LOHCE",
      location: "Cameroun",
      period: "Avr - Mai 2022",
      type: "internship",
      description:
        "Conception d'un chatbot 'Sophie' pour faciliter l'achat de billets de voyage, travail collaboratif avec équipe répartie.",
      technologies: ["Chatbot Development", "JavaScript", "Team Collaboration"],
      logo: "/logos/lohce.png",
      detailedDescription:
        "Avec 10 stagiaires répartis dans 3 villes du Cameroun et le coordinateur basé en France, notre objectif était de concevoir un chatbot 'Sophie' qui faciliterait le processus d'achat d'un billet de voyage. Ce projet m'a permis de développer mes compétences en développement collaboratif à distance.",
      achievements: [
        "Développement du chatbot 'Sophie' pour l'achat de billets",
        "Collaboration avec équipe distribuée (3 villes + France)",
        "Gestion de projet à distance",
        "Amélioration des processus d'achat en ligne",
      ],
    },
  ]

  const openDrawer = (experience: Experience) => {
    setSelectedExperience(experience)
    setIsDrawerOpen(true)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
    setTimeout(() => setSelectedExperience(null), 300)
  }

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-foreground mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey as a software developer across different companies and projects
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="animate-fade-in-up hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover:border-primary/20 group cursor-pointer"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-background border group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={exp.logo || "/placeholder.svg"}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="font-sans text-xl group-hover:text-primary transition-colors duration-300">
                          {exp.title}
                        </CardTitle>
                        <Badge
                          variant={exp.type === "internship" ? "secondary" : "default"}
                          className={`text-xs ${
                            exp.type === "internship"
                              ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                              : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          }`}
                        >
                          {exp.type === "internship" ? "Internship" : "Work"}
                        </Badge>
                      </div>
                      <p className="text-lg font-medium text-primary">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="group-hover:border-primary/50 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openDrawer(exp)}
                    className="group/btn hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary-foreground dark:hover:text-primary transition-all duration-300"
                  >
                    More
                    <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div className="flex-1 bg-black/50 backdrop-blur-sm" onClick={closeDrawer} />

          {/* Drawer */}
          <div
            className={`w-full max-w-2xl bg-background border-l shadow-2xl transform transition-transform duration-300 ease-out ${
              isDrawerOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {selectedExperience && (
              <div className="h-full overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-background border">
                      <img
                        src={selectedExperience.logo || "/placeholder.svg"}
                        alt={`${selectedExperience.company} logo`}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-sans">{selectedExperience.title}</h3>
                      <p className="text-primary font-medium">{selectedExperience.company}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={closeDrawer}
                    className="hover:bg-destructive/10 hover:text-destructive"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-8">
                  {/* Basic Info */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {selectedExperience.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {selectedExperience.location}
                      </div>
                      <Badge
                        variant={selectedExperience.type === "internship" ? "secondary" : "default"}
                        className={`text-xs ${
                          selectedExperience.type === "internship"
                            ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                            : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        }`}
                      >
                        {selectedExperience.type === "internship" ? "Internship" : "Work"}
                      </Badge>
                    </div>
                  </div>

                  {/* Detailed Description */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold font-sans">About the Role</h4>
                    <p className="text-muted-foreground leading-relaxed">{selectedExperience.detailedDescription}</p>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold font-sans">Key Achievements</h4>
                    <ul className="space-y-2">
                      {selectedExperience.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold font-sans">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedExperience.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  {(selectedExperience.websiteUrl || selectedExperience.projectLinks) && (
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold font-sans">Links</h4>
                      <div className="space-y-2">
                        {selectedExperience.websiteUrl && (
                          <a
                            href={selectedExperience.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Company Website
                          </a>
                        )}
                        {selectedExperience.projectLinks?.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            {link.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
