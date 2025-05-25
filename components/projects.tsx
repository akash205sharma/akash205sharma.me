"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      title: "NoteBrain — A GitHub-Integrated Markdown Text-Editing App for Developers",
      description:
      "A modern text-editing app with GitHub integration, code editor and VS Code–like file structure. Enables users to create, save, and manage notes and codes snippets securely in their GitHub repositories.",
      image: "/Notebrain_logo.png",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      liveUrl: "https://notebrain.vercel.app/",
      githubUrl: "https://github.com/akash205sharma/NoteBrain",
    },
    {
      id: "2",
      title: "Venomous-Realtime Multiplayer game with Video & Chat",
      description:"real-time multiplayer web game with integrated video calling, live chat, and team-based room management. Built for fun, strategy, and social interaction using WebSockets, WebRTC.",
      // "An online multiplayer snake&Ladder game with realtime video & chatting support with room management for each team",
      image: "/venomous_logo.png",
      technologies: ["MERN", "Socket.io", "webrtc", "iceServers"],
      liveUrl: "https://venomous-three.vercel.app/",
      githubUrl: "https://github.com/akash205sharma/venomous",
    },
    {
      id: "3",
      title: "ShopEasy - E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with cart management, inventory management, and admin dashboard.",
      image: "/shopeasy_logo.png",
      technologies: ["Nextjs","Node.js", "MongoDB", "cloudinary" ],
      liveUrl: "https://shopeasy-akash205sharma-akash205sharmas-projects.vercel.app/",
      githubUrl: "https://github.com/akash205sharma/ShopEasy",
    },
    
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    technologies: "",
    liveUrl: "",
    githubUrl: "",
  })

  const handleAddProject = () => {
    const project: Project = {
      id: Date.now().toString(),
      title: newProject.title,
      description: newProject.description,
      image: "/placeholder.svg?height=200&width=400",
      technologies: newProject.technologies.split(",").map((tech) => tech.trim()),
      liveUrl: newProject.liveUrl || undefined,
      githubUrl: newProject.githubUrl || undefined,
    }

    setProjects([...projects, project])
    setNewProject({ title: "", description: "", technologies: "", liveUrl: "", githubUrl: "" })
    setIsDialogOpen(false)
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="projects"
      className="py-16 bg-gradient-to-br from-muted/20 via-background to-muted/10"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <div className="aspect-video relative overflow-hidden">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <Button variant="ghost" size="icon" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button variant="ghost" size="icon" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
{/* Add New Project */}
        {/* <div className="text-center">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="gap-2">
                <Plus className="h-4 w-4" />
                Add New Project
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Project</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Project Title</Label>
                  <Input
                    id="title"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="technologies">Technologies (comma-separated)</Label>
                  <Input
                    id="technologies"
                    value={newProject.technologies}
                    onChange={(e) => setNewProject({ ...newProject, technologies: e.target.value })}
                    placeholder="React, Node.js, MongoDB"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="liveUrl">Live URL (optional)</Label>
                  <Input
                    id="liveUrl"
                    value={newProject.liveUrl}
                    onChange={(e) => setNewProject({ ...newProject, liveUrl: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="githubUrl">GitHub URL (optional)</Label>
                  <Input
                    id="githubUrl"
                    value={newProject.githubUrl}
                    onChange={(e) => setNewProject({ ...newProject, githubUrl: e.target.value })}
                  />
                </div>
              </div>
              <Button onClick={handleAddProject} className="w-full">
                Add Project
              </Button>
            </DialogContent>
          </Dialog>
        </div> */}
      </div>
    </motion.section>
  )
}
