import logo from './logo.jpg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import courses from './data/courses';
import testimonials from './data/testimonials';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  )
}
function Homepage() {
  return (
    <div>
      <Header />
      <MainSection />
    </div>
  );
}
function Header() {
  return (
    <div> 
      <header className="header">
        <img src={logo} alt="LMS Logo" className="header-logo" />
      </header>
      <nav className="header-nav" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Link to="/" className="nav">Home</Link>
        <Link to="/courses" className="nav">Courses</Link>
        <Link to="/login" className="nav">Login</Link>
      </nav>
      </div>
  );
}
function MainSection() {
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [randomTestimonials, setRandomTestimonials] = useState([]);

  useEffect(() => {
    // Select 3 random courses
    const shuffledCourses = [...courses].sort(() => 0.5 - Math.random());
    setFeaturedCourses(shuffledCourses.slice(0, 3));

    // Select 2 random testimonials
    const shuffledTestimonials = [...testimonials].sort(() => 0.5 - Math.random());
    setRandomTestimonials(shuffledTestimonials.slice(0, 2));
  }, []);

  return (
    <div>
      <section>
        <h2>About LMS</h2>
        <p>
          The Learning Management System (LMS) is designed to simplify course management and provide students with easy access to learning materials.
        </p>
      </section>

      <section>
        <h2>Featured Courses</h2>
        <ul>
          {featuredCourses.map((course, index) => (
            <li key={index}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Testimonials</h2>
        <ul>
          {randomTestimonials.map((testimonial, index) => (
            <li key={index}>
              <p><strong>{testimonial.name}</strong></p>
              <p>{testimonial.review}</p>
              <p>{'★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating)}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
