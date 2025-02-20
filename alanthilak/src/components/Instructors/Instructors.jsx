import './Instructors.css';
import Instructor1 from './Images/rahulsanjeev.png';
import Instructor2 from './Images/rahulsanjeev.png';
import Instructor3 from './Images/rahulsanjeev.png';
import Instructor4 from './Images/rahulsanjeev.png';

const instructors = [
    { id: 1, image: Instructor1, name: 'Rahul Sanjeev', rank: '4th Dan Black Belt' },
    { id: 2, image: Instructor2, name: 'Rahul Sanjeev', rank: '5th Dan Black Belt' },
    { id: 3, image: Instructor3, name: 'Rahul Sanjeev', rank: '3rd Dan Black Belt' },
    { id: 4, image: Instructor4, name: 'Rahul Sanjeev', rank: '6th Dan Black Belt' },
];

const Instructors = () => {
    return (
        <section id="instructors" className="instructors-section">
            <div className="instructors-container header container">
                <h1>Meet Our Instructors</h1>
                <p className="section-subtitle">Our experienced and dedicated team of instructors are here to guide you.</p>

                <div className="instructors-grid">
                    {instructors.map(instructor => (
                        <div key={instructor.id} className="instructor-card">
                            <div className="instructor-image">
                                <img src={instructor.image} alt={instructor.name} />
                            </div>
                            <div className="instructor-details">
                                <h3>{instructor.name}</h3>
                                <p className="instructor-rank">{instructor.rank}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Instructors;