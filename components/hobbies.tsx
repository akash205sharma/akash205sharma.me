"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Music, Plane, Code, Book, Gamepad2 } from "lucide-react"
import { motion } from "framer-motion"

const hobbies = [
  {
    icon: Plane,
    title: "Travel",
    description: "Exploring different cultures and cuisines while working remotely from various locations.",
    details: "Enjoy Visiting different places in Country and having adventures experiences.",
  },
  {
    icon: Code,
    title: "Open Source",
    description: "Contributing to open source projects and building tools that help the developer community.",
    details: "Active contributor on GitHub with 30+ repositories.",
  },
  {
    icon: Book,
    title: "Reading",
    description: "Passionate about technology books, science fiction, and personal development literature.",
    details: "Read 10+ books annually for keeping to upto date.",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    description: "Enjoying mobile games and puzzles, with interest in game development mechanics.",
    details: "Have built my own online multiplayer game with realtime updates using websockts & webrtc.",
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
