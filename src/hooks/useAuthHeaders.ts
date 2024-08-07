import { useAuth } from '../context/AuthContext';

export const useAuthHeaders = () => {
  const { token } = useAuth();
  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  };
};