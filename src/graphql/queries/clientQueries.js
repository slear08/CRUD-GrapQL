// graphql/queries/clientQueries.js
import { GraphQLID, GraphQLList } from 'graphql';
import { ClientType } from '../typeDefs/clientType.js';
import { getClient, getClients } from '../resolvers/clientResolvers.js';

const clientQueries = {
    client: {
        type: ClientType,
        args: { id: { type: GraphQLID } },
        resolve: getClient,
    },
    clients: {
        type: new GraphQLList(ClientType),
        resolve: getClients,
    },
};

export default clientQueries;
