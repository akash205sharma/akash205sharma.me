"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"
import { motion } from "framer-motion"

export default function Resume() {
  const handleDownload = () => {
    // In a real application, this would download the actual resume file
    const link = document.createElement("a")
    link.href = "/resume.pdf" // This would be your actual resume file
    link.download = "John_Doe_Resume.pdf"
    link.click()
  }

  const handleView = () => {
    // In a real application, this would open the resume in a new tab
    window.open("/resume.pdf", "_blank")
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="resume"
      className="py-16 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download or view my complete resume with detailed work experience, education, and skills.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">John Doe - Full Stack Developer</CardTitle>
              <CardDescription>
                Experienced developer with 5+ years in web development, specializing in React, Node.js, and cloud
                technologies.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Professional Experience</h3>
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0 * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-2 border-primary pl-4 relative"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 0 * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"
                    />
                    <h4 className="font-semibold">Senior Full Stack Developer</h4>
                    <p className="text-muted-foreground">TechCorp Inc. • 2022 - Present</p>
                    <p className="mt-2">
                      Led development of scalable web applications serving 100k+ users. Implemented microservices
                      architecture and improved system performance by 40%.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1 * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-2 border-primary pl-4 relative"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 1 * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"
                    />
                    <h4 className="font-semibold">Frontend Developer</h4>
                    <p className="text-muted-foreground">StartupXYZ • 2020 - 2022</p>
                    <p className="mt-2">
                      Built responsive web applications using React and TypeScript. Collaborated with design team to
                      implement pixel-perfect UI components.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 2 * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-2 border-primary pl-4 relative"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 2 * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"
                    />
                    <h4 className="font-semibold">Junior Developer</h4>
                    <p className="text-muted-foreground">WebSolutions Ltd. • 2019 - 2020</p>
                    <p className="mt-2">
                      Developed and maintained client websites using modern web technologies. Gained experience in
                      full-stack development and agile methodologies.
                    </p>
                  </motion.div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Key Achievements</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Increased application performance by 40% through code optimization</li>
                  <li>Led a team of 5 developers on a major product redesign</li>
                  <li>Implemented CI/CD pipeline reducing deployment time by 60%</li>
                  <li>Mentored 3 junior developers and conducted technical interviews</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button onClick={handleView} variant="outline" className="gap-2">
                  <Eye className="h-4 w-4" />
                  View Resume
                </Button>
                <Button onClick={handleDownload} className="gap-2">
                  <Download className="h-4 w-4" />
                  Download PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  )
}
