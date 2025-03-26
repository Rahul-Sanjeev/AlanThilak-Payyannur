import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import Logo from '../../assets/ATKSI-Logo.svg';
import { FaPlay, FaPause } from 'react-icons/fa';
import AudioFile from '../../assets/Audio/ATKSI-Audio.mp3';

const Navbar = ({ audioElement }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const lastScrollY = useRef(0);

    const [isAudioPlaying, setIsAudioPlaying] = useState(true);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const toggleAudio = () => {
        if (isAudioPlaying) {
            audioElement.pause();
        } else {
            audioElement.play();
        }
        setIsAudioPlaying(!isAudioPlaying);
    };

    // Hide navbar on scroll down, show on scroll up
    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = window.innerHeight;
            setIsScrolled(window.scrollY > heroHeight);
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
        <nav className={`container ${showNavbar ? 'nav-show' : 'nav-hide'} ${isScrolled ? 'scrolled' : ''}`}>
            <audio src={AudioFile} loop autoPlay muted />
            <div className="logo-section">
                <img className="logo" src={Logo} alt="atksi-logo" />
                <span>
                    ALAN THILAK KARATE SCHOOL INTERNATIONAL PAYYANUR
                </span>
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
                <li>
                    <button onClick={toggleAudio} className="music-control">
                        {isAudioPlaying ? <FaPause /> : <FaPlay />}
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;