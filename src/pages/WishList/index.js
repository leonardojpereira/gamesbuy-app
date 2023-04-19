import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from 'react-icons/md';
import './style.css';
import { Link } from "react-router-dom";

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
            <h1 className="Title">Sua lista de desejos</h1>
            {games.map(game => (
                <div className="Container" key={game.id}>
                    <div className="GameContainer" key={game.id}>
                        <img className="GameImage"
                            src={game.background_image}
                            alt={game.slug}
                        />
                        <div className="GameInfo">
                            <strong className="GameName">{game.name}</strong>
                            <Link to={`/description/${game.id}`}>
                            <button className="GameInfoBtn">Informações sobre o jogo</button>
                            </Link>
                            
                            <button className="DeleteGameBtn"
                                type="button"
                                onClick={() => handleRemove(game.id)}
                            >
                                <MdDelete size={32} color="#fff" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}