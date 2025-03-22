import './Socials.css';
import { FaFacebook, FaInstagram, FaPhone, FaYoutube } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";


const Socials = () => {
    return (
        <section id="socials" className="socials-section">
            <div className="socials-container header container">
                <h1>Connect With Us</h1>
                <p className="section-subtitle">Let's keep in touch and learn more about our dojo.</p>

                <div className="social-icons">
                    <a href="tel:+919526152158" target="_blank" rel="noopener noreferrer" className="social-link">
                        <BsFillTelephoneFill className="social-icon" />
                        <span>Phone</span>
                    </a>
                    <a href="mailto:alanthilakpayyanur@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">
                        <SiGmail className="social-icon" />
                        <span>Mail</span>
                    </a>
                </div>

                <p className="section-subtitle">Follow us on social media for updates, events, and more!</p>

                <div className="social-icons">
                    <a href="https://www.facebook.com/profile.php?id=100064041067943" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaFacebook className="social-icon" />
                        <span>Facebook</span>
                    </a>
                    <a href="https://www.instagram.com/alanthilakpayyanur/" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaInstagram className="social-icon" />
                        <span>Instagram</span>
                    </a>
                    <a href="https://www.youtube.com/@alanthilakkarateteampayyan9006" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaYoutube className="social-icon" />
                        <span>YouTube</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Socials;