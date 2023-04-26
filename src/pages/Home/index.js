import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../services/api";
import { FiStar } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";

import { TitleMessage } from "../../components/Title/style";
import BackUpArrow from "../../components/BackToTopArrow";

import {
  HomeContainer,
  SearchForm,
  SearchInput,
  Box,
  NoGamesMessage,
  GameContainer,
  GameBannerContainer,
  GameBanner,
  GameTextOverlay,
  GameInfoContainer,
  GameName,
  WishListBtn,
} from "./style";

export default function Home() {
  const dispatch = useDispatch();
  const [games, setGames] = useState([]);
  const [searchGame, setSearchGame] = useState("");
  const [filteredGames, setFilteredGames] = useState(games);
  const [loading, setLoading] = useState(false);

  const wishlist = useSelector((state) => state.wishlist);

  useEffect(() => {
    async function loadGames() {
      const response = await api.get(
        "https://api.rawg.io/api/games?key=5531c0208c3045cb9a7f4b4b1e8c0231"
      );
      setGames(response.data.results);
      setLoading(true);
    }

    loadGames();
  }, []);

  useEffect(() => {
    setFilteredGames(games);
  }, [games]);

  useEffect(() => {
    const filtered = games.filter(game => game.name.toLowerCase().includes(searchGame.toLowerCase()));
    setFilteredGames(filtered);
  }, [searchGame, games]);

  const handleWishlistClick = (game) => {
    const gameIndex = wishlist.findIndex(item => item.id === game.id);
    gameIndex !== -1
      ? dispatch({ type: "REMOVE_GAME_FROM_WISHLIST", id: game.id })
      : dispatch({ type: "ADD_GAME_TO_WISHLIST", game });
  };

  if (!loading) {
    return <Loading>Carregando...</Loading>;
  }

  return (
    <HomeContainer>
      <TitleMessage padding="0" mobileSize="2rem">Seu guia completo de jogos e informações detalhadas!</TitleMessage>
      <SearchForm>
        <SearchInput
          type="search"
          placeholder="Pesquisar jogos..."
          value={searchGame}
          onChange={(e) => {
            setSearchGame(e.target.value);
          }}
        />
      </SearchForm>
      <Box>
        {filteredGames.length === 0 ? (
          <NoGamesMessage>Nenhum jogo encontrado :(</NoGamesMessage>
        ) : (
          filteredGames.map((game) => (
            <GameContainer key={game.id}>
              <Link to={`/description/${game.id}`} style={{ textDecoration: "none" }}>
                <GameBannerContainer>
                  <GameBanner src={game.background_image} alt={game.name} />
                  <GameTextOverlay>Saiba mais</GameTextOverlay>
                </GameBannerContainer>
              </Link>
              <GameInfoContainer>
                <Link
                  to={`/description/${game.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <GameName>{game.name}</GameName>
                </Link>
                <WishListBtn onClick={() => handleWishlistClick(game)}>
                  {wishlist.some((item) => item.id === game.id) ? (
                    <AiFillStar />
                  ) : (
                    <FiStar />
                  )}
                </WishListBtn>
              </GameInfoContainer>
            </GameContainer>
          ))
        )}
      </Box>
      <BackUpArrow />
    </HomeContainer>
  );
}
