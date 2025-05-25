"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Building an online multiplayer video chat snake & ladder game.",
    description:
      "In this blog i have described my approach for desiging my project venomous and its architecture.",
    image: "/venomous_blog.png",
    date: "4 Feb 2025",
    tags: ["Websockets", "webrtc", "Architecture"],
    readTime: "4 min read",
    url: "https://sharma-akash.hashnode.dev/venomous"
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
                    {post.date}
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
                  <Link href={post.url} target="blank">
                    <Button variant="ghost" className="gap-2 p-0">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="https://sharma-akash.hashnode.dev/" target="blank">
            <Button variant="outline" size="lg">
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
