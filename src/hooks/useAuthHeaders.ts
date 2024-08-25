export const useAuthHeaders = () => {
  const token = import.meta.env.VITE_APP_API_TOKEN;
  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
};