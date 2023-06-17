const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        password: String
    }

    type Query {
        viewUsers: [User]
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): User
    }
`;

module.exports = typeDefs;