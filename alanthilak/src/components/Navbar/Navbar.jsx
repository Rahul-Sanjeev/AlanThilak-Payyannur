// Navbar.jsx
import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import Logo from '../../assets/ATKSI-Logo.svg';

const Navbar = () => {
    return (
        <nav className="container">
            <div className="logo-section">
                <img className="logo" src={Logo} alt="atksi-logo" />
                <span>
                    ALAN THILAK KARATE SCHOOL <br /> INTERNATIONAL - PAYYANUR
                </span>
            </div>
            <ul>
                <li>
                    <Link activeClass="active" to="hero" spy={true} smooth={true} offset={-70} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="affiliations" spy={true} smooth={true} offset={-70} duration={500}>
                        Affiliations
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="services" spy={true} smooth={true} offset={-70} duration={500}>
                        Services
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="socials" spy={true} smooth={true} offset={-70} duration={500}>
                        Socials
                    </Link>
                </li>

                <li>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                        <button className="btn">Contact</button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
