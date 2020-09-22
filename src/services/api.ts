import axios from 'axios';

const api = axios.create({
  baseURL: 'https://changenow.io/api/v1',
});

export default api;
