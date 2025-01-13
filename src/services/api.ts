// This file is currently not in use as we're running without a backend
// Keeping it for reference when backend integration is needed

/*
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

interface ApiErrorResponse {
  message: string;
  status?: number;
}

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000,
  validateStatus: (status) => status >= 200 && status < 500
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data || response;
  },
  async (error: AxiosError<ApiErrorResponse>) => {
    const originalRequest = error.config as CustomAxiosRequestConfig;

    if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await api.post<{ data: { token: string } }>('/auth/refresh-token');
        const { token } = response.data.data;

        localStorage.setItem('token', token);
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        return api(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        console.error('Token refresh failed:', refreshError);
        return Promise.reject(refreshError);
      }
    }

    console.error('API Error:', {
      status: error.response?.status,
      message: error.response?.data?.message || error.message,
      url: originalRequest?.url
    });

    const message = error.response?.data?.message || error.message;
    return Promise.reject(new Error(message));
  }
);

export default api;
*/

// Mock API for frontend development
const mockApi = {
  get: async () => Promise.resolve({ data: {} }),
  post: async () => Promise.resolve({ data: {} }),
  put: async () => Promise.resolve({ data: {} }),
  delete: async () => Promise.resolve({ data: {} })
};

export default mockApi;