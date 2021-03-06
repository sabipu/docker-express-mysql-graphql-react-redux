import { gql } from "apollo-server";


const typeDefs = gql`
    scalar Date
    
    type User {
        email: String!
        name: String
        id: ID!
    }

    type UserSession {
        createdAt: Date!
        expiresAt: Date!
        id: ID!
        user: User!
    }

    type Mutation {
        createUser(email: String!, password: String!): User!
        createUserSession(email: String!, password: String!): UserSession!
        deleteUserSession(sessionId: ID!): Boolean!
    }

    type Query {
        users: [User!]!
        userSession(me: Boolean!): UserSession
    }
`;

export default typeDefs;