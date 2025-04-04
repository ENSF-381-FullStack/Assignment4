import React from 'react';

function EnrolledCourse({ course, onDrop }) {
  return (
    <div className="enrolled-course">
      <h4>{course.name}</h4>
      <p>Credit Hours: {course.creditHours || 3}</p>
      <button onClick={() => onDrop(course.id)}>Drop Course</button>
    </div>
  );
}

export default EnrolledCourse;
