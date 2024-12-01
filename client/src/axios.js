import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // Replace with your API's base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;