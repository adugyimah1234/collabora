import React, { useEffect, useState } from 'react';
import { fetchStudyGroups } from '../api/studyGroups';
import { useAuthHeaders } from '../hooks/useAuthHeaders';

interface StudyGroup {
  id: string;
  name: string;
}

const StudyGroupsList: React.FC = () => {
  const [studyGroups, setStudyGroups] = useState<StudyGroup[]>([]);
  const [error, setError] = useState<string | null>(null);
  const headers = useAuthHeaders();

  useEffect(() => {
    const getStudyGroups = async () => {
      try {
        const data = await fetchStudyGroups(headers);
        setStudyGroups(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      }
    };

    getStudyGroups();
  }, [headers]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Study Groups</h1>
      <ul>
        {studyGroups.map((group) => (
          <li key={group.id}>{group.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudyGroupsList;