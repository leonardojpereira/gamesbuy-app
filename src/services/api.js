import axios from 'axios';

//url da api com descrição do jogo: https://api.rawg.io/api/games/{ID}?key=5531c0208c3045cb9a7f4b4b1e8c0231&description

const api = axios.create({
  baseURL: 'https://api.rawg.io/api/games'
});

export default api;