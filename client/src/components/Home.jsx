import { VIEW_PLAYERS } from '../utils/queries';
import { useQuery } from '@apollo/client';


const Home = () => {
    const { loading, data } = useQuery(VIEW_PLAYERS);
    const players = data?.viewPlayers || [];
    return (
        <div>
            {loading ?
            <h1>Loading...</h1>
        : <div>
            {players.map((player, i) => {
                return (
                    <div key={i}>
                        {player.email}
                    </div>
                )
            })}
        </div>
        }
        </div>
    )
}

export default Home;