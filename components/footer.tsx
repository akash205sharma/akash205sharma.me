import { Button } from "@/components/ui/button"
import { Book, Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Akash Sharma</h3>
            <p className="text-muted-foreground mb-4">
              Full Stack Developer passionate about creating exceptional digital experiences.
            </p>
            <div className="flex gap-2">
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

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#resume" className="hover:text-primary transition-colors">
                  Resume
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>akashsharma.cpp@email.com</li>
              {/* <li>91+ </li> */}
              <li>UP, India</li>
              <li>Available for freelance</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Akash Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
