import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteStudyGroup } from '../api/studyGroups';

interface Props {
  id: number;
}

const DeleteStudyGroup: React.FC<Props> = ({ id }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deleteStudyGroup(id);
      navigate.push('/study-groups');
    } catch (error) {
      console.error('Failed to delete study group');
    }
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteStudyGroup;