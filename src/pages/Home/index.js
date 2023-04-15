import { useState, useEffect } from 'react';
import api from "../../services/api";
import { FiStar } from "react-icons/fi";
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { LoadingMessage, HomeContainer, Title, SearchForm, SearchInput, Box, NoGamesMessage, GameContainer, GameBanner, GameInfoContainer, GameName, WishListBtn } from './styled';

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

  useEffect(() => {
    const filtered = games.filter((game) => {
      return game.slug.toLowerCase().includes(searchGame.toLowerCase());
    });
    setFilteredGames(filtered);
  }, [searchGame, games]);

  function formatGameTitle(title) {
    return title.replace(/-/g, ' ');
  }

  const handleWishlistClick = (gameId) => {
    setGames(games.map(game => {
      if (game.id === gameId) {
        return {
          ...game,
          wishlist: !game.wishlist // Altera o estado da estrela
        }
      }
      return game;
    }));
  }

  if (!loading) {
    return <LoadingMessage>Carregando...</LoadingMessage>;
  }



  return (
    <HomeContainer>
    <Title>Seu guia completo de jogos e informações detalhadas!</Title>
    <SearchForm>
      <SearchInput
        type="search"
        placeholder="Pesquisar jogos..."
        value={searchGame}
        onChange={(e) => {setSearchGame(e.target.value)}}
      />
    </SearchForm>
    <Box>
      {filteredGames.length === 0 ? (
        <NoGamesMessage>Nenhum jogo encontrado :(</NoGamesMessage>
      ) : (
        filteredGames.map((game) => (
          <GameContainer key={game.id}>
            <GameBanner src={game.background_image} alt={game.slug} />
            <GameInfoContainer>
              <Link to={`/description/${game.id}`} style={{ textDecoration: 'none' }}>
                <GameName>{formatGameTitle(game.slug)}</GameName>
              </Link>
              <WishListBtn onClick={() => handleWishlistClick(game.id)}>
              {game.wishlist ? <AiFillStar /> : <FiStar />}
              </WishListBtn>
            </GameInfoContainer>
          </GameContainer>
        ))
      )}
    </Box>
  </HomeContainer>
  )
}