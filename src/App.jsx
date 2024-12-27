import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Scrollbar from './sections/Scrollbar'
import About from './sections/About'
import Quote from './sections/Quote'
import Experiences from './sections/Experiences'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <Scrollbar />
      <About />
      <Quote />
      <Experiences />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
