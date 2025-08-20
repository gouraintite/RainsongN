"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Palette, Settings } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Website Development",
      description:
        "Transform your business by creating a website for your company using modern technologies like React.js, Next.js, and TypeScript.",
      features: ["Responsive Design", "SEO Optimization", "Performance Focused", "Modern UI/UX"],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description:
        "Do you have an idea for a mobile application? I can help you make it a reality with React Native and modern mobile technologies.",
      features: ["Cross-Platform", "Native Performance", "App Store Ready", "User-Friendly Interface"],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "Create beautiful and intuitive user interfaces with Figma, ensuring your users have the best experience possible.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Consulting",
      description:
        "Need help with your project? I can help you with development, system design, and technical guidance to achieve your goals.",
      features: ["Technical Architecture", "Code Review", "Performance Optimization", "Best Practices"],
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-foreground mb-4">Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What I can help you build and achieve with modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-primary/20 cursor-pointer"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="font-sans text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 group-hover:bg-primary transition-colors duration-300"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
