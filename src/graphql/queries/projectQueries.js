// graphql/queries/projectQueries.js
import { GraphQLID, GraphQLList } from 'graphql';
import { ProjectType } from '../types/projectType.js';
import { getProject, getProjects } from '../../controllers/projectControllers.js';

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
