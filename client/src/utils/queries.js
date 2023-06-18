import { gql } from '@apollo/client';

export const VIEW_PLAYERS = gql`
    query seeAllPlayers {
        viewPlayers {
        _id
        firstName
        lastName
        email
        password
        }
    }
`