"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Mail, Phone, MapPin } from "lucide-react"
import { roomConfig } from "@/config/room-config"

interface ObjectModalProps {
  isOpen: boolean
  onClose: () => void
  objectType: string | null
}

export function ObjectModal({ isOpen, onClose, objectType }: ObjectModalProps) {
  // Early return if no object type
  if (!objectType) {
    return null
  }

  // Safe access to object data
  const objectData = roomConfig.objects[objectType as keyof typeof roomConfig.objects]

  if (!objectData) {
    return null
  }

  const renderLaptopContent = () => (
    <div className="space-y-4">
      <p className="text-gray-600 dark:text-gray-300">{objectData.description}</p>
      <div className="grid gap-4">
        {objectData.content?.projects?.map((project: any, index: number) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{project.name}</CardTitle>
                <Badge variant={project.status === "Live" ? "default" : "secondary"}>{project.status}</Badge>
              </div>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech?.map((tech: string, techIndex: number) => (
                  <Badge key={techIndex} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <Button variant="outline" size="sm" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </a>
              </Button>
            </CardContent>
          </Card>
        )) || []}
      </div>
    </div>
  )

  const renderBooksContent = () => (
    <div className="space-y-4">
      <p className="text-gray-600 dark:text-gray-300">{objectData.description}</p>
      <div className="grid gap-4">
        {objectData.content?.skills &&
          Object.entries(objectData.content.skills).map(([category, skills]) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle className="text-lg">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {(skills as string[])?.map((skill: string, index: number) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  )) || []}
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  )

  const renderPictureContent = () => (
    <div className="space-y-4">
      <p className="text-gray-600 dark:text-gray-300">{objectData.content?.bio}</p>
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Experience</h4>
        {objectData.content?.experience?.map((exp: any, index: number) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{exp.role}</CardTitle>
              <CardDescription>
                {exp.company} • {exp.period}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                {exp.highlights?.map((highlight: string, hIndex: number) => (
                  <li key={hIndex} className="text-sm text-gray-600 dark:text-gray-300">
                    {highlight}
                  </li>
                )) || []}
              </ul>
            </CardContent>
          </Card>
        )) || []}
      </div>
    </div>
  )

  const renderPlantContent = () => (
    <div className="space-y-4">
      <p className="text-gray-600 dark:text-gray-300">{objectData.description}</p>
      <div className="grid grid-cols-2 gap-2">
        {objectData.content?.interests?.map((interest: string, index: number) => (
          <div key={index} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
            {interest}
          </div>
        )) || []}
      </div>
      {objectData.content?.philosophy && (
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 dark:text-gray-300 italic">{objectData.content.philosophy}</p>
          </CardContent>
        </Card>
      )}
    </div>
  )

  const renderCoffeeContent = () => (
    <div className="space-y-4">
      <p className="text-gray-600 dark:text-gray-300">{objectData.content?.message}</p>

      <div className="grid gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <span>{roomConfig.personal.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-600" />
                <span>{roomConfig.personal.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-purple-600" />
                <span>{roomConfig.personal.location}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <a href={roomConfig.social.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href={roomConfig.social.linkedin} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              LinkedIn
            </a>
          </Button>
        </div>

        <div className="text-sm text-gray-500 space-y-1">
          <p>✅ {objectData.content?.availability}</p>
          <p>⚡ {objectData.content?.response}</p>
        </div>
      </div>
    </div>
  )

  const renderContent = () => {
    try {
      switch (objectType) {
        case "laptop":
          return renderLaptopContent()
        case "books":
          return renderBooksContent()
        case "picture":
          return renderPictureContent()
        case "plant":
          return renderPlantContent()
        case "coffee":
          return renderCoffeeContent()
        default:
          return <p>Content not found</p>
      }
    } catch (error) {
      console.error("Error rendering modal content:", error)
      return (
        <div className="text-center py-8">
          <p className="text-gray-600 dark:text-gray-300">Sorry, there was an error loading this content.</p>
        </div>
      )
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {objectData.title}
          </DialogTitle>
        </DialogHeader>
        {renderContent()}
      </DialogContent>
    </Dialog>
  )
}
