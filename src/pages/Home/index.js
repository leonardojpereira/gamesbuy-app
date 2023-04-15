import { useState, useEffect } from 'react';
import api from "../../services/api";
import './style.css';
import { FiStar } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { MdCancel } from 'react-icons/md';

export default function Home() {
  const [games, setGames] = useState([]);
  const [searchGame, setSearchGame] = useState('');
  const [filteredGames, setFilteredGames] = useState(games);  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadGames() {
      const response = await api.get('https://api.rawg.io/api/games?key=5531c0208c3045cb9a7f4b4b1e8c0231');
      setGames(response.data.results);
      setLoading(true);
    }

    loadGames();

  }, []);

  useEffect(() => {
    setFilteredGames(games);
  }, [games]);

  function formatGameTitle(title) {
    return title.replace(/-/g, ' ');
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const filtered = games.filter((game) => {
      return game.slug.toLowerCase().includes(searchGame.toLowerCase());
    });
    setFilteredGames(filtered);
  };
    
  const handleSearchChange = (event) => {
    setSearchGame(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchGame('');
    setFilteredGames(games);
  };

  if (!loading) {
    return <p className='LoadingMessage'>Carregando...</p>;
  }

  return (
    <div className="HomeContainer">
    <h1>Seu guia completo de jogos e informações detalhadas!</h1>
    <form onSubmit={handleSearchSubmit} className="SearchForm">
      <input
        type="search"
        placeholder="Pesquisar jogos..."
        value={searchGame}
        onChange={handleSearchChange}
        className="SearchInput"
      />
      <button type="submit" className="SearchButton">
        <FiSearch />
      </button>
      {searchGame.length > 0 && (
        <button type="button" className="ClearSearchButton" onClick={handleClearSearch}>
          <MdCancel/>
        </button>
      )}
    </form>
    <div className="Box">
      {filteredGames.length === 0 ? (
        <div className="NoGamesMessage">Nenhum jogo encontrado :(</div>
      ) : (
        filteredGames.map((game) => (
          <li key={game.id} className="GameContainer">
            <img className="GameBanner" src={game.background_image} alt={game.slug} />
            <div className="GameInfoContainer">
              <Link to={`/description/${game.id}`} style={{ textDecoration: 'none' }}>
                <span className="GameName">{formatGameTitle(game.slug)}</span>
              </Link>
              <span className="WishListBtn">
                <FiStar />
              </span>
            </div>
          </li>
        ))
      )}
    </div>
  </div>
  )
}