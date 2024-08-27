import React, { useEffect, useState } from 'react';
import { getAllStudyGroups } from '../api/studyGroups';

const StudyGroupList: React.FC = () => {
  const [studyGroups, setStudyGroups] = useState<any[]>([]);

  useEffect(() => {
    const fetchStudyGroups = async () => {
      try {
        const response = await getAllStudyGroups();
        setStudyGroups(response.data);
      } catch (error) {
        console.error('Error fetching study groups', error);
      }
    };

    fetchStudyGroups();
  }, []);

  return (
    <div>
      <h1>Study Groups</h1>
      <ul>
        {studyGroups.map((group) => (
          <li key={group.id}>
            <a href={`/study-groups/${group.id}`}>{group.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudyGroupList;