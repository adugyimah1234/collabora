import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter, FaSort } from 'react-icons/fa';
import AssignmentCard from '../components/AssignmentCard'; // Adjust the path as necessary
import { assignmentsData } from '../data/assignment'; // Adjust the path as necessary

// Define the type for Assignment
interface Assignment {
  id: number;
  title: string;
  course: string;
  dueDate: string; // Assuming dates are stored as strings
  description: string;
}

const AssignmentsPage: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState<string>(''); // Currently not used
  const [sort, setSort] = useState<string>('dueDate'); // Default sort by due date

  // Ensure correct typing for filtering and sorting
  const filteredAssignments = assignmentsData.filter((assignment: Assignment) =>
    assignment.title.toLowerCase().includes(search.toLowerCase()) &&
    (filter ? assignment.course === filter : true)
  ).sort((a: Assignment, b: Assignment) => {
    if (sort === 'dueDate') return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    if (sort === 'course') return a.course.localeCompare(b.course);
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
            placeholder="Search assignments..."
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
                  <option value="dueDate">Due Date</option>
                  <option value="course">Course</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Assignment Listings */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredAssignments.length > 0 ? (
          filteredAssignments.map((assignment: Assignment) => (
            <AssignmentCard key={assignment.id} assignment={assignment} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-700">No assignments found</p>
        )}
      </motion.div>
    </div>
  );
};

export default AssignmentsPage;
