import './Services.css'
import Kata from './Images/kata.jpg'
import Kumite from './Images/kumite.jpg'
import Self_Defense from './Images/self-defense.jpg'

// Services.js component
const Services = () => {
    return (
        <div id='services' className="services-container">
            <div className='header'>
                <h1>Our Services</h1>
            </div>

            <div className='services-grid'>
                <div className='service-card'>
                    <div className="image-container">
                        <img src={Kata} alt='Kata' />
                    </div>
                    <h3>KATA</h3>
                    <p>
                        Katas are choreographed sequences of movements that simulate combat against imaginary opponents.
                        They teach precision, balance, and discipline while preserving traditional techniques.
                        Practicing katas enhances focus, muscle memory, and body control.
                    </p>
                </div>

                <div className='service-card'>
                    <div className="image-container">
                        <img src={Kumite} alt='Kumite' />
                    </div>
                    <h3>KUMITE</h3>
                    <p>
                        Kumite is sparring practice where karate techniques are applied in dynamic, controlled scenarios.
                        It improves reflexes, timing, and adaptability, helping practitioners develop real-world combat skills while fostering discipline and sportsmanship.
                    </p>
                </div>

                <div className='service-card'>
                    <div className="image-container">
                        <img src={Self_Defense} alt='Self Defence' />
                    </div>
                    <h3>SELF DEFENSE</h3>
                    <p>
                        Self-defense in karate emphasizes practical techniques to protect oneself in real-life situations.
                        It focuses on quick reactions, awareness, and effective movements to neutralize threats while building confidence and safety skills.
                    </p>
                </div>
            </div>
            <div className="section-underline"></div>
        </div>
    )
}

export default Services