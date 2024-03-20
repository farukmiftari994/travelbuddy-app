const typeDefs = `#graphql
  type User {
    id: ID!
    email: String!
    username: String!
  }
  type Query {
    users: [User]
  }

`;

export default typeDefs;
