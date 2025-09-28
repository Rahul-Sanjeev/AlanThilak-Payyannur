import './Affiliations.css';
import WKFLogo from './Images/WKF.png';
import KKALogo from './Images/KKA.png';
import KOALogo from './Images/KOA.png';
import SKLogo from './Images/Sports Kerala.png';
import KSSCLogo from './Images/Kerala state sports council.png';

const Affiliations = () => {
    const affiliations = [
        { logo: WKFLogo, alt: 'World Karate Federation' },
        { logo: KKALogo, alt: 'Kerala Karate Association' },
        { logo: KOALogo, alt: 'Karate Olympic Association' },
        { logo: SKLogo, alt: 'Sports Kerala' },
        { logo: KSSCLogo, alt: 'Kerala State Sports Council' },
    ];

    return (
        <section id='affiliations' className="affiliations-container">
            <div className="header">
                <h1>Our Affiliations</h1>
            </div>

            <div className="affiliations-marquee">
                <div className="marquee-track">
                    <div className="marquee-content">
                        {affiliations.map((affiliation, index) => (
                            <div className='affiliation-item' key={index}>
                                <img src={affiliation.logo} alt={affiliation.alt} />
                            </div>
                        ))}
                    </div>
                    {/* Exact duplicate */}
                    <div className="marquee-content" aria-hidden="true">
                        {affiliations.map((affiliation, index) => (
                            <div className='affiliation-item' key={`clone-${index}`}>
                                <img src={affiliation.logo} alt={affiliation.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="section-underline"></div>
        </section>
    )
}

export default Affiliations;