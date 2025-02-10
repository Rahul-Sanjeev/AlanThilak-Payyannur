import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import About from './components/About/About'
import Affiliations from './components/Affiliations/Affiliations'

const App = () => {
    return (
        <div>

            <Navbar />
            <Hero />
            <About />
            <Affiliations />
            <Services />
        </div>
    )
}

export default App