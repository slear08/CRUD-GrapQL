// graphql/queries/projectQueries.js
import { GraphQLID, GraphQLList } from 'graphql';
import { ProjectType } from '../typeDefs/projectType.js';
import { getProject, getProjects } from '../resolvers/projectResolvers.js';

const projectQueries = {
    project: {
        type: ProjectType,
        args: { id: { type: GraphQLID } },
        resolve: getProject,
    },
    projects: {
        type: new GraphQLList(ProjectType),
        resolve: getProjects,
    },
};

export default projectQueries;
