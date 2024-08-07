/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

export const fetchStudyGroups = async (headers: { [key: string]: string }) => {
  const response = await axios.get(`http://localhost:5000/api/study-groups/`, { headers });
  return response.data;
};

export const joinStudyGroup = async (userId: number, studyGroupId: number, headers: { [key: string]: string } ) => {
  const response = await axios.post(
    `http://localhost:5000/api/study-groups/join-study-group`,
    { userId, studyGroupId },
    { headers }
  );
  return response.data;
};

export const leaveStudyGroup = async (userId: number, studyGroupId: number, headers: { [key: string]: string }) => {
  const response = await axios.post(
    `http://localhost:5000/api/study-groups/leave-study-group`,
    { userId, studyGroupId },
    { headers }
  );
  return response.data;
};