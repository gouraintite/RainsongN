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
  type: "work" | "internship" | "internship --> work"
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
      title: "Software Engineer",
      company: "Level 5 Fleet",
      location: "Canada (Remote)",
      period: "Jan 2025 - June 2025",
      type: "work",
      description:
        "Implementation of communication channels (dashboards) for fleet management with embedded IoT systems.",
      technologies: ["React.js", "React Native", "TypeScript",  "Figma", "Embedded(C, python)", "IoT", "BLE", "SCRUM(Jira, confluence, Bitbucket...)", "AWS (Cognito, S3, DynamoDB, cloudwatch...)"],
      logo: "/logos/l5.png",
      detailedDescription:
        "Level5fleet is a company that enables remote security for vehicles (tractors, containers, trucks, etc.) and fleet management using onboard IoT systems. \n\n My work initially consisted of setting up, maintaining, and monitoring communication channels (dashboards) for fleet management with embedded IoT systems. I worked on maintaining and improving the existing system. I then worked on a new service, “Admiral AI,” which aimed to offer users an AI tool specific to the system. I subsequently had to add UI/UX tasks to my responsibilities when the company's lead designer was on leave. After that, I switched completely to mobile with React Native and embedded systems. With a mobile app that communicated directly with ESP-IDF IoT devices, I had to quickly jump in, maintain the existing work, and move it forward, thus becoming the company's Mobile Lead. It wasn't easy to adapt because events were happening so quickly. But I'm proud to have given it my all and to have worked at L5.",
      achievements: [
       "Maintenance of IoT dashboards for fleet management",
        "Embedded systems work with ESP-IDF (C, Python) and BLE (Bluetooth Low Energy)",
        "Leadership in mobile development and team management",
        "Collaboration in a remote team using SCRUM methodologies (Jira, Confluence, Bitbucket, etc.)",
        "Implementation of the front end of an AI service",
        "Management of the Mobile iOS/Android department",
        "Working with physical IoT equipment",
        "Use of the AWS console",
        "Designing UI/UX Figma designs for web and mobile",
        "Communication entirely in English (meetings, oral reports, Confluence, etc.)",
      ],
      websiteUrl: "https://level5fleet.com",
    },
    {
      title: "Front-end Developer",
      company: "CODING INDUSTRY",
      location: "Cameroon (Remote)",
      period: "2021-2023",
      type: "work",
      description:
        "Lead front-end developer, creation of MAULOTO (car classifieds website). Deepened knowledge of Next.js and TanStack.",
      technologies: ["Next.js", "TanStack", "React.js",  "TypeScript",],
      logo: "/logos/ci.png",
      detailedDescription:
        "As the lead front-end developer, I was tasked with working under pressure. I used Next.js and my pride was MAULOTO, a car classifieds website. This is where I deepened my knowledge of Next.js and TanStack.",
      achievements: [
        "Development of MAULOTO through to deployment management (automotive advertising platform)",
        "Advanced mastery of Next.js and TanStack Query",
        "Project management under pressure",
        "Scalable front-end architecture",
      ],
      projectLinks: [{ name: "MAULOTO", url: "https://mauloto.com" }],
    },
    {
      title: "Front-end Developer and UX Design",
      company: "ACESY Cameroon",
      location: "Cameroon",
      period: "Jan - June 2022",
      type: "internship",
      description:
        "Enhancement of existing websites using React.js, UX interface design with Figma, teamwork with SCRUM methodology.",
      technologies: ["React.js", "Figma", "UX Design", "SCRUM"],
      logo: "/logos/acesy.png",
      detailedDescription:
        "During this internship, I improved existing websites using React.js. I also designed UX user interfaces with Figma, ensuring they were both intuitive. Additionally, I gained valuable experience working in a collaborative team environment by applying SCRUM project management techniques.",
      achievements: [
        "Enhancement of existing websites using React.js",
        "Design of intuitive UX interfaces with Figma",
        "Application of SCRUM methodology",
        "Collaborative teamwork",
      ],
    },
    {
      title: "Front-end Developer",
      company: "LOHCE",
      location: "Cameroon",
      period: "April - May 2022",
      type: "internship --> work",
      description:
        "Conception of a chatbot 'Sophie' to facilitate the purchase of travel tickets, collaborative work with a distributed team.",
      technologies: ["Chatbot Development", "JavaScript",  "TypeScript","Team Collaboration"],
      logo: "/logos/lohce.png",
      detailedDescription:
        "With 10 interns spread across 3 cities in Cameroon and the coordinator based in France, our goal was to design a chatbot 'Sophie' that would facilitate the process of purchasing a travel ticket. This project allowed me to develop my skills in collaborative remote development.",
      achievements: [
        "DDevelopment of the chatbot 'Sophie' for purchasing tickets",
        "Collaboration with a distributed team (3 cities + France)",
        "Remote project management",
        "Improvement of online purchasing processes",
      ],
    },
    {
      title: "Front-end Developer",
      company: "YAKNEMA",
      location: "Cameroon",
      period: "July - May 2023",
      type: "internship --> work",
      description:
        "Improved my knowledge of HTML, CSS, JavaScript, Created tailored and responsive products for training.",
      technologies: ["React js", "JavaScript", "Team Collaboration"],
      logo: "/logos/yaknema.png",
      detailedDescription:
        "Learned and worked on ReactJs. Worked on the creation and launch of websites such as: Alouer: (https://alouer.yaknema.com/fr/) Avendre: (https://avendre.yaknema.com/).",
      achievements: [
        "Improved knowledge of HTML, CSS, JavaScript",
        "Created tailored and responsive products for training",
        "Learned and worked on ReactJs",
        "Contributed to the creation and launch of websites",
        "Was in charge of next interns and trainees",
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
                          
                          {exp.type === "internship --> work" ? "Internship --> Work": exp.type === "internship" ? "Internship" : "Work"}
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
                    See More
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
          <div className="flex-1 bg-black/30 backdrop-blur-xs" onClick={closeDrawer} />

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
                        {selectedExperience.type === "internship --> work" ? "Internship --> Work": selectedExperience.type === "internship" ? "Internship" : "Work"}
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
