import './Socials.css';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Socials = () => {
    return (
        <section id="socials" className="socials-section">
            <div className="socials-container container">
                <h2 className="section-title">Connect With Us</h2>
                <p className="section-subtitle">Follow us on social media for updates, events, and more!</p>

                <div className="social-icons">
                    <a href="https://www.instagram.com/alanthilakpayyanur/" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaInstagram className="social-icon" />
                        <span>Instagram</span>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100064041067943" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaFacebook className="social-icon" />
                        <span>Facebook</span>
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