import { gql } from 'apollo-server';


export const typeDefs = gql`
type products{
    image: String!
    productname: String!
    prices: String!
     id:String!
}
type Query{
    posts:[products]
}


`