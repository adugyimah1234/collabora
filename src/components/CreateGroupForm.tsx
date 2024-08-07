// src/components/CreateGroupForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const CreateGroupForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [courseId, setCourseId] = useState('');
  const [currentActivity, setCurrentActivity] = useState('idle'); // default value

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/study-groups', {
        name,
        description,
        courseId,
        currentActivity
      });
      alert('Group created successfully!');
      // Optionally clear form fields or redirect
    } catch (error) {
      console.error('Error creating group:', error);
      alert('Failed to create group. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Group Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="courseId" className="block text-sm font-medium text-gray-700">Course ID</label>
        <input
          type="number"
          id="courseId"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="currentActivity" className="block text-sm font-medium text-gray-700">Current Activity</label>
        <select
          id="currentActivity"
          value={currentActivity}
          onChange={(e) => setCurrentActivity(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        >
          <option value="studying">Studying</option>
          <option value="discussing">Discussing</option>
          <option value="idle">Idle</option>
        </select>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Create Group
      </button>
    </form>
  );
};

export default CreateGroupForm;
