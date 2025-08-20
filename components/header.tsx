"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

export function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-auto h-auto rounded-full flex items-center justify-center">
              <Image
                  src="/logo.png"
                  alt="Ryan Ganger"
                  width={600}
                  height={300}
                  className="w-full h-full object-cover"
                  priority
                              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center space-x-4 transition-colors duration-200">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-9 h-9"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
