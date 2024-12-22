import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Scrollbar from './sections/Scrollbar'

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <Scrollbar />
    </main>
  )
}

export default App
