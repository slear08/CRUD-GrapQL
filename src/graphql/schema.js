import { GraphQLSchema } from 'graphql';
import { RootQuery } from './queries/index.js';
import { RootMutationQuery } from './mutations/index.js';

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutationQuery,
});

export default schema;
