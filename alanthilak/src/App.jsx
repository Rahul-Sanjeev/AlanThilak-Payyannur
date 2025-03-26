import React, { useState } from 'react';
import AudioGate from './components/AudioGate/AudioGate';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Affiliations from './components/Affiliations/Affiliations';
import Socials from './components/Socials/Socials';
import Footer from './components/Footer/Footer';
import Branches from './components/Branches/Branches';
import Leadership from './components/Leadership/Leadership';
import Gallery from './components/Gallery/Gallery';
import AudioFile from './assets/Audio/ATKSI-Audio.mp3'; // Import the audio file directly

const App = () => {
    const [audioAllowed, setAudioAllowed] = useState(false);
    const [audioElement, setAudioElement] = useState(null);

    const handleUnlock = () => {
        const audio = new Audio(AudioFile); // Use the imported audio file
        audio.loop = true;

        audio.play()
            .then(() => {
                setAudioAllowed(true);
                setAudioElement(audio);
            })
            .catch(error => {
                console.error('Audio play failed:', error);
                setAudioAllowed(true);
            });
    };

    return (
        <div>
            {!audioAllowed ? (
                <AudioGate onUnlock={handleUnlock} />
            ) : (
                <>
                    <Navbar audioElement={audioElement} />
                    <Hero />
                    <About />
                    <Leadership />
                    <Affiliations />
                    <Services />
                    <Gallery />
                    <Branches />
                        <Socials />
                        <Footer />
                </>
            )}
        </div>
    );
};

export default App;