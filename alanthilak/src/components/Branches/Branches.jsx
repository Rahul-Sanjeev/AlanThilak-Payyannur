import './Branches.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Branches = () => {
    const branches = [
        {
            city: 'Payyanur',
            address: 'City Center, Main Road Payyannur, Kannur, Kerala - 670307',
            coordinates: '12.1051748,75.2052757' // Latitude and Longitude for Payyanur
        },
        {
            city: 'Mathil',
            address: '456 Martial Arts Road, Bangalore, Karnataka',
            coordinates: '12.9716,77.5946' // Latitude and Longitude for Bangalore
        },
        {
            city: 'Mumbai',
            address: '789 Dojo Lane, Mumbai, Maharashtra',
            coordinates: '19.0760,72.8777' // Latitude and Longitude for Mumbai
        },
        {
            city: 'Delhi',
            address: '101 Sensei Avenue, Delhi',
            coordinates: '28.7041,77.1025' // Latitude and Longitude for Delhi
        },
    ];

    // Function to open Google Maps or Apple Maps
    const openMaps = (coordinates) => {
        const isAppleDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
        const [latitude, longitude] = coordinates.split(',');

        if (isAppleDevice) {
            // Open Apple Maps
            window.open(`maps://maps.google.com/maps?q=${latitude},${longitude}`);
        } else {
            // Open Google Maps
            window.open(`https://www.google.com/maps?q=${latitude},${longitude}`);
        }
    };

    return (
        <section id="branches" className="branches-section">
            <div className="branches-container container">
                <h2 className="section-title">Our Branches</h2>
                <p className="section-subtitle">Find a dojo near you and join our karate family!</p>

                <div className="branches-grid">
                    {branches.map((branch, index) => (
                        <div
                            className="branch-card"
                            key={index}
                            onClick={() => openMaps(branch.coordinates)}
                            style={{ cursor: 'pointer' }} // Add pointer cursor
                        >
                            <FaMapMarkerAlt className="branch-icon" />
                            <h3>{branch.city}</h3>
                            <p>{branch.address}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="section-underline"></div>
        </section>
    );
};

export default Branches;