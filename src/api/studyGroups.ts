import axios from 'axios';

const API_BASE_URL = '/api/study-groups'; // Adjust based on your backend setup

export const createStudyGroup = async (name: string, description: string) => {
  return axios.post(`${API_BASE_URL}`, { name, description });
};

export const getAllStudyGroups = async () => {
  return axios.get(`${API_BASE_URL}`);
};

export const getStudyGroupById = async (id: number) => {
  return axios.get(`${API_BASE_URL}/${id}`);
};

export const updateStudyGroup = async (id: number, name: string, description: string) => {
  return axios.put(`${API_BASE_URL}/${id}`, { name, description });
};

export const deleteStudyGroup = async (id: number) => {
  return axios.delete(`${API_BASE_URL}/${id}`);
};

export const joinStudyGroup = async (studyGroupId: number, userId: number) => {
  return axios.post(`${API_BASE_URL}/${studyGroupId}/join`, { userId });
};

export const leaveStudyGroup = async (studyGroupId: number, userId: number) => {
  return axios.post(`${API_BASE_URL}/${studyGroupId}/leave`, { userId });
};

export const inviteToStudyGroup = async (studyGroupId: number, userId: number) => {
  return axios.post(`${API_BASE_URL}/${studyGroupId}/invite`, { userId });
};