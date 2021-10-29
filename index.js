const { ApolloServer } = require("apollo-server");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const {typeDefs}=require('./Schema/Type/type')
const {resolvers}=require('./Schema/Resolvers/resolvers')
require("dotenv").config();
/*
//graphql server

//types query/mutation/subscription
const typeDefs = `
    type Query {
        totalPosts: Int!
    }
`;

//resolvers
const resolvers = {
  Query: {
    totalPosts: () => 42,
  },
};*/

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
        // options
    })
]
});

apolloServer.listen(process.env.PORT, () => {
  console.log(`🚀 GRAPHQL Server is running at http://localhost:${process.env.PORT}`);
});