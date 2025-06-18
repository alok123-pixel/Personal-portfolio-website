import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Footer from './component/Footer'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <section id='home'>
      <Home/>
     </section>
     <About/>
     <Projects/>
     <Skills/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
