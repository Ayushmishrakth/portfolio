import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience' // ✅ new import
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Top Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex-1">
        <Hero />
      </section>

      {/* About Me Section */}
      <section>
        <About />
      </section>

      {/* Experience Section */}
      <section>
        <Experience />
      </section>

      {/* Skills Section */}
      <section>
        <Skills />
      </section>

      {/* Projects Section */}
      <section>
        <Projects />
      </section>
    </main>
  )
}
