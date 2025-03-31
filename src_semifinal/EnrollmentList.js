import React, { useEffect, useState } from 'react';
import EnrolledCourse from './EnrolledCourse';

function EnrollmentList() {
  const [enrolled, setEnrolled] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('enrolled')) || [];
    setEnrolled(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('enrolled', JSON.stringify(enrolled));
  }, [enrolled]);

  const dropCourse = (id) => {
    setEnrolled(enrolled.filter(c => c.id !== id));
  };

  const totalCredits = enrolled.reduce((acc, c) => acc + (c.creditHours || 3), 0);

  return (
    <div>
      <h2>Enrollment List</h2>
      {enrolled.map(c => <EnrolledCourse key={c.id} course={c} onDrop={dropCourse} />)}
      <p>Total Credit Hours: {totalCredits}</p>
    </div>
  );
}

export default EnrollmentList;
