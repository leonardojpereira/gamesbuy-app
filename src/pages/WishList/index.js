import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { BsEmojiFrownFill } from 'react-icons/bs'
import { toast } from "react-toastify";
import "./style.js";
import { Link } from "react-router-dom";
import {
  Container,
  GameContainer,
  NoGameContainer,
  NoGameMessage,
  BtnGames,
  Box,
  GameImage,
  GameInfo,
  GameName,
  GameInfoBtn,
  DeleteGameBtn,
} from "./style";

import { TitleMessage } from "../../components/Title/style.js";
export default function WishList() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.wishlist);

  function handleRemove(id) {
    dispatch({
      type: "REMOVE_GAME_FROM_WISHLIST",
      id,
    });
    toast.success("Jogo removido com sucesso!");
  }

  return (
    <Container>
      <TitleMessage margin="42px 16px" padding="0" size="3rem" mobileSize="2.5rem">Lista de desejos</TitleMessage>
      {games.length === 0 ? (
        <NoGameContainer>
          <NoGameMessage>Sua lista de desejos está vazia <BsEmojiFrownFill color="yellow" /></NoGameMessage>
          <Link to="/">
            <BtnGames>Ver jogos</BtnGames>
          </Link>
        </NoGameContainer>
      ) : (
        games.map((game) => (
          <GameContainer>
            <Box key={game.id}>
              <GameImage src={game.background_image} alt={game.slug} />
              <GameInfo>
                <GameName>{game.name}</GameName>
                <Link to={`/description/${game.id}`}>
                  <GameInfoBtn>Saber mais</GameInfoBtn>
                </Link>
                <DeleteGameBtn
                  type="button"
                  onClick={() => handleRemove(game.id)}
                >
                  <MdDelete color="red" />
                </DeleteGameBtn>
              </GameInfo>
            </Box>
          </GameContainer>
        ))
      )}
    </Container>
  );
}
