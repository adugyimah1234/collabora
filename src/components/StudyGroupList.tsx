import React, { useEffect, useState } from 'react';
import { fetchStudyGroups } from '../api/studyGroups';

interface StudyGroup {
  study_group_id: number; // Update field name to match API response
  name: string;
  description: string;
  course_id: number | null;
  current_activity: string | null;
  created_at: string;
}

const StudyGroupsList: React.FC = () => {
  const [studyGroups, setStudyGroups] = useState<StudyGroup[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getStudyGroups = async () => {
      try {
        const data = await fetchStudyGroups();
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
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul>
      {studyGroups.map((group) => (
        <li key={group.study_group_id}> {/* Updated key to use study_group_id */}
          <h3>{group.name}</h3>
          <p>{group.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default StudyGroupsList;
