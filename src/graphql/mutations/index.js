import { GraphQLObjectType } from 'graphql';
import clientMutations from './clientMutations.js';
import projectMutations from './projectMutations.js';

export const RootMutationQuery = new GraphQLObjectType({
    name: 'RootMutationQuery',
    fields: {
        ...clientMutations,
        ...projectMutations,
    },
});
