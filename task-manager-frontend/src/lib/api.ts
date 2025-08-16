import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor to handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API calls
export const authAPI = {
  register: (data: { name: string; email: string; password: string }) =>
    api.post('/auth/register', data),
  
  login: (data: { email: string; password: string }) =>
    api.post('/auth/login', data),
};

// Task API calls
export const taskAPI = {
  getTasks: () => api.get('/tasks'),
  
  createTask: (data: { title: string; description: string; due_date: string }) =>
    api.post('/tasks', data),
  
  updateTask: (id: number, data: Partial<{ title: string; description: string; due_date: string }>) =>
    api.put(`/tasks/${id}`, data),
  
  deleteTask: (id: number) => api.delete(`/tasks/${id}`),
};

export default api;