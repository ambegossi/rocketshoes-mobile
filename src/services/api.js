import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/ambegossi/rocketshoes-api',
});

export default api;
