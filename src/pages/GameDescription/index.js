import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { FaGlobe } from "react-icons/fa";
import { BsReddit } from "react-icons/bs";
import Loading from "../../components/Loading";
import {
  Container,
  DescriptionContainer,
  GameImageContainer,
  GameImage,
  GameDescriptionContainer,
  GameInfo,
  Released,
  CriticScore,
  GameWebsite,
  GameReddit,
} from "./styled";

import { TitleMessage } from "../../components/Title/style";

function GameDescription() {
  const [game, setGame] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadGameDescription() {
      const response = await api.get(
        `https://api.rawg.io/api/games/${id}?key=5531c0208c3045cb9a7f4b4b1e8c0231&language=pt`,
        {
          params: {
            description: true,
          },
        }
      );
      const data = response.data;
      setGame(data);
      setLoading(true);
    }

    loadGameDescription();
  }, [id]);

  if (!loading) {
    return <Loading>Carregando...</Loading>;
  }

  return (
    <Container>
      <TitleMessage margin="30px 0" textTransform="uppercase">Descrição do jogo</TitleMessage>
      <DescriptionContainer>
        <GameImageContainer>
          <GameImage src={game.background_image} alt={game.slug} />
        </GameImageContainer>
        <GameDescriptionContainer>
          <TitleMessage size="2.3rem" align="left" margin="20px 0 0 0" padding="0">{game.name}</TitleMessage>
          <GameInfo>{game.description_raw}</GameInfo>
          <Released>Released: {game.released}</Released>
          <CriticScore>Rating: {game.rating}</CriticScore>
          <GameWebsite target="blank" href={game.website}>
            Website <FaGlobe size={18} style={{ marginLeft: "6px" }} />
          </GameWebsite>
          <GameReddit target="blank" href={game.reddit_url}>
            Reddit <BsReddit size={18} style={{ marginLeft: "6px" }} />
          </GameReddit>
        </GameDescriptionContainer>
      </DescriptionContainer>
    </Container>
  );
}

export default GameDescription;
