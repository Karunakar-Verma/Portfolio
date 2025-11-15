import React from 'react'
import Navbar from '../Components/Navbar'
import Home from '../Components/Home'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Contact from '../Components/Contact'
import Projects from '../Components/Projects'


const App = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default App