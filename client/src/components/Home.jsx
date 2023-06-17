import { VIEW_USERS } from '../queries';
import { useQuery } from '@apollo/client';

// Component
const Home = () => {
    const { loading, data } = useQuery(VIEW_USERS);
    const users = data?.viewUsers || [];
    console.log(data);
    console.log(users);
    return (
        <div>
            {loading ? 
            <div> Kitties have not yet been fetched yet! </div>
            : <div>
                {users.map((user, i) => {
                    return (
                    <div key={i}>
                        {user.firstName}
                    </div>
                    )
                    
                })}
               </div>
        }
        </div>
    )
}


export default Home;