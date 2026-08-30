import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Contact from "./components/Contact"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
    </>
  )
}

export default App