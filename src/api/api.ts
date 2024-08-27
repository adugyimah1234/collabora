/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust this based on your server URL

// Create a new study group
export const createStudyGroup = (data: any) => axios.post(`${API_URL}/study-groups/create-group`, data);

// Get all study groups
export const getAllStudyGroups = () => axios.get(`${API_URL}/study-groups`);

// Get a study group by ID
export const getStudyGroupById = (id: any) => axios.get(`${API_URL}/study-groups/${id}`);

// Update a study group
export const updateStudyGroup = (id: any, data: any) => axios.put(`${API_URL}/study-groups/${id}`, data);

// Delete a study group
export const deleteStudyGroup = (id: any) => axios.delete(`${API_URL}/study-groups/${id}`);

// Join a study group
export const joinStudyGroup = (data: any) => axios.post(`${API_URL}/study-groups/join-study-group`, data);

// Leave a study group
export const leaveStudyGroup = (data: any) => axios.post(`${API_URL}/study-groups/leave-study-group`, data);