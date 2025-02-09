import React from 'react'
import './Navbar.css'
import Logo from '../../assets/ATKSI-Logo.svg'

const Navbar = () => {
    return (
        <>
            <nav className='container'>
                <div className='logo-section'>
                    <img className='logo' src={Logo} alt='atksi-logo' />
                    <span>ALAN THILAK KARATE SCHOOL <br /> INTERNATIONAL - PAYYANNUR</span>
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Branches</li>
                    <li>Socials</li>
                    <li><button className='btn'>Contact</button></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar