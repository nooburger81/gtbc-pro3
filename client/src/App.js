import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Home from './components/Home';

const client = new ApolloClient({
uri: '/graphql',
cache: new InMemoryCache(),
});

function App() {
  return (
 
  <ApolloProvider client={client}>
<div className='App'>
  hi there
  <Home />
</div>
  </ApolloProvider>
  
)}

export default App;
