import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Stats from './components/Stats'
import Fleet from './components/Fleet'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
import Location from './components/Location'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Fleet />
        <Testimonials />
        <About />
        <Contact />
        <Location />
      </main>
      <Footer />
    </div>
  )
}
