import React, { useState } from 'react';
import courses from '../data/courses';
import CourseItem from './CourseItem';

function CourseCatalog() {
  const [enrolled, setEnrolled] = useState([]);

  const enrollCourse = (course) => {
    if (!enrolled.find(c => c.id === course.id)) {
      const newList = [...enrolled, { ...course, creditHours: 3 }];
      setEnrolled(newList);
      localStorage.setItem('enrolled', JSON.stringify(newList));
    }
  };

  return (
    <div>
      <h2>All Courses</h2>
      <div className="catalog">
        {courses.map(course => (
          <CourseItem key={course.id} course={course} onEnroll={enrollCourse} />
        ))}
      </div>
    </div>
  );
}

export default CourseCatalog;
