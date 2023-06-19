import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Home from './components/Home';
import Login from './components/Login';
import BrandonProfile from './components/brandonProfile';
import ColeProfile from './components/ColeProfile';
import RehmanProfile from './components/RehmanProfile';
import MyQuizzes from './components/MyQuizzes';
import QuizBox from './components/QuizBox';
import RegisterForm from './components/RegisterForm';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
      <Home />
      <Login />
      <RegisterForm />
      <BrandonProfile />
      <ColeProfile />
      <RehmanProfile />
      <MyQuizzes />
      <QuizBox /> 
      </div>
    </ApolloProvider>

  )};

export default App;