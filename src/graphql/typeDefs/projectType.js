import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';
import { ClientType } from './clientType.js';
import { getClientProject } from '../resolvers/clientResolvers.js';

export const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        client: {
            type: ClientType,
            resolve: getClientProject,
        },
    },
});
