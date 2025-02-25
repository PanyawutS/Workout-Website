import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CourseDetail = () => {
  const [courseDetail, setCourseDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseDetail = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/workoutprograms/workouts/all');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCourseDetail(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCourseDetail();
  }, []);

  if (loading) {
    return <p className="text-center text-xl text-blue-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Workout Programs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courseDetail &&
          courseDetail.map((course) => (
            <div key={course.programId} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={course.videoUrl || 'https://via.placeholder.com/400'}
                alt={course.programName}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold mb-2">{course.programName}</h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <Link to={`/course/${course.programId}`}>
                  <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                    เริ่มเลย
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CourseDetail;
