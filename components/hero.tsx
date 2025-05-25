"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, Book } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {


  const handleDownload = () => {
    // Replace 'YOUR_FILE_ID' with the actual File ID from Google Drive
    const fileId = '1AK3k3XsaczHaSIC-nZ0MkUft94m1eWC5';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    window.open(downloadUrl, '_blank');
  };

  return (
    <section
      id="home"
      className="pt-20 pb-16 bg-gradient-to-br from-background via-background to-primary/5 dark:to-primary/10 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto px-4 py-16 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent"
              >
                Hi, I'm <span className="text-primary">Akash Sharma</span>
              </motion.h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">Full Stack Developer & Backend specialist</h2>
              <p className="text-lg text-muted-foreground max-w-lg">
                I create exceptional digital experiences that combine beautiful design with powerful functionality.
                Passionate about building products that make a difference.
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-4">
              <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=akashsharma.cpp@gmail.com" target="blank">
                <Button size="lg" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Get In Touch
                </Button>
              </Link>

              <Button variant="outline" size="lg" className="gap-2" onClick={handleDownload}>
                <Download className="h-4 w-4" />
                Download CV
              </Button>

            </div>

            <div className="flex gap-4">
              <Link href="https://github.com/akash205sharma" target="blank">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/akash-sharma-4b072028b/" target="blank">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://hashnode.com/@Akash205Sharma" target="blank">
                <Button variant="ghost" size="icon">
                  <Book className="h-5 w-5" />
                </Button>
              </Link>


            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center backdrop-blur-sm border border-primary/20">
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  width={316}
                  height={300}
                  className="rounded-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
