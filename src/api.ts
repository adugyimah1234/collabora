import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VITE_APP_API_URL,
});

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refreshToken');
      const { data } = await axios.post(`${process.env.VITE_APP_API_URL}/api/token/refresh`, { refreshToken });
      localStorage.setItem('accessToken', data.accessToken);
      originalRequest.headers['Authorization'] = `Bearer ${data.accessToken}`;
      return api(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default api;
