import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation mutateUsers($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      _id
      firstName
      lastName
      email
      password
    }
  }
  `;