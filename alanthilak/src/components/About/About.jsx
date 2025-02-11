import { Link } from 'react-scroll';
import './About.css';
import Founder from './Images/sensei moses thilak.png'; // Add your founder image
import Dojo from './Images/dojo.png'; // Add dojo/class image
import Training from './Images/training.png'; // Add training session image

const About = () => {
    return (
        <section id='about' className="about-section">
            <div className="about-container container">
                <div className="about-header">
                    <h2>About Alan Thilak Karate School</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="about-content">
                    {/* Founder Section */}
                    <div className="founder-section">
                        <div className="founder-image">
                            <img src={Founder} alt="Dai Sensei Moses Thilak" />
                        </div>
                        <div className="founder-details">
                            <h3>Dai Sensei Moses Thilak</h3>
                            <h6>Founder: Alan Thilak Karate School International & Kerala Karate Association</h6>
                            <p className="founder-title">9th Dan Black Belt, International Referee</p>
                            <p className="founder-description">
                                A visionary in martial arts, Dai Sensei Moses Thilak established the Alan Thilak Karate School in 1975. His dedication to preserving traditional Shito-Ryu while adapting it for modern practitioners has made the school a global leader in karate training.
                            </p>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="stats-section">
                        <div className="stat-item">
                            <div className="stat-number">60+</div>
                            <div className="stat-label">Years of Excellence</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">500+</div>
                            <div className="stat-label">National Champions</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">100+</div>
                            <div className="stat-label">Certified Instructors</div>
                        </div>
                    </div>

                    {/* Training Philosophy Section */}
                    <div className="training-section">
                        <div className="training-content">
                            <h3>Our Philosophy</h3>
                            <p>
                                We blend traditional Shito-Ryu techniques with modern sports science to create a safe, effective training environment. Our unique Shito-Ryu style combines:
                            </p>
                            <ul>
                                <li>Precision of Shorei traditions</li>
                                <li>Speed of Shorin techniques</li>
                                <li>Practical self-defense strategies</li>
                                <li>Sports karate fundamentals</li>
                            </ul>
                        </div>
                        <div className="training-image">
                            <img src={Training} alt="Karate Training" />
                        </div>
                    </div>

                    {/* Global Recognition Section */}
                    <div className="global-section">
                        <div className="global-image">
                            <img src={Dojo} alt="Karate Dojo" />
                        </div>
                        <div className="global-content">
                            <h3>Global Recognition</h3>
                            <p>
                                Recognized by World Karate Federation (WKF) and Asian Karate Federation (AKF), our instructors regularly participate in international tournaments and seminars. We maintain strong partnerships with martial arts masters from Japan, USA, and Australia.
                            </p>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="cta-section">
                        <p>Learn more about our <a href="#leadership" className="cta-link">leadership team</a>.</p>
                        <button className="cta-button"><Link activeClass="active" to="socials" spy={true} smooth={true} offset={-70} duration={500}>Join Our Legacy</Link></button>
                    </div>
                </div>
            </div>
            <div className="section-underline"></div>

        </section>
    );
};

export default About;