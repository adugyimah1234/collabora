import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { joinStudyGroup, leaveStudyGroup } from '../api/studyGroups';
import { useAuth } from '../context/AuthContext';

const JoinLeaveStudyGroup: React.FC = () => {
  const { userId } = useAuth();
  const [studyGroupId, setStudyGroupId] = useState<number | string>(''); // Initially set as empty string
  const [action, setAction] = useState<'join' | 'leave'>('join');

  const handleAction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Convert studyGroupId to number and check userId validity
    const groupId = typeof studyGroupId === 'number' ? studyGroupId : parseInt(studyGroupId, 10);
    
    if (!userId) {
      alert('User not logged in');
      return;
    }

    try {
      if (action === 'join') {
        await joinStudyGroup(userId, groupId);
        alert('Joined study group successfully');
      } else {
        await leaveStudyGroup(userId, groupId);
        alert('Left study group successfully');
      }
    } catch (error) {
      console.error('Error performing action', error);
    }
  };

  return (
    <motion.div
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">Join/Leave Study Group</h2>
      <form onSubmit={handleAction}>
        <div className="mb-4">
          <label className="block text-gray-700">Study Group ID</label>
          <input
            type="number"
            value={studyGroupId}
            onChange={(e) => setStudyGroupId(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Action</label>
          <select
            value={action}
            onChange={(e) => setAction(e.target.value as 'join' | 'leave')}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="join">Join</option>
            <option value="leave">Leave</option>
          </select>
        </div>
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg">
          Submit
        </button>
      </form>
    </motion.div>
  );
};

export default JoinLeaveStudyGroup;