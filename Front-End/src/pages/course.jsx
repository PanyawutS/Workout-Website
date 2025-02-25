import React from 'react';
import '../App.css';

import CourseDetail from '../components/coursedetail';

function Course() {
  return (
    <div>
      <h1>This is the Course Detail Page</h1>
      <CourseDetail /> {/* เรียกใช้ component CourseDetail */}
    </div>
  );
}

export default Course;
