"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to work together? Let's connect and discuss your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-bold font-sans mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I am always open to new opportunities and collaborations. Please feel free to contact me to discuss your projects or simply to exchange ideas.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">ngoutsoprainsong@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-muted-foreground"> Ngoutsop Rainsong</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Twitter className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Twitter</p>
                  <p className="text-muted-foreground">@devhunter254</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-muted-foreground">github.com/gouraintite</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up">
            <Card className="relative overflow-hidden border-2 border-dashed border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader className="text-center">
                <CardTitle className="font-sans text-2xl">Ready to Collaborate?</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-primary/10 rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full animate-ping animation-delay-1000"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/30 rounded-full animate-bounce animation-delay-2000"></div>
                  </div>

                  <div className="relative z-10 py-16">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-xl font-semibold mb-2">Let's Build Something Amazing</h3>
                    <p className="text-muted-foreground">
                      Reach out through any of the channels on the left to start our conversation.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-primary rounded-full animate-bounce animation-delay-200"></div>
                  <div className="w-3 h-3 bg-primary rounded-full animate-bounce animation-delay-400"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
