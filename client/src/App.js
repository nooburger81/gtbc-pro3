import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import Home from './components/Home';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container mx-auto">
        {/* <KittyForm />
        <UserForm /> */}
      </div>
    </ApolloProvider>

  );
}

export default App;