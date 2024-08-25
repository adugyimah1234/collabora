import axios from 'axios';

// Read the token from environment variables
const token = import.meta.env.VITE_APP_API_TOKEN;

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

export default apiClient;
