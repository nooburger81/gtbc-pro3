const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');

const db = require('./config/connection');
const PORT = process.env.PORT || 3005;

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

const startApolloServer = async () => {
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`App running on port ${PORT}!`);
        })
        });
    };
 

   startApolloServer();
