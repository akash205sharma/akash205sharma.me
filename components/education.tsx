"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

const education = [
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Indian Institute of Information Technology Bhagalpur",
    year: "2023 - 2027",
    gpa: "8.31/10.0",
    description: "Comprehensive study of DSA, OS, DBMS, OOPs, Networking, Computer Architecture.",
    achievements: [],
  },
  {
    degree: "Senior School Certificate Examination (12th)",
    institution: "Kids Corner Happy Senior Secondary School",
    year: "2021 - 2022",
    gpa: "91.83/100",
    description: "CBSE Pattern Syllabus.",
    achievements: [],
  },
]

// const certifications = [
  // "AWS Certified Solutions Architect",
  // "Google Cloud Professional Developer",
  // "MongoDB Certified Developer",
  // "Certified Kubernetes Administrator",
// ]

export default function Education() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="education"
      className="py-16 bg-gradient-to-br from-background via-muted/10 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional certifications that form the foundation of my expertise.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-start justify-between">
                        <div>
                          <h4 className="text-xl">{edu.degree}</h4>
                          <p className="text-muted-foreground">{edu.institution}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">{edu.year}</p>
                          <p className="text-sm font-medium">{edu.gpa}</p>
                        </div>
                      </CardTitle>
                      <CardDescription>{edu.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement) => (
                          <Badge key={achievement} variant="secondary">
                            <Award className="h-3 w-3 mr-1" />
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

{/* Professional Certifications */}

          {/* <div>
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Professional Certifications</h3>
            </div>
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert) => (
                    <div key={cert} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <Award className="h-5 w-5 text-primary" />
                      <span className="font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div> */}
          
        </div>
      </div>
    </motion.section>
  )
}
