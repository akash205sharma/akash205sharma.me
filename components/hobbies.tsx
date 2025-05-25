"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Music, Plane, Code, Book, Gamepad2 } from "lucide-react"
import { motion } from "framer-motion"

const hobbies = [
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing moments and exploring creative composition through landscape and street photography.",
    details: "I enjoy weekend photography trips and have been featured in local exhibitions.",
  },
  {
    icon: Music,
    title: "Music Production",
    description: "Creating electronic music and experimenting with sound design using modern DAW software.",
    details: "Released several tracks on SoundCloud and collaborate with local artists.",
  },
  {
    icon: Plane,
    title: "Travel",
    description: "Exploring different cultures and cuisines while working remotely from various locations.",
    details: "Visited 25+ countries and love documenting my experiences through photography.",
  },
  {
    icon: Code,
    title: "Open Source",
    description: "Contributing to open source projects and building tools that help the developer community.",
    details: "Active contributor on GitHub with 50+ repositories and 1000+ stars.",
  },
  {
    icon: Book,
    title: "Reading",
    description: "Passionate about technology books, science fiction, and personal development literature.",
    details: "Read 30+ books annually and maintain a tech blog reviewing latest publications.",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    description: "Enjoying strategy games and indie titles, with interest in game development mechanics.",
    details: "Currently learning Unity and working on a small indie game project.",
  },
]

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hobbies & Interests</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond coding, I pursue various interests that keep me creative, inspired, and balanced.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => {
            const IconComponent = hobby.icon
            return (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-0">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                      >
                        <IconComponent className="h-6 w-6 text-primary" />
                      </motion.div>
                      <CardTitle className="text-xl">{hobby.title}</CardTitle>
                    </div>
                    <CardDescription>{hobby.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{hobby.details}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
