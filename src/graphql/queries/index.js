import { GraphQLObjectType } from 'graphql';
import clientQueries from './clientQueries.js';
import projectQueries from './projectQueries.js';

export const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        ...clientQueries,
        ...projectQueries,
    },
});
