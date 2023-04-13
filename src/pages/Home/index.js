import { useState, useEffect } from 'react';
import api from "../../services/api";
import './style.css';
import { FaShoppingCart } from "react-icons/fa";
import { TbJewishStarFilled } from "react-icons/tb";

export default function Home() {
    const [games, setGames] = useState([]);

    useEffect( () => {
        async function loadGames() {
            const response = await api.get('https://api.rawg.io/api/games?key=5531c0208c3045cb9a7f4b4b1e8c0231');
            setGames(response.data.results);
        }
       
        loadGames();

    }, []);

    function formatGameTitle(title) {
        return title.replace(/-/g, ' ');
    }


    return(
        <div className='HomeContainer'>
            <h1>Compre os melhores jogos aqui!</h1>
            <div className='Box'>
                {games.map((game) => (
                <li id={game.id} key={game.id} className='GameContainer'>
                    <img className='GameBanner' src={game.background_image} alt={game.slug}/>
                    <div className='GameInfoContainer'>
                    <span className='GameTitle'>{formatGameTitle(game.slug)}</span>
                    <ul className='GameButtons'>
                        <li className='WishListBtn'><TbJewishStarFilled/></li>
                        <li className='CartBtn'><FaShoppingCart/></li>
                    </ul>
                    {game.description}
                    </div>
            
                </li>   
            ))}
            </div>
           
        </div>
        
    )
}