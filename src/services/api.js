import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.rawg.io/api/games'
});

export default api;