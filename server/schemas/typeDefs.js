const { gql } = require('apollo-server-express');

const typeDefs = gql`
 type Player {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
 }

 type Query {
    viewPlayers: [Player]
 }

type Mutation {
    createPlayer(firstName: String!, lastName: String!, email: String!, password: String!): Player
}

`;

module.exports = typeDefs;