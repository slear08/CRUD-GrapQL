// graphql/mutations/projectMutations.js
import { GraphQLNonNull, GraphQLString, GraphQLID, GraphQLEnumType } from 'graphql';
import { ProjectType } from '../typeDefs/projectType.js';
import { addProject, deleteProject, updateProject } from '../resolvers/projectResolvers.js';

const projectMutations = {
    addProject: {
        type: ProjectType,
        args: {
            name: { type: GraphQLNonNull(GraphQLString) },
            description: { type: GraphQLNonNull(GraphQLString) },
            status: {
                type: new GraphQLEnumType({
                    name: 'ProjectStatus',
                    values: {
                        new: { value: 'Not Started' },
                        progress: { value: 'In Progress' },
                        completed: { value: 'Completed' },
                    },
                }),
                defaultValue: 'Not Started',
            },
            clientId: { type: GraphQLNonNull(GraphQLID) },
        },
        resolve: addProject,
    },
    deleteProject: {
        type: ProjectType,
        args: { id: { type: GraphQLNonNull(GraphQLID) } },
        resolve: deleteProject,
    },
    updateProject: {
        type: ProjectType,
        args: {
            id: { type: GraphQLNonNull(GraphQLID) },
            name: { type: GraphQLString },
            description: { type: GraphQLString },
            status: {
                type: new GraphQLEnumType({
                    name: 'ProjectStatusUpdate',
                    values: {
                        new: { value: 'Not Started' },
                        progress: { value: 'In Progress' },
                        completed: { value: 'Completed' },
                    },
                }),
            },
        },
        resolve: updateProject,
    },
};

export default projectMutations;
