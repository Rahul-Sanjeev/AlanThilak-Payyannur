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
            address: 'Govt. High Secondry School, Mathil, Kannur, Kerala - 670307',
            coordinates: '12.9716,77.5946' // Latitude and Longitude for Bangalore
        },
        {
            city: 'Mandoor',
            address: 'Naniyil Building, Mandoor, Pilathara - 670501',
            coordinates: '19.0760,72.8777' // Latitude and Longitude for Mumbai
        },
        {
            city: 'Udinur',
            address: 'Govt. High Secondry School, Udinur, Kasaragod, Kerala - 671310',
            coordinates: '28.7041,77.1025' // Latitude and Longitude for Delhi
        },
        {
            city: 'Padne',
            address: 'Cap Sports Center, Padne, Kasaragod, Kerala - 671312',
            coordinates: '28.7041,77.1025' // Latitude and Longitude for Delhi
        },
        {
            city: 'Thaliparamba',
            address: 'Opposite Ackiparamba U.P School, Chiravakku, Kannur, Kerala - 670141',
            coordinates: '28.7041,77.1025' // Latitude and Longitude for Delhi
        },
        {
            city: 'Karivellur',
            address: 'Samskarika Vedi, Manakkad, Kannur, Kerala - 670521',
            coordinates: '28.7041,77.1025' // Latitude and Longitude for Delhi
        },
        {
            city: 'Eramam',
            address: 'Kannappallipoyil Vayanasala & Granthalayam, Eramam, Kannur, Kerala - 670307',
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
            <div className="branches-container header container">
                <h1>Our Branches</h1>
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