import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

function GameDescription() {
  const [game, setGame] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function loadGameDescription() {
        const response = await api.get(`https://api.rawg.io/api/games/${id}?key=5531c0208c3045cb9a7f4b4b1e8c0231&language=pt`, {
          params: {
            description: true
          }
        });
        const data = response.data;
        setGame(data);
        console.log(data);
      }

    loadGameDescription();
  }, []);

  if (!game) {
    return <p>Loading...</p>;
  }

  return (
    <div className="DescriptionContainer">
    <div className="GameImageContainer">
      <img className="GameImage" src={game.background_image} alt={game.slug} />
    </div>
    <div className="GameDescriptionContainer">
      <h1 className="GameTitle">{game.name}</h1>
      <p className="GameInfo">{game.description_raw}</p>
      <p className="Released">Released: {game.released}</p>
      <p className="CriticScore">Metacritic Score: {game.metacritic}</p>
    </div>
  </div>
  );
}

export default GameDescription;