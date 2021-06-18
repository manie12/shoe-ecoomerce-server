import { postQuery } from './Post';

export const resolvers = {
    Query: {
        ...postQuery.Query
    }
}