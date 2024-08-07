import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const [enrolled, setEnrolled] = useState(false);

  const handleEnroll = () => {
    // Simulate enrollment process
    setEnrolled(true);
    alert(`Enrolled in ${course.title}`);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
      <p className="text-gray-600 mb-2">Instructor: {course.instructor}</p>
      <p className="text-gray-800 mb-4">{course.description}</p>
      <div className="flex justify-between items-center">
        <Link
          to={`/courses/${course.id}`}
          className="text-indigo-600 hover:underline"
        >
          View Details
        </Link>
        <button
          onClick={handleEnroll}
          className={`px-4 py-2 rounded-lg ${enrolled ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
          disabled={enrolled}
        >
          {enrolled ? 'Enrolled' : 'Enroll Now'}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
