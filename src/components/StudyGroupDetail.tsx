import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStudyGroupById, joinStudyGroup, leaveStudyGroup } from '../api/studyGroups';

const StudyGroupDetail: React.FC<{ userId: number }> = ({ userId }) => {
  const { id } = useParams<{ id: string }>();
  const [studyGroup, setStudyGroup] = useState<any>(null);

  useEffect(() => {
    const fetchStudyGroup = async () => {
      try {
        const response = await getStudyGroupById(Number(id));
        setStudyGroup(response.data);
      } catch (error) {
        console.error('Error fetching study group', error);
      }
    };

    fetchStudyGroup();
  }, [id]);

  const handleJoin = async () => {
    try {
      await joinStudyGroup(Number(id), userId);
      alert('Joined study group successfully');
    } catch (error) {
      console.error('Error joining study group', error);
    }
  };

  const handleLeave = async () => {
    try {
      await leaveStudyGroup(Number(id), userId);
      alert('Left study group successfully');
    } catch (error) {
      console.error('Error leaving study group', error);
    }
  };

  if (!studyGroup) return <p>Loading...</p>;

  return (
    <div>
      <h1>{studyGroup.name}</h1>
      <p>{studyGroup.description}</p>
      <button onClick={handleJoin}>Join Study Group</button>
      <button onClick={handleLeave}>Leave Study Group</button>
    </div>
  );
};

export default StudyGroupDetail;