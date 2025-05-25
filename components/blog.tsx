"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    description:
      "Learn best practices for structuring large React applications with proper state management and component architecture.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2024-01-15",
    tags: ["React", "JavaScript", "Architecture"],
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "The Future of Web Development",
    description:
      "Exploring emerging trends in web development including AI integration, edge computing, and modern frameworks.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2024-01-10",
    tags: ["Web Development", "Trends", "AI"],
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Optimizing Database Performance",
    description:
      "Techniques for improving database query performance and scaling strategies for high-traffic applications.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2024-01-05",
    tags: ["Database", "Performance", "SQL"],
    readTime: "10 min read",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on web development, technology trends, and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-0">
                <div className="aspect-video relative overflow-hidden">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString()}
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="gap-2 p-0">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  )
}
