import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
// import { gql } from "graphql-tag";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";
import { request } from "http";
import { GraphQLError } from "graphql";
import { Session, getServerSession } from "next-auth";
export type myContext = {
  session: Session | null;
};
const server = new ApolloServer<myContext>({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async ({ req }) => {
    const currentSession = await getServerSession();
    // const token = req.headers.authorization || '';
    // try to retrieve a user with the token
    // const user = getServerSession();
    // optionally block the user
    // we could also check user roles/permissions here
    // if (!user)
    // throwing a `GraphQLError` here allows us to specify an HTTP status code,
    // standard `Error`s will have a 500 status code by default
    // throw new GraphQLError('User is not authenticated', {
    //   extensions: {
    //     code: 'UNAUTHENTICATED',
    //     http: { status: 401 },
    //   },
    // });
    // add the user to the context
    return { session: currentSession };
  },
});
console.log("server listening", handler);

export { handler as GET, handler as POST };
