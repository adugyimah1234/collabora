import React, { useState } from 'react';
import { createStudyGroup } from '../api/studyGroups';

const CreateStudyGroup: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createStudyGroup(name, description);
      alert('Study group created successfully');
    } catch (error) {
      console.error('Error creating study group', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <button type="submit">Create Study Group</button>
    </form>
  );
};

export default CreateStudyGroup;