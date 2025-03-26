import './Branches.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Branches = () => {
    const branches = [
        {
            city: 'Payyanur',
            address: 'City Center, Main Road Payyannur, Kannur, Kerala - 670307',
            mapLink: 'https://maps.app.goo.gl/ZXuGrdwjpbGZG2hQ7?g_st=aw'
        },
        {
            city: 'Mathil',
            address: 'Govt. High Secondry School, Mathil, Kannur, Kerala - 670307',
            mapLink: 'https://maps.app.goo.gl/JeDLysJM1mahK5Ls5?g_st=aw'
        },
        {
            city: 'Mandoor',
            address: 'Naniyil Building, Mandoor, Pilathara - 670501',
            mapLink: 'https://maps.app.goo.gl/F2p4SRtjXksitruA7?g_st=aw'
        },
        {
            city: 'Udinur',
            address: 'Govt. High Secondry School, Udinur, Kasaragod, Kerala - 671310',
            mapLink: 'https://maps.app.goo.gl/8MyguHNw8rxLLEQZA'
        },
        {
            city: 'Padne',
            address: 'Cap Sports Center, Padne, Kasaragod, Kerala - 671312',
            mapLink: 'https://maps.app.goo.gl/zyFhs72cF1zSBYkx9'
        },
        {
            city: 'Thaliparamba',
            address: 'Opposite Ackiparamba U.P School, Chiravakku, Kannur, Kerala - 670141',
            mapLink: ''
        },
        {
            city: 'Karivellur',
            address: 'Samskarika Vedi, Manakkad, Kannur, Kerala - 670521',
            mapLink: 'https://maps.app.goo.gl/QvPahQXySNL7WjJ29?g_st=aw'
        },
        {
            city: 'Eramam',
            address: 'Kannappallipoyil Vayanasala & Granthalayam, Eramam, Kannur, Kerala - 670307',
            mapLink: 'https://maps.app.goo.gl/YhVo2A5E3Y4H5h126'
        },
        {
            city: 'Nadakkavu',
            address: 'GLPS Maithani, Vaikkath, North Thrikkaripur, Kasaragod, Kerala - 671310',
            mapLink: 'https://maps.app.goo.gl/RQP6p3hhBhdDa7aMA?g_st=aw'
        },
        {
            city: 'Kuniyan',
            address: 'Parambath Bhagavathi Kshethram L.P School (K K R Nair Memorial Aided L P School), Kuniyan Rd, Karivellur, Kerala - 671310',
            mapLink: 'https://maps.app.goo.gl/3oTjWaMS3ktt8DoC9'
        },
        {
            city: 'Periye',
            address: 'Flowers, Periye, Kasargod, Kerala - 671316',
            mapLink: 'https://maps.app.goo.gl/2tXMTFJtyZHBDSpe9'
        },
        {
            city: 'Pariyaram',
            address: 'Govt. Ayurveda Medical College Kannur, Pariyaram, Kannur, Kerala - 671316',
            mapLink: 'https://maps.app.goo.gl/imx7Kkv8xjoFt6kx8'
        },
        {
            city: 'Punnakkadavu',
            address: 'Punnakkadavu, Vadakkumbad Ramanthali, Payyanur, Kannur, Kerala - 670308',
            mapLink: 'https://maps.app.goo.gl/AzdVBgbGZ4hpWjs67?g_st=aw'
        },
        {
            city: 'Karamel',
            address: 'Karamel A.L.P School, Annur Road, Payyanur, Kannur, Kerala - 670307',
            mapLink: 'https://maps.app.goo.gl/u2kgWk8D6xMqfyNi9?g_st=aw'
        },
    ];

    // Function to open Maps
    const openMaps = (mapLink) => {
        if (mapLink) {
            window.open(mapLink, '_blank');
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
                            onClick={() => openMaps(branch.mapLink)}
                            style={{ cursor: 'pointer' }}
                        >
                            <FaMapMarkerAlt className="branch-icon" />
                            <h3>{branch.city}</h3>
                            <p>{branch.address}</p>
                            {/* Show warning for missing links */}
                            {!branch.mapLink &&
                                <div className="map-link-warning">
                                    (Map link coming soon)
                                </div>
                            }
                        </div>
                    ))}
                </div>
            </div>
            <div className="section-underline"></div>
        </section>
    );
};

export default Branches;