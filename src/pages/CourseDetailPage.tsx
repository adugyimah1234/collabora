import React from 'react';
import { useParams } from 'react-router-dom';
import { coursesData } from '@/data/courses'; // Mock data or replace with API data

const CourseDetailPage = () => {
  const { courseId } = useParams();
  const course = coursesData.find(c => c.id === parseInt(courseId));

  if (!course) {
    return <div className="p-6">Course not found</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
        <p className="text-gray-600 mb-2">Instructor: {course.instructor}</p>
        <p className="text-gray-800 mb-4">{course.description}</p>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseDetailPage;