import React from 'react';
import { StudyGroup } from './types';

interface StudyGroupItemProps {
  group: StudyGroup;
  userId: string | null;
}

const StudyGroupItem: React.FC<StudyGroupItemProps> = ({ group, userId }) => {
  // Check if userId is null and handle it appropriately
  const isMember = userId ? group.members.includes(userId) : false;

  return (
    <li className="p-4 bg-white rounded-lg shadow-sm flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold">{group.name}</h3>
        <p>{group.description}</p>
      </div>
      <div>
        {isMember ? (
          <span className="text-green-500 font-semibold">Member</span>
        ) : (
          <span className="text-red-500 font-semibold">Not a Member</span>
        )}
      </div>
    </li>
  );
};

export default StudyGroupItem;