import React from 'react';
import StudyGroupsList from '../components/StudyGroupList';
import GroupChat from '../components/GroupChat';

const StudyGroupsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-center">Study Groups</h1>
      <StudyGroupsList />
      <GroupChat />
    </div>
  );
};

export default StudyGroupsPage;
