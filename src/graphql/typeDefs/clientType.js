import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

// Define ClientType and ProjectType here
export const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    },
});
