"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Shadcn", level: 85 },
      { name: "CSS/Tailwind", level: 92 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 82 },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "AWS", level: 30 },
      { name: "Docker", level: 45 },
      { name: "Git", level: 75 },
      { name: "CI/CD", level: 25 },
    ],
  },
]

const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Express.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  // "Kubernetes",
  // "GraphQL",
  "REST APIs",
  // "Microservices",
  // "Redis",
  // "Elasticsearch",
  "Jest",
  // "Cypress",
  // "Webpack",
  "Vite",
  "Tailwind CSS",
  "Material-UI",
  "Websockets",
  "webRtc",
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the technologies I work with regularly.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="h-2 bg-primary rounded-full"
                        />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Technologies & Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-sm py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
