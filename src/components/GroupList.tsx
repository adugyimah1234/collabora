import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GroupList = () => {
  const [groups, setGroups] = useState([]);
  const url = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await axios.get(`${url}/api/groups`);
        setGroups(response.data);
      } catch (error) {
        console.error('Failed to fetch groups:', error);
      }
    };

    fetchGroups();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Available Study Groups</h2>
      <ul>
        {groups.map((group: any) => (
          <li key={group.id} className="mb-2 p-4 border border-gray-300 rounded-md">
            <h3 className="text-lg font-semibold">{group.name}</h3>
            <p>{group.description}</p>
            <button
              className="bg-blue-500 text-white py-1 px-3 rounded-md mt-2"
              onClick={() => {/* Handle joining the group */}}
            >
              Join Group
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupList;