import Header from '@/components/header'
import Footer from '@/components/footer'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import ProjectsSection from '@/components/projects-section'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  )
}
