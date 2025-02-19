import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import Logo from '../../assets/ATKSI-Logo.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const lastScrollY = useRef(0);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    // Hide navbar on scroll down, show on scroll up
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY.current && window.scrollY > 50) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
            lastScrollY.current = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`container ${showNavbar ? 'nav-show' : 'nav-hide'}`}>
            <div className="logo-section">
                <img className="logo" src={Logo} alt="atksi-logo" />
                <span>
                    ALAN THILAK KARATE SCHOOL INTERNATIONAL PAYYANUR
                </span>
                {/* Hamburger Icon (only visible on mobile) */}
                <div className="hamburger" onClick={toggleMenu}>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                </div>
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li>
                    <Link
                        activeClass="active"
                        to="hero"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={closeMenu}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={closeMenu}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={closeMenu}
                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="branches"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={closeMenu}
                    >
                        Branches
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="gallery"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={closeMenu}
                    >
                        Gallery
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="socials"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={closeMenu}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
