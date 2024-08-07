import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter, FaSort } from 'react-icons/fa';
import CourseCard from '@/components/CourseCard';
import { coursesData } from '@/data/courses'; // Mock data or replace with API data

const CoursesPage = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('title'); // Default sort by title

  const filteredCourses = coursesData.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase()) &&
    (filter ? course.category === filter : true)
  ).sort((a, b) => {
    if (sort === 'title') return a.title.localeCompare(b.title);
    if (sort === 'instructor') return a.instructor.localeCompare(b.instructor);
    return 0;
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row justify-between mb-6">
        {/* Search Bar */}
        <div className="relative w-full sm:w-1/2 mb-4 sm:mb-0">
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <FaSearch className="absolute top-3 right-3 text-gray-400" />
        </div>

        {/* Filter and Sorting */}
        <div className="relative flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50">
            <FaFilter className="mr-2" /> Filter
          </button>
          <div className="relative">
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50">
              <FaSort className="mr-2" /> Sort
            </button>
            {/* Sorting Dropdown */}
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
              <div className="p-4">
                <h3 className="text-lg font-semibold">Sort by</h3>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="title">Title</option>
                  <option value="instructor">Instructor</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Listings */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-700">No courses found</p>
        )}
      </motion.div>
    </div>
  );
};

export default CoursesPage;
