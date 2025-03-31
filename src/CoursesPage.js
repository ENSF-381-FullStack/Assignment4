import React from 'react';
import Header from './header'
import Footer from './footer'
import CourseCatalog from './CourseCatalog';
import EnrollmentList from './EnrollmentList';

function CoursesPage() {
  return (
    <div className="courses-page">
      <Header />
      <div className="content">
        <CourseCatalog />
        <EnrollmentList />
      </div>
      <Footer />
    </div>
  );
}

export default CoursesPage;
