import React from 'react'
import './Affiliations.css'
import WKFLogo from './Images/WKF.png'
import KKALogo from './Images/KKA.png'
import KOALogo from './Images/KOA.png'
import SKLogo from './Images/Sports Kerala.jpg'
import KSSCLogo from './Images/Kerala state sports council.png'

const Affiliations = () => {
    return (
        <section id='affiliations' className="affiliations-container">
            <div className="affiliations-header">
                <h1>Affiliations</h1>
            </div>

            <div className="affiliations-grid">
                <div className='affiliation-item'>
                    <img src={WKFLogo} alt='World Karate Federation' />
                </div>
                <div className='affiliation-item'>
                    <img src={KKALogo} alt='Kerala Karate Association' />
                </div>
                <div className='affiliation-item'>
                    <img src={KOALogo} alt='Karate Olympic Association' />
                </div>
                <div className='affiliation-item'>
                    <img src={SKLogo} alt='Sports Kerala' />
                </div>
                <div className='affiliation-item'>
                    <img src={KSSCLogo} alt='Kerala State Sports Council' />
                </div>
            </div>
            <div className="section-underline"></div>

        </section>
    )
}

export default Affiliations