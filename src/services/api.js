import axios from 'axios';

const api = axios.create({
  baseURL: 'https://wpumzh0mch.execute-api.sa-east-1.amazonaws.com',
});

export default api;