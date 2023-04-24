import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from 'react-icons/md';
import './style.js';
import { Link } from "react-router-dom";
import { Container, NoGameContainer, NoGameMessage, BtnGames, GameContainer, GameImage, GameInfo, GameName, GameInfoBtn, DeleteGameBtn } from './style';

import { TitleMessage } from "../../components/Title/style.js";
export default function WishList() {
    const dispatch = useDispatch();
    const games = useSelector(state => state.wishlist);

    function handleRemove(id) {
        dispatch({
            type: 'REMOVE_GAME_FROM_WISHLIST',
            id
        })
    }

    return (
        <>
          <TitleMessage textTransform="uppercase">Lista de desejos</TitleMessage>
          {games.length === 0 ? (
            <NoGameContainer>
                <NoGameMessage>Sua lista de desejo está vazia :/</NoGameMessage>
                <Link to='/'><BtnGames>Ver jogos</BtnGames></Link>
            </NoGameContainer>
          ) : (
            games.map((game) => (
                <Container key={game.id}>
                  <GameContainer key={game.id}>
                    <GameImage src={game.background_image} alt={game.slug} />
                    <GameInfo>
                      <GameName>{game.name}</GameName>
                      <Link to={`/description/${game.id}`}>
                        <GameInfoBtn>Informações sobre o jogo</GameInfoBtn>
                      </Link>
                      <DeleteGameBtn
                        type="button"
                        onClick={() => handleRemove(game.id)}
                      >
                        <MdDelete size={24} color="red" />
                      </DeleteGameBtn>
                    </GameInfo>
                  </GameContainer>
                </Container>
              ))
          )}
        </>
      );
}