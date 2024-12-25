import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Scrollbar from './sections/Scrollbar'
import About from './sections/About'
import Quote from './sections/Quote'

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <Scrollbar />
      <About />
      <Quote />
    </main>
  )
}

export default App
