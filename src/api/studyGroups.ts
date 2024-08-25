import apiClient from './apiClient';

// Fetch all study groups
export const fetchStudyGroups = async () => {
  try {
    const response = await apiClient.get('/study-groups');
    console.log(JSON.stringify(response.data)); // Log the response data
    return response.data;
  } catch (error) {
    console.error('Error fetching study groups:', error);
    throw new Error('Failed to fetch study groups');
  }
};
// Join a study group
export const joinStudyGroup = async (userId: number, studyGroupId: number, headers: Record<string, string>) => {
  try {
    const response = await apiClient.post(
      '/study-groups/join-study-group',
      { userId, studyGroupId },
      { headers }
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to join study group');
  }
};

// Leave a study group
export const leaveStudyGroup = async (userId: number, studyGroupId: number, headers: Record<string, string>) => {
  try {
    const response = await apiClient.post(
      '/study-groups/leave-study-group',
      { userId, studyGroupId },
      { headers }
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to leave study group');
  }
};