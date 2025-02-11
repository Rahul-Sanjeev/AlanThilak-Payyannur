import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import About from './components/About/About'
import Affiliations from './components/Affiliations/Affiliations'
import Socials from './components/Socials/Socials'
import Footer from './components/Footer/Footer'
import Branches from './components/Branches/Branches'
import Leadership from './components/Leadership/Leadership'
import Gallery from './components/Gallery/Gallery'

const App = () => {
    return (
        <div>

            <Navbar />
            <Hero />
            <About />
            <Leadership />
            <Affiliations />
            <Services />
            <Gallery />
            <Branches />
            <Socials />
            <Footer />
        </div>
    )
}

export default App