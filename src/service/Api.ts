import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.125:1025', // Replace with your actual base URL
});

export default api;