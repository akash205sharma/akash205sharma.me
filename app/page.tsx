import Image from "next/image";
import Header from "@/components/header"
import Hero from "@/components/hero";
import Projects from "@/components/projects"
import Resume from "@/components/resume"
import Blog from "@/components/blog"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Hobbies from "@/components/hobbies"
import Footer from "@/components/footer"
import StatsSection from "@/components/stats-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        {/* <StatsSection /> */}
        <Projects />
        <Resume />
        <Blog />
        <Education />
        <Skills />
        <Hobbies />
      </main>
      <Footer />
    </div>
  );
}
