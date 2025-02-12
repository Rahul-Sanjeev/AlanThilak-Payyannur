import { useState, useEffect } from 'react'
import { Link } from 'react-scroll';
import './Hero.css'
import down_arrow from '../../assets/down_arrow.png'

// Import your images (adjust paths as needed)
import slide from '../../assets/Hero/slider.jpg'
import slide1 from '../../assets/Hero/slider1.jpg'
import slide2 from '../../assets/Hero/slider2.jpg'
import slide3 from '../../assets/Hero/slider3.jpg'
import slide4 from '../../assets/Hero/slider4.jpg'
import slide5 from '../../assets/Hero/slider5.jpg'
import slide6 from '../../assets/Hero/slider6.jpg'
import slide7 from '../../assets/Hero/slider7.jpg'
import slide8 from '../../assets/Hero/slider8.jpg'
import slide9 from '../../assets/Hero/slider9.jpg'
import slide10 from '../../assets/Hero/slider10.jpg'
import slide11 from '../../assets/Hero/slider11.jpg'

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slides = [slide, slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10, slide11] // Add more images as needed

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % slides.length)
        }, 5000) // Change slide every 5 seconds

        return () => clearInterval(interval)
    }, [slides.length])

    return (
        <>
            <div id='hero' className="hero container">
                {/* Background Slides */}
                <div className="slider-container">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`slide ${index === currentSlide ? 'active' : ''}`}
                            style={{ backgroundImage: `linear-gradient(rgba(8,0,58,0.5), rgba(8, 0, 58, 0.5)), url(${slide})` }}
                        ></div>
                    ))}
                </div>

                {/* Your Content */}
                <div className='hero-text'>
                    <h1>Welcome to Alan Thilak Karate School International Payyanur</h1>
                    <p>Empowering students with discipline, confidence, and world-class karate training. Join us to master the art of self-defense and unlock your true potential</p>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}><button className='btn'> Know More <img src={down_arrow} alt="down_arrow" className='down_arrow' /></button></Link>
                </div>
            </div>
        </>
    )
}

export default Hero