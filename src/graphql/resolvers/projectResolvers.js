import Project from '../../models/Projects.js';

const getProjects = () => Project.find();
const getProject = (parent, args) => Project.findById(args.id);

const addProject = (parent, args) => {
    const project = new Project({
        name: args.name,
        description: args.description,
        status: args.status,
        clientId: args.clientId,
    });
    return project.save();
};

const deleteProject = (parent, args) => Project.findByIdAndRemove(args.id);

const updateProject = (parent, args) => {
    return Project.findByIdAndUpdate(
        args.id,
        {
            $set: {
                name: args.name,
                description: args.description,
                status: args.status,
            },
        },
        { new: true }
    );
};

export { getProjects, getProject, addProject, deleteProject, updateProject };
