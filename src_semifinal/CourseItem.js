import React, { useState } from 'react';

function CourseItem({ course, onEnroll }) {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <div
      className="course-item"
      onMouseEnter={() => setShowDesc(true)}
      onMouseLeave={() => setShowDesc(false)}
    >
      <img src={course.image} alt={course.name} width="150" />
      <h3>{course.name}</h3>
      <p>{course.instructor}</p>
      {showDesc && <p>{course.description}</p>}
      <button onClick={() => onEnroll(course)}>Enroll Now</button>
    </div>
  );
}

export default CourseItem;
