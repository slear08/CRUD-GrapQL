import { GraphQLNonNull, GraphQLString, GraphQLID } from 'graphql';
import { addClient, deleteClient } from '../../controllers/clientControllers.js';
import { ClientType } from '../types/clientType.js';

const clientMutations = {
    addClient: {
        type: ClientType,
        args: {
            name: { type: GraphQLNonNull(GraphQLString) },
            email: { type: GraphQLNonNull(GraphQLString) },
            phone: { type: GraphQLNonNull(GraphQLString) },
        },
        resolve: addClient,
    },
    deleteClient: {
        type: ClientType,
        args: { id: { type: GraphQLNonNull(GraphQLID) } },
        resolve: deleteClient,
    },
};

export default clientMutations;
