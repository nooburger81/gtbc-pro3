import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import MyQuizzes from './components/MyQuizzes';
import QuizBox from './components/QuizBox';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container mx-auto">
        hi
      <Home />
      <Login />
      <Register />
      <Profile />
      <MyQuizzes />
      <QuizBox /> 
      </div>
    </ApolloProvider>

  );
}

export default App;