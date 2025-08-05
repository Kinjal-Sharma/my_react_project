// services/api.js
import axios from 'axios';


// Create an Axios instance
const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

// Add a request interceptor to attach token
// apiClient.interceptors.request.use(
//   (config) => {
//     const { token } = store.getState().auth || {};
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default apiClient;
