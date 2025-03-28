import React, { useState } from 'react';
import Logo from '../../assets/ATKSI-Logo.svg';
import './AudioGate.css';

const AudioGate = ({ onUnlock }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleMusicToggle = () => {
        setIsPlaying(prev => !prev);
        // Extend this function to play or pause your music track
    };

    return (
        <div className="ag-audio-gate">
            <div className="ag-logo-section">
                <img className="ag-logo" src={Logo} alt="atksi-logo" />

            </div>
            <div className="ag-gate-content">
                <h1>
                    Alan Thilak Karate School International <br /> Payyanur
                </h1>
                <button className="ag-enter-button" onClick={onUnlock}>
                    Enter The Dojo
                </button>
                <p className="ag-instruction">Click to begin your journey</p>
            </div>
        </div>
    );
};

export default AudioGate;
