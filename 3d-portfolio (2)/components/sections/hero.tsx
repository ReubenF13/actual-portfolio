"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { portfolioConfig } from "@/config/portfolio-config"

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        {/* Main heading with gradient text */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          {portfolioConfig.name}
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-4xl font-light mb-4 text-gray-700 dark:text-gray-300">
          {portfolioConfig.title}
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {portfolioConfig.subtitle}
        </p>

        {/* Social links */}
        <div className="flex justify-center gap-4 mb-8">
          <Button variant="outline" size="icon" asChild>
            <a href={portfolioConfig.social.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href={portfolioConfig.social.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href={`mailto:${portfolioConfig.email}`}>
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>

        {/* CTA Button */}
        <Button onClick={scrollToAbout} size="lg" className="group">
          Explore My Work
          <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
    </section>
  )
}
