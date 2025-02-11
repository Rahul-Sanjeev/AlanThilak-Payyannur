import { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [displayedImages, setDisplayedImages] = useState([]);

    useEffect(() => {
        const importImages = async () => {
            try {
                const imageModules = import.meta.glob('./Images/*.{png,jpg,jpeg,svg}', { eager: true });
                const importedImages = Object.keys(imageModules).map((path) => {
                    const module = imageModules[path];
                    return {
                        src: module.default, 
                        // alt: `Gallery Image ${path.replace('./Images/', '').replace(/\..+$/, '')}`
                    };
                });

                setImages(importedImages);
                updateDisplayedImages(importedImages);
            } catch (error) {
                console.error('Error loading images:', error);
            }
        };

        importImages();
    }, []);

    const updateDisplayedImages = (allImages) => {
        if (allImages.length === 0) return;
        const shuffled = [...allImages].sort(() => 0.5 - Math.random());
        setDisplayedImages(shuffled.slice(0, 8));
    };

    useEffect(() => {
        if (images.length === 0) return;
        const interval = setInterval(() => {
            updateDisplayedImages(images);
        }, 2000);
        return () => clearInterval(interval);
    }, [images]);

    return (
        <section id="gallery" className="gallery-section">
            <div className="gallery-container container">
                <h2 className="section-title">Our Hall Of Fame</h2>
                <div className="title-underline"></div>
                <p className="section-subtitle">
                    Explore moments from our dojo, competitions, and training sessions.
                </p>

                <div className="gallery-grid">
                    {displayedImages.map((image, index) => (
                        <div key={index} className="gallery-item">
                            <img src={image.src} alt={image.alt} loading="lazy" />
                            <div className="overlay">
                                <span>{image.alt}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="section-underline"></div>
        </section>
    );
};

export default Gallery;
