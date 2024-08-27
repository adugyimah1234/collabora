import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStudyGroupById, updateStudyGroup } from '../api/studyGroups';
import { StudyGroup } from '../types/StudyGroup';

const UpdateStudyGroup: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [studyGroup, setStudyGroup] = useState<StudyGroup | null>(null);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudyGroup = async () => {
      try {
        const response = await getStudyGroupById(Number(id));
        setStudyGroup(response.data);
        setName(response.data.name);
        setDescription(response.data.description);
      } catch (error) {
        setError('Failed to fetch study group');
      }
    };

    fetchStudyGroup();
  }, [id]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await updateStudyGroup(Number(id), { name, description });
      navigate.push('/study-groups');
    } catch (error) {
      setError('Failed to update study group');
    }
  };

  if (!studyGroup) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h1>Update Study Group</h1>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button type="submit">Update</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default UpdateStudyGroup;