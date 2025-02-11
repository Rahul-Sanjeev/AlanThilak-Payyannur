import './Leadership.css';
import NielThilak from './Images/niel-moses.png'; 
import SunilKumar from './Images/sunil-kumar.png'; 
import Anjana from './Images/anjana.png';
import Anand from './Images/anand-maniyeri.png'

const Leadership = () => {
    return (
        <section id="leadership" className="leadership-section">
            <div className="leadership-container container">
                <h2 className="section-title">Our Leadership</h2>
                <div className="title-underline"></div>
                <p className="section-subtitle">Meet the dedicated team guiding Alan Thilak Karate School to excellence.</p>

                <div className="leadership-grid">
                    {/* Niel Moses Thilak */}
                    <div className="leader-card">
                        <div className="leader-image">
                            <img src={NielThilak} alt="Niel Moses Thilak" />
                        </div>
                        <div className="leader-details">
                            <h3>Niel Moses Thilak</h3>
                            <p className="leader-title">Technical Director</p>
                            <ul className="leader-achievements">
                                <li>6th Dan Black Belt ShitoRyu</li>
                                <li>Technical Director, Alan Thilak Martial Arts Academy</li>
                                <li>Joint Secretary, Karate Association of India (KAI)</li>
                                <li>President, Kerala Karate Association</li>
                                <li>Directing Committee Member, Kobe Osaka India</li>
                                <li>Shihan Thilak Ha ShitoRyu</li>
                            </ul>
                        </div>
                    </div>

                    {/* P. Sunil Kumar */}
                    <div className="leader-card">
                        <div className="leader-image">
                            <img src={SunilKumar} alt="P. Sunil Kumar" />
                        </div>
                        <div className="leader-details">
                            <h3>P. Sunil Kumar</h3>
                            <p className="leader-title">Technical Director</p>
                            <ul className="leader-achievements">
                                <li>7th Dan Black Belt ShitoRyu</li>
                                <li>6th Dan Black Belt WKF</li>
                                <li>WKF Judge</li>
                                <li>Vice President, Kerala Karate Association</li>
                                <li>Directing Committee Member, Kobe Osaka India</li>
                                <li>Hanshi Thilak Ha ShitoRyu</li>
                            </ul>
                        </div>
                    </div>
                    {/* Anjana P Kumar */}
                    <div className="leader-card">
                        <div className="leader-image">
                            <img src={Anjana} alt="Anjana P Kumar" />
                        </div>
                        <div className="leader-details">
                            <h3>Anjana P Kumar</h3>
                            <p className="leader-title">Cheif Instructor</p>
                            <ul className="leader-achievements">
                                <li>5th Dan Black Belt ShitoRyu</li>
                                <li>AKF Coach</li>
                                <li>Vice President, Kerala Karate Association</li>
                                <li>Directing Committee Member, Kobe Osaka India</li>
                                <li>Hanshi Thilak Ha ShitoRyu</li>
                            </ul>
                        </div>
                    </div>
                    {/* Anand Maniyeri */}
                    <div className="leader-card">
                        <div className="leader-image">
                            <img src={Anand} alt="Anand Maniyeri" />
                        </div>
                        <div className="leader-details">
                            <h3>Anand Maniyeri</h3>
                            <p className="leader-title">Team Coach</p>
                            <ul className="leader-achievements">
                                <li>4th Dan Black Belt ShitoRyu</li>
                                <li>KKA Coach</li>
                                <li>Vice President, Kerala Karate Association</li>
                                <li>Directing Committee Member, Kobe Osaka India</li>
                                <li>Hanshi Thilak Ha ShitoRyu</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-underline"></div>
        </section>
    );
};

export default Leadership;