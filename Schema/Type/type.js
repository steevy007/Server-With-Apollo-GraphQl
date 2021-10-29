const { gql } = require('apollo-server')


const typeDefs = gql`
    type Query {
        totalPosts: [Int!]!,
        allProducts:[Product]
        productById(id:Int):Product
    }

    type Mutation{
        createProduct(id:ID!,name:String!,description:String):Product!
        deleteProduct(id:ID!):Boolean
    }

    type Product{
        id:Int!,
        name:String!,
        description:String
    }
`;

module.exports = { typeDefs }