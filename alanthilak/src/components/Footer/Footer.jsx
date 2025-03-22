import './Footer.css';
import { Link } from 'react-scroll';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-container container">
                <div className="footer-grid">
                    <div className="footer-about">
                        <h3>Alan Thilak Karate School International</h3>
                        <p>Established in 1975, we are dedicated to teaching authentic Shito-Ryu Karate and fostering discipline, respect, and excellence in our students.</p>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <ul>
                            <li>
                                <FaMapMarkerAlt className="footer-icon" />
                                <span>City Center, Main Road Payyannur, Payyanur, Kannur - 670307 <br /> (Opposite St. Mary Girls High School)</span>
                            </li>
                            <li>
                                <FaPhone className="footer-icon" />
                                <span>+91 9526 152 158</span>
                            </li>
                            <li>
                                <FaEnvelope className="footer-icon" />
                                <span>alanthilakpayyanur@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500} >About Us</Link></li>
                            <li><Link activeClass="active" to="services" spy={true} smooth={true} offset={-70} duration={500} >Services</Link></li>
                            <li><Link activeClass="active" to="branches" spy={true} smooth={true} offset={-70} duration={500} >Branches</Link></li>
                            <li><Link activeClass="active" to="socials" spy={true} smooth={true} offset={-70} duration={500} >Socials</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Alan Thilak Karate School. All rights reserved.</p>
                    <div className="developer-credits">
                        <p>Developed by <strong>Rahul Sanjeev</strong></p>
                        <div className="developer-links">
                            <a href="https://github.com/Rahul-Sanjeev" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="developer-icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/rahulsanjeev/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="developer-icon" />
                            </a>
                            <a href="https://www.instagram.com/rahul._.sanjeev/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="developer-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;