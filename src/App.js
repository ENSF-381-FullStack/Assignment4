
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import courses from './data/courses';
import testimonials from './data/testimonials';
import CoursesPage from './CoursesPage'
import LoginPage from './LoginPage'
import Header from './header'
import Footer from './footer'

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/courses" element={<CoursesPage />} />
      </Routes>
    </Router>
  )
}

function Homepage() {
  return (
    <div>
      <Header />
      <MainSection />
      <Footer />
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
    <div className='unified'>
      <section className='intro'>
        <h2>About LMS</h2>
        <p>
          The Learning Management System (LMS) is designed to simplify course management and provide students with easy access to inscript to and dismiss courses.
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
              <p><strong>{testimonial.review}</strong></p>
              <p style={{ color: 'gold' }}>{'★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating)}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
