import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import { MONGODB } from './config';
import { typeDefs } from './Graphql/TypeDefs'
import { resolvers } from './Graphql/Resolvers/index'



const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB, { useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true }).
    then(() => {
        return server.listen({ port: 5000 })
    }).
    then((res) => console.log(`server running on port${res.url}`));
