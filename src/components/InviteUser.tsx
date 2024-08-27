import React, { useState } from 'react';
import { inviteToStudyGroup } from '../api/studyGroups';

const InviteUser: React.FC<{ studyGroupId: number }> = ({ studyGroupId }) => {
  const [userId, setUserId] = useState<number>(0);

  const handleInvite = async () => {
    try {
      await inviteToStudyGroup(studyGroupId, userId);
      alert('User invited successfully');
    } catch (error) {
      console.error('Error inviting user', error);
    }
  };

  return (
    <div>
      <label>
        User ID:
        <input type="number" value={userId} onChange={(e) => setUserId(Number(e.target.value))} />
      </label>
      <button onClick={handleInvite}>Invite User</button>
    </div>
  );
};

export default InviteUser;